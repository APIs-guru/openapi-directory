# openapi-client
At Trakt, we collect lots of interesting information about what tv shows and movies everyone is watching. Part of the fun with such data is making it available for anyone to mash up and use on their own site or app. The Trakt API was made just for this purpose. It is very easy to use, you basically call a URL and get some JSON back.

More complex API calls (such as adding a movie or show to your collection) involve sending us data. These are still easy to use, you simply POST some JSON data to a specific URL.

Make sure to check out the [**Required Headers**](#introduction/required-headers) and [**Authentication**](#reference/authentication-oauth) sections for more info on what needs to be sent with each API call. Also check out the [**Terminology**](#introduction/terminology) section insight into the features Trakt supports.

# Create an App

To use the Trakt API, you'll need to [**create a new API app**](https://trakt.tv/oauth/applications/new).

# Stay Connected

API discussion and bugs should be posted in the [**GitHub Developer Forum**](https://github.com/trakt/api-help/issues) and *watch* the repository if you'd like to get notifications. Make sure to follow our [**API Blog**](https://apiblog.trakt.tv) and [**@traktapi on Twitter**](https://twitter.com/traktapi) too.

# API URL

The API should always be accessed over SSL.

```
https://api.trakt.tv
```

If you would like to use our sandbox environment to not fill production with test data, use this URL over SSL. **Note:** Staging is a completely separate environment, so you'll need to [**create a new API app on staging**](https://staging.trakt.tv/oauth/applications/new).

```
https://api-staging.trakt.tv
```

# Verbs

The API uses restful verbs.

| Verb | Description |
|---|---|
| `GET` | Select one or more items. Success returns `200` status code. |
| `POST` | Create a new item. Success returns `201` status code. |
| `PUT` | Update an item. Success returns `200` status code. |
| `DELETE` | Delete an item. Success returns `200` or `204` status code. |

# Status Codes

The API will respond with one of the following HTTP status codes.

| Code | Description |
|---|---|
| `200` | Success
| `201` | Success - *new resource created (POST)*
| `204` | Success - *no content to return (DELETE)*
| `400` | Bad Request - *request couldn't be parsed*
| `401` | Unauthorized - *OAuth must be provided*
| `403` | Forbidden - *invalid API key or unapproved app*
| `404` | Not Found - *method exists, but no record found*
| `405` | Method Not Found - *method doesn't exist*
| `409` | Conflict - *resource already created*
| `412` | Precondition Failed - *use application/json content type*
| `420` | Account Limit Exceeded - *list count, item count, etc*
| `422` | Unprocessable Entity - *validation errors*
| `423` | Locked User Account - *have the user contact support*
| `426` | VIP Only - *user must upgrade to VIP*
| `429` | Rate Limit Exceeded
| `500` | Server Error - *please open a support ticket*
| `502` | Service Unavailable - *server overloaded (try again in 30s)*
| `503` | Service Unavailable - *server overloaded (try again in 30s)*
| `504` | Service Unavailable - *server overloaded (try again in 30s)*
| `520` | Service Unavailable - *Cloudflare error*
| `521` | Service Unavailable - *Cloudflare error*
| `522` | Service Unavailable - *Cloudflare error*

# Required Headers

You'll need to send some headers when making API calls to identify your application, set the version and set the content type to JSON.

| Header | Value |
|---|---|
| `Content-type` <span style=\"color:red;\">*</a> | `application/json` |
| `trakt-api-key` <span style=\"color:red;\">*</a> | Your `client_id` listed under your Trakt applications. |
| `trakt-api-version` <span style=\"color:red;\">*</a> | `2` | API version to use.

All `POST`, `PUT`, and `DELETE` methods require a valid OAuth `access_token`. Some `GET` calls require OAuth and others will return user specific data if OAuth is sent. Methods that &#128274; **require** or have &#128275; **optional** OAuth will be indicated.

Your OAuth library should take care of sending the auth headers for you, but for reference here's how the Bearer token should be sent.

| Header | Value |
|---|---|
| `Authorization` | `Bearer [access_token]` |

# Rate Limiting

All API methods are rate limited. A `429` HTTP status code is returned when the limit has been exceeded. Check the headers for detailed info, then try your API call in `Retry-After` seconds.

| Header | Value |
|---|---|
| `X-Ratelimit` | `{\"name\":\"UNAUTHED_API_GET_LIMIT\",\"period\":300,\"limit\":1000,\"remaining\":0,\"until\":\"2020-10-10T00:24:00Z\"}` |
| `Retry-After` | `10` |

Here are the current limits. There are separate limits for authed (user level) and unauthed (application level) calls. We'll continue to adjust these limits to optimize API performance for everyone. The goal is to prevent API abuse and poor coding, but allow users to use apps normally.

| Name | Verb | Methods | Limit |
|---|---|---|---|
| `AUTHED_API_POST_LIMIT` | `POST`, `PUT`, `DELETE` | all | 1 call per second |
| `AUTHED_API_GET_LIMIT` | `GET` | all | 1000 calls every 5 minutes |
| `UNAUTHED_API_GET_LIMIT` | `GET` | all | 1000 calls every 5 minutes |

# Locked User Account

A `423` HTTP status code is returned when the OAuth user has a locked user account. Please instruct the user to [**contact Trakt support**](https://support.trakt.tv) so we can fix their account. API access will be suspended for the user until we fix their account.

# VIP Methods

Some API methods are tagged 🔥 **VIP Only**. A `426` HTTP status code is returned when the user isn't a VIP, indicating they need to sign up for [**Trakt VIP**](https://trakt.tv/vip) in order to use this method. In your app, please open a browser to `X-Upgrade-URL` so the user can sign up for Trakt VIP.

| Header | Value |
|---|---|
| `X-Upgrade-URL` | `https://trakt.tv/vip` |

Some API methods are tagged 🔥 **VIP Enhanced**. A `420` HTTP status code is returned when the user has exceeded their account limit. Signing up for [**Trakt VIP**](https://trakt.tv/vip) will increase these limits. If the user isn't a VIP, please open a browser to `X-Upgrade-URL` so the user can sign up for Trakt VIP. If they are already VIP and still exceeded the limit, please display a message indicating this.

| Header | Value |
|---|---|
| `X-Upgrade-URL` | `https://trakt.tv/vip` |
| `X-VIP-User` | `true` or `false` |
| `X-Account-Limit` | Limit allowed. |

# Pagination

Some methods are paginated. Methods with &#128196; **Pagination** will load 1 page of 10 items by default. Methods with &#128196; **Pagination Optional** will load all items by default. In either case, append a query string like `?page={page}&limit={limit}` to the URL to influence the results.

| Parameter | Type | Default | Value |
|---|---|---|---|
| `page` | integer | `1` | Number of page of results to be returned. |
| `limit` | integer | `10` | Number of results to return per page. |

All paginated methods will return these HTTP headers.

| Header | Value |
|---|---|
| `X-Pagination-Page` | Current page. |
| `X-Pagination-Limit` | Items per page. |
| `X-Pagination-Page-Count` | Total number of pages. |
| `X-Pagination-Item-Count` | Total number of items. |

# Extended Info

By default, all methods will return minimal info for movies, shows, episodes, people, and users. Minimal info is typically all you need to match locally cached items and includes the `title`, `year`, and `ids`. However, you can request different extended levels of information by adding `?extended={level}` to the URL. Send a comma separated string to get multiple types of extended info.

**Note:** This returns a lot of extra data, so please only use extended parameters if you actually need them!

| Level | Description |
|---|---|
| `full` | Complete info for an item.
| `metadata` | **Collection only.** Additional video and audio info.

# Filters

Some `movies`, `shows`, `calendars`,  and `search` methods support additional filters and will be tagged with &#127898; **Filters**. Applying these filters refines the results and helps your users to more easily discover new items.

Add a query string (i.e. `?years=2016&genres=action`) with any filters you want to use. Some filters allow multiples which can be sent as comma delimited parameters. For example, `?genres=action,adventure` would match the `action` OR `adventure` genre.

**Note:** Make sure to properly URL encode the parameters including spaces and special characters.

#### Common Filters

| Parameter | Multiples | Example | Value |
|---|---|---|---|
| `query` | | `batman` | Search titles and descriptions. |
| `years` | | `2016` | 4 digit year or range of years. |
| `genres` | &#10003; | `action` | [Genre slugs.](#reference/genres) |
| `languages` | &#10003; | `en` | [2 character language code.](#reference/languages) |
| `countries` | &#10003; | `us` | [2 character country code.](#reference/countries) |
| `runtimes` | | `30-90` | Range in minutes. |
| `studios` | &#10003; | `marvel-studios` | Studio slugs. |

#### Rating Filters

Trakt, TMDB, and IMDB ratings apply to `movies`, `shows`, and `episodes`. Rotten Tomatoes and Metacritic apply to `movies`.

| Parameter | Multiples | Example | Value |
|---|---|---|---|
| `ratings` | | `75-100` | Trakt rating range between `0` and `100`. |
| `votes` | | `5000-10000` | Trakt vote count between `0` and `100000`. |
| `tmdb_ratings` | | `5.5-10.0` | TMDB rating range between `0.0` and `10.0`. |
| `tmdb_votes` | | `5000-10000` | TMDB vote count between `0` and `100000`. |
| `imdb_ratings` | | `5.5-10.0` | IMDB rating range between `0.0` and `10.0`. |
| `imdb_votes` | | `5000-10000` | IMDB vote count between `0` and `3000000`. |
| `rt_meters` | | `5.5-10.0` | Rotten Tomatoes meter range between `0` and `100`. |
| `metascores` | | `5.5-10.0` | Metacritic score range between `0` and `100`. |

#### Movie Filters

| Parameter | Multiples | Example | Value |
|---|---|---|---|
| `certifications` | &#10003; | `pg-13` | US content certification. |

#### Show Filters

| Parameter | Multiples | Example | Value |
|---|---|---|---|
| `certifications` | &#10003; | `tv-pg` | US content certification. |
| `networks` | &#10003; | `HBO` | Network name. |
| `status` | &#10003; | `ended` | Set to `returning series`, `continuing`, `in production`, `planned`, `upcoming`,  `pilot`, `canceled`, or `ended`. |

# CORS

When creating your API app, specify the JavaScript (CORS) origins you'll be using. We use these origins to return the headers needed for CORS.

# Dates

All dates will be GMT and returned in the ISO 8601 format like `2014-09-01T09:10:11.000Z`. Adjust accordingly in your app for the user's local timezone.

# Emojis

We use short codes for emojis like `:smiley:` and `:raised_hands:` and render them on the Trakt website using [**JoyPixels**](https://www.joypixels.com/) _(verion 6.6.0)_. Methods that support emojis are tagged with &#128513; **Emojis**. For POST methods, you can send standard unicode emojis and we'll automatically convert them to short codes. For GET methods, we'll return the short codes and it's up to your app to convert them back to unicode emojis.

# Standard Media Objects

All methods will accept or return standard media objects for `movie`, `show`, `season`, `episode`, `person`, and `user` items. Here are examples for all minimal objects.

#### movie

```
{
    \"title\": \"Batman Begins\",
    \"year\": 2005,
    \"ids\": {
        \"trakt\": 1,
        \"slug\": \"batman-begins-2005\",
        \"imdb\": \"tt0372784\",
        \"tmdb\": 272
    }
}
```

#### show

```
{
    \"title\": \"Breaking Bad\",
    \"year\": 2008,
    \"ids\": {
        \"trakt\": 1,
        \"slug\": \"breaking-bad\",
        \"tvdb\": 81189,
        \"imdb\": \"tt0903747\",
        \"tmdb\": 1396
    }
}
```

#### season

```
{
    \"number\": 0,
    \"ids\": {
        \"trakt\": 1,
        \"tvdb\": 439371,
        \"tmdb\": 3577
    }
}
```

#### episode

```
{
    \"season\": 1,
    \"number\": 1,
    \"title\": \"Pilot\",
    \"ids\": {
        \"trakt\": 16,
        \"tvdb\": 349232,
        \"imdb\": \"tt0959621\",
        \"tmdb\": 62085
    }
}
```

#### person

```
{
    \"name\": \"Bryan Cranston\",
    \"ids\": {
        \"trakt\": 142,
        \"slug\": \"bryan-cranston\",
        \"imdb\": \"nm0186505\",
        \"tmdb\": 17419
    }
}
```

#### user

```
{
    \"username\": \"sean\",
    \"private\": false,
    \"name\": \"Sean Rudford\",
    \"vip\": true,
    \"vip_ep\": true,
    \"ids\": {
        \"slug\": \"sean\"
    }
}
```

# Images

The standard media objects for all `movie`, `show`, `season`, `episode`, and `person` items include an `ids` object. These `ids` map to other services like [TMDB](https://www.themoviedb.org), [TVDB](https://thetvdb.com), [Fanart.tv](https://fanart.tv), [IMDB](https://www.imdb.com), and [OMDB](https://www.omdbapi.com/).

Most of these services have free APIs you can use to grab lots of great looking images. Here’s a chart to help you find the best artwork for your app. [**We also wrote an article to help with this.**](https://apiblog.trakt.tv/how-to-find-the-best-images-516045bcc3b6)

| Media | Type | [TMDB](https://developers.themoviedb.org/3) | [TVDB](https://api.thetvdb.com/swagger) | [Fanart.tv](http://docs.fanarttv.apiary.io) | [OMDB](https://www.omdbapi.com) |
|---|---|---|---|---|---|
| `shows` | `poster` | &#10003; | &#10003; | &#10003; | &#10003; |
|  | `fanart` | &#10003; | &#10003; | &#10003; |  |
|  | `banner` |  | &#10003; | &#10003; |  |
|  | `logo` |  |  | &#10003; |  |
|  | `clearart` |  |  | &#10003; |  |
|  | `thumb` |  |  | &#10003; |  |
| `seasons` | `poster` | &#10003; | &#10003; | &#10003; |  |
|  | `banner` |  | &#10003; | &#10003; |  |
|  | `thumb` |  |  | &#10003; |  |
| `episodes` | `screenshot` | &#10003; | &#10003; |  |  |
| `movies` | `poster` | &#10003; |  | &#10003; | &#10003; |
|  | `fanart` | &#10003; |  | &#10003; |  |
|  | `banner` |  |  | &#10003; |  |
|  | `logo` |  |  | &#10003; |  |
|  | `clearart` |  |  | &#10003; |  |
|  | `thumb` |  |  | &#10003; |  |
| `person` | `headshot` | &#10003; |  |  |  |
|  | `character` |  | &#10003; |  |  |

# Website Media Links

There are several ways to construct direct links to media on the Trakt website. The website itself uses slugs so the URLs are more readable.

| Type | URL |
|---|---|
| `movie` | `/movies/:slug` |
| `show` | `/shows/:slug` |
| `season` | `/shows/:slug/seasons/:num` |
| `episode` | `/shows/:slug/seasons/:num/episodes/:num` |
| `person` | `/people/:slug` |
| `comment` | `/comments/:id` |
| `list` | `/lists/:id` |

You can also create links using the Trakt, IMDB, TMDB, or TVDB IDs. We recommend using the Trakt ID if possible since that will always have full coverage. If you use the search url without an `id_type` it will return search results if multiple items are found.

| Type | URL |
|---|---|
| `trakt` | `/search/trakt/:id` |
|  | `/search/trakt/:id?id_type=movie` |
|  | `/search/trakt/:id?id_type=show` |
|  | `/search/trakt/:id?id_type=season` |
|  | `/search/trakt/:id?id_type=episode` |
|  | `/search/trakt/:id?id_type=person` |
| `imdb` | `/search/imdb/:id` |
| `tmdb` | `/search/tmdb/:id` |
|  | `/search/tmdb/:id?id_type=movie` |
|  | `/search/tmdb/:id?id_type=show` |
|  | `/search/tmdb/:id?id_type=episode` |
|  | `/search/tmdb/:id?id_type=person` |
| `tvdb` | `/search/tvdb/:id` |
|  | `/search/tvdb/:id?id_type=show` |
|  | `/search/tvdb/:id?id_type=episode` |

# Third Party Libraries

All of the libraries listed below are user contributed. If you find a bug or missing feature, please contact the developer directly. These might help give your project a head start, but we can't provide direct support for any of these libraries. Please help us keep this list up to date.

| Language | Name | Repository |
|---|---|---|
| `C#` | `Trakt.NET` | https://github.com/henrikfroehling/Trakt.NET |
|  | `TraktSharp` | https://github.com/wwarby/TraktSharp |
| `C++` | `libtraqt` | https://github.com/RobertMe/libtraqt |
| `Clojure` | `clj-trakt` | https://github.com/niamu/clj-trakt |
| `Java` | `trakt-java` | https://github.com/UweTrottmann/trakt-java |
| `Kotlin` | `trakt-api` | https://github.com/MoviebaseApp/trakt-api |
| `Node.js` | `Trakt.tv` | https://github.com/vankasteelj/trakt.tv |
|  | `TraktApi2` | https://github.com/PatrickE94/traktapi2 |
| `Python` | `trakt.py` | https://github.com/fuzeman/trakt.py |
|  | `pyTrakt` | https://github.com/moogar0880/PyTrakt |
| `R` | `tRakt` | https://github.com/jemus42/tRakt |
| `React Native` | `nodeless-trakt` | https://github.com/kdemoya/nodeless-trakt |
| `Ruby` | `omniauth-trakt` | https://github.com/wafcio/omniauth-trakt |
|  | `omniauth-trakt` | https://github.com/alextakitani/omniauth-trakt |
| `Swift` | `TraktKit` | https://github.com/MaxHasADHD/TraktKit |
|  | `AKTrakt` | https://github.com/arsonik/AKTrakt |

# Terminology

Trakt has a lot of features and here's a chart to help explain the differences between some of them.

| Term | Description |
|---|---|
| `scrobble` | Automatic way to track what a user is watching in a media center. |
| `checkin` | Manual action used by mobile apps allowing the user to indicate what they are watching right now. |
| `history` | All watched items (scrobbles, checkins, watched) for a user. |
| `collection` | Items a user has available to watch including Blu-Rays, DVDs, and digital downloads. |
| `watchlist` | Items a user wants to watch in the future. Once watched, they are auto removed from this list. |
| `list` | Personal list for any purpose. Items are not auto removed from any personal lists. |
| `recommendations` | Movies and TV shows a user personally recommends to others. |

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)



# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationDevicesApi(api_client)
    generate_new_device_codes_request = openapi_client.GenerateNewDeviceCodesRequest() # GenerateNewDeviceCodesRequest |  (optional)

    try:
        # Generate new device codes
        api_instance.generate_new_device_codes(generate_new_device_codes_request=generate_new_device_codes_request)
    except ApiException as e:
        print("Exception when calling AuthenticationDevicesApi->generate_new_device_codes: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.trakt.tv*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthenticationDevicesApi* | [**generate_new_device_codes**](docs/AuthenticationDevicesApi.md#generate_new_device_codes) | **POST** /oauth/device/code | Generate new device codes
*AuthenticationDevicesApi* | [**poll_for_the_access_token**](docs/AuthenticationDevicesApi.md#poll_for_the_access_token) | **POST** /oauth/device/token | Poll for the access_token
*AuthenticationOAuthApi* | [**authorize_application**](docs/AuthenticationOAuthApi.md#authorize_application) | **GET** /oauth/authorize | Authorize Application
*AuthenticationOAuthApi* | [**exchange_refresh_token_for_access_token**](docs/AuthenticationOAuthApi.md#exchange_refresh_token_for_access_token) | **POST** /oauth/token | Exchange refresh_token for access_token
*AuthenticationOAuthApi* | [**revoke_an_access_token**](docs/AuthenticationOAuthApi.md#revoke_an_access_token) | **POST** /oauth/revoke | Revoke an access_token
*CalendarsApi* | [**calendars_all_dvd_start_date_days_get**](docs/CalendarsApi.md#calendars_all_dvd_start_date_days_get) | **GET** /calendars/all/dvd/{start_date}/{days} | Get DVD releases
*CalendarsApi* | [**calendars_all_movies_start_date_days_get**](docs/CalendarsApi.md#calendars_all_movies_start_date_days_get) | **GET** /calendars/all/movies/{start_date}/{days} | Get movies
*CalendarsApi* | [**calendars_all_shows_new_start_date_days_get**](docs/CalendarsApi.md#calendars_all_shows_new_start_date_days_get) | **GET** /calendars/all/shows/new/{start_date}/{days} | Get new shows
*CalendarsApi* | [**calendars_all_shows_premieres_start_date_days_get**](docs/CalendarsApi.md#calendars_all_shows_premieres_start_date_days_get) | **GET** /calendars/all/shows/premieres/{start_date}/{days} | Get season premieres
*CalendarsApi* | [**calendars_all_shows_start_date_days_get**](docs/CalendarsApi.md#calendars_all_shows_start_date_days_get) | **GET** /calendars/all/shows/{start_date}/{days} | Get shows
*CalendarsApi* | [**get_dvd_releases**](docs/CalendarsApi.md#get_dvd_releases) | **GET** /calendars/my/dvd/{start_date}/{days} | Get DVD releases
*CalendarsApi* | [**get_movies**](docs/CalendarsApi.md#get_movies) | **GET** /calendars/my/movies/{start_date}/{days} | Get movies
*CalendarsApi* | [**get_new_shows**](docs/CalendarsApi.md#get_new_shows) | **GET** /calendars/my/shows/new/{start_date}/{days} | Get new shows
*CalendarsApi* | [**get_season_premieres**](docs/CalendarsApi.md#get_season_premieres) | **GET** /calendars/my/shows/premieres/{start_date}/{days} | Get season premieres
*CalendarsApi* | [**get_shows**](docs/CalendarsApi.md#get_shows) | **GET** /calendars/my/shows/{start_date}/{days} | Get shows
*CertificationsApi* | [**get_certifications**](docs/CertificationsApi.md#get_certifications) | **GET** /certifications/{type} | Get certifications
*CheckinApi* | [**check_into_an_item**](docs/CheckinApi.md#check_into_an_item) | **POST** /checkin | Check into an item
*CheckinApi* | [**delete_any_active_checkins**](docs/CheckinApi.md#delete_any_active_checkins) | **DELETE** /checkin | Delete any active checkins
*CommentsApi* | [**delete_a_comment_or_reply**](docs/CommentsApi.md#delete_a_comment_or_reply) | **DELETE** /comments/{id} | Delete a comment or reply
*CommentsApi* | [**get_a_comment_or_reply**](docs/CommentsApi.md#get_a_comment_or_reply) | **GET** /comments/{id} | Get a comment or reply
*CommentsApi* | [**get_all_users_who_liked_a_comment**](docs/CommentsApi.md#get_all_users_who_liked_a_comment) | **GET** /comments/{id}/likes | Get all users who liked a comment
*CommentsApi* | [**get_recently_created_comments**](docs/CommentsApi.md#get_recently_created_comments) | **GET** /comments/recent/{comment_type}/{type} | Get recently created comments
*CommentsApi* | [**get_recently_updated_comments**](docs/CommentsApi.md#get_recently_updated_comments) | **GET** /comments/updates/{comment_type}/{type} | Get recently updated comments
*CommentsApi* | [**get_replies_for_a_comment**](docs/CommentsApi.md#get_replies_for_a_comment) | **GET** /comments/{id}/replies | Get replies for a comment
*CommentsApi* | [**get_the_attached_media_item**](docs/CommentsApi.md#get_the_attached_media_item) | **GET** /comments/{id}/item | Get the attached media item
*CommentsApi* | [**get_trending_comments**](docs/CommentsApi.md#get_trending_comments) | **GET** /comments/trending/{comment_type}/{type} | Get trending comments
*CommentsApi* | [**like_a_comment**](docs/CommentsApi.md#like_a_comment) | **POST** /comments/{id}/like | Like a comment
*CommentsApi* | [**post_a_comment**](docs/CommentsApi.md#post_a_comment) | **POST** /comments | Post a comment
*CommentsApi* | [**post_a_reply_for_a_comment**](docs/CommentsApi.md#post_a_reply_for_a_comment) | **POST** /comments/{id}/replies | Post a reply for a comment
*CommentsApi* | [**remove_like_on_a_comment**](docs/CommentsApi.md#remove_like_on_a_comment) | **DELETE** /comments/{id}/like | Remove like on a comment
*CommentsApi* | [**update_a_comment_or_reply**](docs/CommentsApi.md#update_a_comment_or_reply) | **PUT** /comments/{id} | Update a comment or reply
*CountriesApi* | [**get_countries**](docs/CountriesApi.md#get_countries) | **GET** /countries/{type} | Get countries
*EpisodesApi* | [**get_a_single_episode_for_a_show**](docs/EpisodesApi.md#get_a_single_episode_for_a_show) | **GET** /shows/{id}/seasons/{season}/episodes/{episode} | Get a single episode for a show
*EpisodesApi* | [**get_all_episode_comments**](docs/EpisodesApi.md#get_all_episode_comments) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort} | Get all episode comments
*EpisodesApi* | [**get_all_episode_translations**](docs/EpisodesApi.md#get_all_episode_translations) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/translations/{language} | Get all episode translations
*EpisodesApi* | [**get_all_people_for_an_episode**](docs/EpisodesApi.md#get_all_people_for_an_episode) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/people | Get all people for an episode
*EpisodesApi* | [**get_episode_ratings**](docs/EpisodesApi.md#get_episode_ratings) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/ratings | Get episode ratings
*EpisodesApi* | [**get_episode_stats**](docs/EpisodesApi.md#get_episode_stats) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/stats | Get episode stats
*EpisodesApi* | [**get_lists_containing_this_episode**](docs/EpisodesApi.md#get_lists_containing_this_episode) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort} | Get lists containing this episode
*EpisodesApi* | [**shows_id_seasons_season_episodes_episode_watching_get**](docs/EpisodesApi.md#shows_id_seasons_season_episodes_episode_watching_get) | **GET** /shows/{id}/seasons/{season}/episodes/{episode}/watching | Get users watching right now
*GenresApi* | [**get_genres**](docs/GenresApi.md#get_genres) | **GET** /genres/{type} | Get genres
*LanguagesApi* | [**get_languages**](docs/LanguagesApi.md#get_languages) | **GET** /languages/{type} | Get languages
*ListsApi* | [**get_all_list_comments**](docs/ListsApi.md#get_all_list_comments) | **GET** /lists/{id}/comments/{sort} | Get all list comments
*ListsApi* | [**get_all_users_who_liked_a_list**](docs/ListsApi.md#get_all_users_who_liked_a_list) | **GET** /lists/{id}/likes | Get all users who liked a list
*ListsApi* | [**get_items_on_a_list**](docs/ListsApi.md#get_items_on_a_list) | **GET** /lists/{id}/items/{type} | Get items on a list
*ListsApi* | [**get_list**](docs/ListsApi.md#get_list) | **GET** /lists/{id} | Get list
*ListsApi* | [**get_popular_lists**](docs/ListsApi.md#get_popular_lists) | **GET** /lists/popular | Get popular lists
*ListsApi* | [**get_trending_lists**](docs/ListsApi.md#get_trending_lists) | **GET** /lists/trending | Get trending lists
*MoviesApi* | [**get_a_movie**](docs/MoviesApi.md#get_a_movie) | **GET** /movies/{id} | Get a movie
*MoviesApi* | [**get_all_movie_aliases**](docs/MoviesApi.md#get_all_movie_aliases) | **GET** /movies/{id}/aliases | Get all movie aliases
*MoviesApi* | [**get_all_movie_comments**](docs/MoviesApi.md#get_all_movie_comments) | **GET** /movies/{id}/comments/{sort} | Get all movie comments
*MoviesApi* | [**get_all_movie_releases**](docs/MoviesApi.md#get_all_movie_releases) | **GET** /movies/{id}/releases/{country} | Get all movie releases
*MoviesApi* | [**get_all_movie_translations**](docs/MoviesApi.md#get_all_movie_translations) | **GET** /movies/{id}/translations/{language} | Get all movie translations
*MoviesApi* | [**get_all_people_for_a_movie**](docs/MoviesApi.md#get_all_people_for_a_movie) | **GET** /movies/{id}/people | Get all people for a movie
*MoviesApi* | [**get_lists_containing_this_movie**](docs/MoviesApi.md#get_lists_containing_this_movie) | **GET** /movies/{id}/lists/{type}/{sort} | Get lists containing this movie
*MoviesApi* | [**get_movie_ratings**](docs/MoviesApi.md#get_movie_ratings) | **GET** /movies/{id}/ratings | Get movie ratings
*MoviesApi* | [**get_movie_stats**](docs/MoviesApi.md#get_movie_stats) | **GET** /movies/{id}/stats | Get movie stats
*MoviesApi* | [**get_movie_studios**](docs/MoviesApi.md#get_movie_studios) | **GET** /movies/{id}/studios | Get movie studios
*MoviesApi* | [**get_popular_movies**](docs/MoviesApi.md#get_popular_movies) | **GET** /movies/popular | Get popular movies
*MoviesApi* | [**get_recently_updated_movie_trakt_ids**](docs/MoviesApi.md#get_recently_updated_movie_trakt_ids) | **GET** /movies/updates/id/{start_date} | Get recently updated movie Trakt IDs
*MoviesApi* | [**get_recently_updated_movies**](docs/MoviesApi.md#get_recently_updated_movies) | **GET** /movies/updates/{start_date} | Get recently updated movies
*MoviesApi* | [**get_related_movies**](docs/MoviesApi.md#get_related_movies) | **GET** /movies/{id}/related | Get related movies
*MoviesApi* | [**get_the_most_anticipated_movies**](docs/MoviesApi.md#get_the_most_anticipated_movies) | **GET** /movies/anticipated | Get the most anticipated movies
*MoviesApi* | [**get_the_most_collected_movies**](docs/MoviesApi.md#get_the_most_collected_movies) | **GET** /movies/collected/{period} | Get the most Collected movies
*MoviesApi* | [**get_the_most_played_movies**](docs/MoviesApi.md#get_the_most_played_movies) | **GET** /movies/played/{period} | Get the most played movies
*MoviesApi* | [**get_the_most_recommended_movies**](docs/MoviesApi.md#get_the_most_recommended_movies) | **GET** /movies/recommended/{period} | Get the most recommended movies
*MoviesApi* | [**get_the_most_watched_movies**](docs/MoviesApi.md#get_the_most_watched_movies) | **GET** /movies/watched/{period} | Get the most watched movies
*MoviesApi* | [**get_the_weekend_box_office**](docs/MoviesApi.md#get_the_weekend_box_office) | **GET** /movies/boxoffice | Get the weekend box office
*MoviesApi* | [**get_trending_movies**](docs/MoviesApi.md#get_trending_movies) | **GET** /movies/trending | Get trending movies
*MoviesApi* | [**get_users_watching_right_now**](docs/MoviesApi.md#get_users_watching_right_now) | **GET** /movies/{id}/watching | Get users watching right now
*NetworksApi* | [**get_networks**](docs/NetworksApi.md#get_networks) | **GET** /networks | Get networks
*PeopleApi* | [**get_a_single_person**](docs/PeopleApi.md#get_a_single_person) | **GET** /people/{id} | Get a single person
*PeopleApi* | [**get_lists_containing_this_person**](docs/PeopleApi.md#get_lists_containing_this_person) | **GET** /people/{id}/lists/{type}/{sort} | Get lists containing this person
*PeopleApi* | [**get_movie_credits**](docs/PeopleApi.md#get_movie_credits) | **GET** /people/{id}/movies | Get movie credits
*PeopleApi* | [**get_recently_updated_people**](docs/PeopleApi.md#get_recently_updated_people) | **GET** /people/updates/{start_date} | Get recently updated people
*PeopleApi* | [**get_recently_updated_people_trakt_ids**](docs/PeopleApi.md#get_recently_updated_people_trakt_ids) | **GET** /people/updates/id/{start_date} | Get recently updated people Trakt IDs
*PeopleApi* | [**get_show_credits**](docs/PeopleApi.md#get_show_credits) | **GET** /people/{id}/shows | Get show credits
*RecommendationsApi* | [**get_movie_recommendations**](docs/RecommendationsApi.md#get_movie_recommendations) | **GET** /recommendations/movies | Get movie recommendations
*RecommendationsApi* | [**get_show_recommendations**](docs/RecommendationsApi.md#get_show_recommendations) | **GET** /recommendations/shows | Get show recommendations
*RecommendationsApi* | [**hide_a_movie_recommendation**](docs/RecommendationsApi.md#hide_a_movie_recommendation) | **DELETE** /recommendations/movies/{id} | Hide a movie recommendation
*RecommendationsApi* | [**hide_a_show_recommendation**](docs/RecommendationsApi.md#hide_a_show_recommendation) | **DELETE** /recommendations/shows/{id} | Hide a show recommendation
*ScrobbleApi* | [**pause_watching_in_a_media_center**](docs/ScrobbleApi.md#pause_watching_in_a_media_center) | **POST** /scrobble/pause | Pause watching in a media center
*ScrobbleApi* | [**start_watching_in_a_media_center**](docs/ScrobbleApi.md#start_watching_in_a_media_center) | **POST** /scrobble/start | Start watching in a media center
*ScrobbleApi* | [**stop_or_finish_watching_in_a_media_center**](docs/ScrobbleApi.md#stop_or_finish_watching_in_a_media_center) | **POST** /scrobble/stop | Stop or finish watching in a media center
*SearchApi* | [**get_id_lookup_results**](docs/SearchApi.md#get_id_lookup_results) | **GET** /search/{id_type}/{id} | Get ID lookup results
*SearchApi* | [**get_text_query_results**](docs/SearchApi.md#get_text_query_results) | **GET** /search/{type} | Get text query results
*SeasonsApi* | [**get_all_people_for_a_season**](docs/SeasonsApi.md#get_all_people_for_a_season) | **GET** /shows/{id}/seasons/{season}/people | Get all people for a season
*SeasonsApi* | [**get_all_season_comments**](docs/SeasonsApi.md#get_all_season_comments) | **GET** /shows/{id}/seasons/{season}/comments/{sort} | Get all season comments
*SeasonsApi* | [**get_all_season_translations**](docs/SeasonsApi.md#get_all_season_translations) | **GET** /shows/{id}/seasons/{season}/translations/{language} | Get all season translations
*SeasonsApi* | [**get_all_seasons_for_a_show**](docs/SeasonsApi.md#get_all_seasons_for_a_show) | **GET** /shows/{id}/seasons | Get all seasons for a show
*SeasonsApi* | [**get_lists_containing_this_season**](docs/SeasonsApi.md#get_lists_containing_this_season) | **GET** /shows/{id}/seasons/{season}/lists/{type}/{sort} | Get lists containing this season
*SeasonsApi* | [**get_season_ratings**](docs/SeasonsApi.md#get_season_ratings) | **GET** /shows/{id}/seasons/{season}/ratings | Get season ratings
*SeasonsApi* | [**get_season_stats**](docs/SeasonsApi.md#get_season_stats) | **GET** /shows/{id}/seasons/{season}/stats | Get season stats
*SeasonsApi* | [**get_single_season_for_a_show**](docs/SeasonsApi.md#get_single_season_for_a_show) | **GET** /shows/{id}/seasons/{season} | Get single season for a show
*SeasonsApi* | [**shows_id_seasons_season_watching_get**](docs/SeasonsApi.md#shows_id_seasons_season_watching_get) | **GET** /shows/{id}/seasons/{season}/watching | Get users watching right now
*ShowsApi* | [**get_a_single_show**](docs/ShowsApi.md#get_a_single_show) | **GET** /shows/{id} | Get a single show
*ShowsApi* | [**get_all_people_for_a_show**](docs/ShowsApi.md#get_all_people_for_a_show) | **GET** /shows/{id}/people | Get all people for a show
*ShowsApi* | [**get_all_show_aliases**](docs/ShowsApi.md#get_all_show_aliases) | **GET** /shows/{id}/aliases | Get all show aliases
*ShowsApi* | [**get_all_show_certifications**](docs/ShowsApi.md#get_all_show_certifications) | **GET** /shows/{id}/certifications | Get all show certifications
*ShowsApi* | [**get_all_show_comments**](docs/ShowsApi.md#get_all_show_comments) | **GET** /shows/{id}/comments/{sort} | Get all show comments
*ShowsApi* | [**get_all_show_translations**](docs/ShowsApi.md#get_all_show_translations) | **GET** /shows/{id}/translations/{language} | Get all show translations
*ShowsApi* | [**get_last_episode**](docs/ShowsApi.md#get_last_episode) | **GET** /shows/{id}/last_episode | Get last episode
*ShowsApi* | [**get_lists_containing_this_show**](docs/ShowsApi.md#get_lists_containing_this_show) | **GET** /shows/{id}/lists/{type}/{sort} | Get lists containing this show
*ShowsApi* | [**get_next_episode**](docs/ShowsApi.md#get_next_episode) | **GET** /shows/{id}/next_episode | Get next episode
*ShowsApi* | [**get_popular_shows**](docs/ShowsApi.md#get_popular_shows) | **GET** /shows/popular | Get popular shows
*ShowsApi* | [**get_recently_updated_show_trakt_ids**](docs/ShowsApi.md#get_recently_updated_show_trakt_ids) | **GET** /shows/updates/id/{start_date} | Get recently updated show Trakt IDs
*ShowsApi* | [**get_recently_updated_shows**](docs/ShowsApi.md#get_recently_updated_shows) | **GET** /shows/updates/{start_date} | Get recently updated shows
*ShowsApi* | [**get_related_shows**](docs/ShowsApi.md#get_related_shows) | **GET** /shows/{id}/related | Get related shows
*ShowsApi* | [**get_show_collection_progress**](docs/ShowsApi.md#get_show_collection_progress) | **GET** /shows/{id}/progress/collection | Get show collection progress
*ShowsApi* | [**get_show_ratings**](docs/ShowsApi.md#get_show_ratings) | **GET** /shows/{id}/ratings | Get show ratings
*ShowsApi* | [**get_show_stats**](docs/ShowsApi.md#get_show_stats) | **GET** /shows/{id}/stats | Get show stats
*ShowsApi* | [**get_show_studios**](docs/ShowsApi.md#get_show_studios) | **GET** /shows/{id}/studios | Get show studios
*ShowsApi* | [**get_show_watched_progress**](docs/ShowsApi.md#get_show_watched_progress) | **GET** /shows/{id}/progress/watched | Get show watched progress
*ShowsApi* | [**get_the_most_anticipated_shows**](docs/ShowsApi.md#get_the_most_anticipated_shows) | **GET** /shows/anticipated | Get the most anticipated shows
*ShowsApi* | [**get_the_most_collected_shows**](docs/ShowsApi.md#get_the_most_collected_shows) | **GET** /shows/collected/{period} | Get the most collected shows
*ShowsApi* | [**get_the_most_played_shows**](docs/ShowsApi.md#get_the_most_played_shows) | **GET** /shows/played/{period} | Get the most played shows
*ShowsApi* | [**get_the_most_recommended_shows**](docs/ShowsApi.md#get_the_most_recommended_shows) | **GET** /shows/recommended/{period} | Get the most recommended shows
*ShowsApi* | [**get_the_most_watched_shows**](docs/ShowsApi.md#get_the_most_watched_shows) | **GET** /shows/watched/{period} | Get the most watched shows
*ShowsApi* | [**get_trending_shows**](docs/ShowsApi.md#get_trending_shows) | **GET** /shows/trending | Get trending shows
*ShowsApi* | [**reset_show_progress**](docs/ShowsApi.md#reset_show_progress) | **POST** /shows/{id}/progress/watched/reset | Reset show progress
*ShowsApi* | [**shows_id_watching_get**](docs/ShowsApi.md#shows_id_watching_get) | **GET** /shows/{id}/watching | Get users watching right now
*ShowsApi* | [**undo_reset_show_progress**](docs/ShowsApi.md#undo_reset_show_progress) | **DELETE** /shows/{id}/progress/watched/reset | Undo reset show progress
*SyncApi* | [**add_items_to_collection**](docs/SyncApi.md#add_items_to_collection) | **POST** /sync/collection | Add items to collection
*SyncApi* | [**add_items_to_personal_recommendations**](docs/SyncApi.md#add_items_to_personal_recommendations) | **POST** /sync/recommendations | Add items to personal recommendations
*SyncApi* | [**add_items_to_watched_history**](docs/SyncApi.md#add_items_to_watched_history) | **POST** /sync/history | Add items to watched history
*SyncApi* | [**add_items_to_watchlist**](docs/SyncApi.md#add_items_to_watchlist) | **POST** /sync/watchlist | Add items to watchlist
*SyncApi* | [**add_new_ratings**](docs/SyncApi.md#add_new_ratings) | **POST** /sync/ratings | Add new ratings
*SyncApi* | [**get_collection**](docs/SyncApi.md#get_collection) | **GET** /sync/collection/{type} | Get collection
*SyncApi* | [**get_last_activity**](docs/SyncApi.md#get_last_activity) | **GET** /sync/last_activities | Get last activity
*SyncApi* | [**get_personal_recommendations**](docs/SyncApi.md#get_personal_recommendations) | **GET** /sync/recommendations/{type}/{sort} | Get personal recommendations
*SyncApi* | [**get_playback_progress**](docs/SyncApi.md#get_playback_progress) | **GET** /sync/playback/{type} | Get playback progress
*SyncApi* | [**get_ratings**](docs/SyncApi.md#get_ratings) | **GET** /sync/ratings/{type}/{rating} | Get ratings
*SyncApi* | [**get_watched**](docs/SyncApi.md#get_watched) | **GET** /sync/watched/{type} | Get watched
*SyncApi* | [**get_watched_history**](docs/SyncApi.md#get_watched_history) | **GET** /sync/history/{type}/{id} | Get watched history
*SyncApi* | [**get_watchlist**](docs/SyncApi.md#get_watchlist) | **GET** /sync/watchlist/{type}/{sort} | Get watchlist
*SyncApi* | [**remove_a_playback_item**](docs/SyncApi.md#remove_a_playback_item) | **DELETE** /sync/playback/{id} | Remove a playback item
*SyncApi* | [**remove_items_from_collection**](docs/SyncApi.md#remove_items_from_collection) | **POST** /sync/collection/remove | Remove items from collection
*SyncApi* | [**remove_items_from_history**](docs/SyncApi.md#remove_items_from_history) | **POST** /sync/history/remove | Remove items from history
*SyncApi* | [**remove_items_from_personal_recommendations**](docs/SyncApi.md#remove_items_from_personal_recommendations) | **POST** /sync/recommendations/remove | Remove items from personal recommendations
*SyncApi* | [**remove_items_from_watchlist**](docs/SyncApi.md#remove_items_from_watchlist) | **POST** /sync/watchlist/remove | Remove items from watchlist
*SyncApi* | [**remove_ratings**](docs/SyncApi.md#remove_ratings) | **POST** /sync/ratings/remove | Remove ratings
*SyncApi* | [**reorder_personally_recommended_items**](docs/SyncApi.md#reorder_personally_recommended_items) | **POST** /sync/recommendations/reorder | Reorder personally recommended items
*SyncApi* | [**reorder_watchlist_items**](docs/SyncApi.md#reorder_watchlist_items) | **POST** /sync/watchlist/reorder | Reorder watchlist items
*UsersApi* | [**add_hidden_items**](docs/UsersApi.md#add_hidden_items) | **POST** /users/hidden/{section} | Add hidden items
*UsersApi* | [**add_items_to_personal_list**](docs/UsersApi.md#add_items_to_personal_list) | **POST** /users/{id}/lists/{list_id}/items | Add items to personal list
*UsersApi* | [**approve_follow_request**](docs/UsersApi.md#approve_follow_request) | **POST** /users/requests/{id} | Approve follow request
*UsersApi* | [**create_personal_list**](docs/UsersApi.md#create_personal_list) | **POST** /users/{id}/lists | Create personal list
*UsersApi* | [**delete_a_users_personal_list**](docs/UsersApi.md#delete_a_users_personal_list) | **DELETE** /users/{id}/lists/{list_id} | Delete a user&#39;s personal list
*UsersApi* | [**deny_follow_request**](docs/UsersApi.md#deny_follow_request) | **DELETE** /users/requests/{id} | Deny follow request
*UsersApi* | [**follow_this_user**](docs/UsersApi.md#follow_this_user) | **POST** /users/{id}/follow | Follow this user
*UsersApi* | [**get_a_users_personal_lists**](docs/UsersApi.md#get_a_users_personal_lists) | **GET** /users/{id}/lists | Get a user&#39;s personal lists
*UsersApi* | [**get_all_lists_a_user_can_collaborate_on**](docs/UsersApi.md#get_all_lists_a_user_can_collaborate_on) | **GET** /users/{id}/lists/collaborations | Get all lists a user can collaborate on
*UsersApi* | [**get_comments**](docs/UsersApi.md#get_comments) | **GET** /users/{id}/comments/{comment_type}/{type} | Get comments
*UsersApi* | [**get_follow_requests**](docs/UsersApi.md#get_follow_requests) | **GET** /users/requests | Get follow requests
*UsersApi* | [**get_followers**](docs/UsersApi.md#get_followers) | **GET** /users/{id}/followers | Get followers
*UsersApi* | [**get_following**](docs/UsersApi.md#get_following) | **GET** /users/{id}/following | Get following
*UsersApi* | [**get_friends**](docs/UsersApi.md#get_friends) | **GET** /users/{id}/friends | Get friends
*UsersApi* | [**get_hidden_items**](docs/UsersApi.md#get_hidden_items) | **GET** /users/hidden/{section} | Get hidden items
*UsersApi* | [**get_items_on_a_personal_list**](docs/UsersApi.md#get_items_on_a_personal_list) | **GET** /users/{id}/lists/{list_id}/items/{type} | Get items on a personal list
*UsersApi* | [**get_likes**](docs/UsersApi.md#get_likes) | **GET** /users/{id}/likes/{type} | Get likes
*UsersApi* | [**get_pending_following_requests**](docs/UsersApi.md#get_pending_following_requests) | **GET** /users/requests/following | Get pending following requests
*UsersApi* | [**get_personal_list**](docs/UsersApi.md#get_personal_list) | **GET** /users/{id}/lists/{list_id} | Get personal list
*UsersApi* | [**get_saved_filters**](docs/UsersApi.md#get_saved_filters) | **GET** /users/saved_filters/{section} | Get saved filters
*UsersApi* | [**get_stats**](docs/UsersApi.md#get_stats) | **GET** /users/{id}/stats | Get stats
*UsersApi* | [**get_user_profile**](docs/UsersApi.md#get_user_profile) | **GET** /users/{id} | Get user profile
*UsersApi* | [**get_watching**](docs/UsersApi.md#get_watching) | **GET** /users/{id}/watching | Get watching
*UsersApi* | [**like_a_list**](docs/UsersApi.md#like_a_list) | **POST** /users/{id}/lists/{list_id}/like | Like a list
*UsersApi* | [**remove_hidden_items**](docs/UsersApi.md#remove_hidden_items) | **POST** /users/hidden/{section}/remove | Remove hidden items
*UsersApi* | [**remove_items_from_personal_list**](docs/UsersApi.md#remove_items_from_personal_list) | **POST** /users/{id}/lists/{list_id}/items/remove | Remove items from personal list
*UsersApi* | [**remove_like_on_a_list**](docs/UsersApi.md#remove_like_on_a_list) | **DELETE** /users/{id}/lists/{list_id}/like | Remove like on a list
*UsersApi* | [**reorder_a_users_lists**](docs/UsersApi.md#reorder_a_users_lists) | **POST** /users/{id}/lists/reorder | Reorder a user&#39;s lists
*UsersApi* | [**reorder_items_on_a_list**](docs/UsersApi.md#reorder_items_on_a_list) | **POST** /users/{id}/lists/{list_id}/items/reorder | Reorder items on a list
*UsersApi* | [**retrieve_settings**](docs/UsersApi.md#retrieve_settings) | **GET** /users/settings | Retrieve settings
*UsersApi* | [**unfollow_this_user**](docs/UsersApi.md#unfollow_this_user) | **DELETE** /users/{id}/follow | Unfollow this user
*UsersApi* | [**update_personal_list**](docs/UsersApi.md#update_personal_list) | **PUT** /users/{id}/lists/{list_id} | Update personal list
*UsersApi* | [**users_id_collection_type_get**](docs/UsersApi.md#users_id_collection_type_get) | **GET** /users/{id}/collection/{type} | Get collection
*UsersApi* | [**users_id_history_type_item_id_get**](docs/UsersApi.md#users_id_history_type_item_id_get) | **GET** /users/{id}/history/{type}/{item_id} | Get watched history
*UsersApi* | [**users_id_lists_list_id_comments_sort_get**](docs/UsersApi.md#users_id_lists_list_id_comments_sort_get) | **GET** /users/{id}/lists/{list_id}/comments/{sort} | Get all list comments
*UsersApi* | [**users_id_lists_list_id_likes_get**](docs/UsersApi.md#users_id_lists_list_id_likes_get) | **GET** /users/{id}/lists/{list_id}/likes | Get all users who liked a list
*UsersApi* | [**users_id_ratings_type_rating_get**](docs/UsersApi.md#users_id_ratings_type_rating_get) | **GET** /users/{id}/ratings/{type}/{rating} | Get ratings
*UsersApi* | [**users_id_recommendations_type_sort_get**](docs/UsersApi.md#users_id_recommendations_type_sort_get) | **GET** /users/{id}/recommendations/{type}/{sort} | Get personal recommendations
*UsersApi* | [**users_id_watched_type_get**](docs/UsersApi.md#users_id_watched_type_get) | **GET** /users/{id}/watched/{type} | Get watched
*UsersApi* | [**users_id_watchlist_type_sort_get**](docs/UsersApi.md#users_id_watchlist_type_sort_get) | **GET** /users/{id}/watchlist/{type}/{sort} | Get watchlist


## Documentation For Models

 - [AddHiddenItemsRequest](docs/AddHiddenItemsRequest.md)
 - [AddHiddenItemsRequestSeasonsInner](docs/AddHiddenItemsRequestSeasonsInner.md)
 - [AddHiddenItemsRequestSeasonsInnerIds](docs/AddHiddenItemsRequestSeasonsInnerIds.md)
 - [AddHiddenItemsRequestShowsInner](docs/AddHiddenItemsRequestShowsInner.md)
 - [AddHiddenItemsRequestShowsInnerSeasonsInner](docs/AddHiddenItemsRequestShowsInnerSeasonsInner.md)
 - [AddItemsToCollectionRequest](docs/AddItemsToCollectionRequest.md)
 - [AddItemsToCollectionRequestEpisodesInner](docs/AddItemsToCollectionRequestEpisodesInner.md)
 - [AddItemsToCollectionRequestEpisodesInnerIds](docs/AddItemsToCollectionRequestEpisodesInnerIds.md)
 - [AddItemsToCollectionRequestMoviesInner](docs/AddItemsToCollectionRequestMoviesInner.md)
 - [AddItemsToCollectionRequestSeasonsInner](docs/AddItemsToCollectionRequestSeasonsInner.md)
 - [AddItemsToCollectionRequestSeasonsInnerIds](docs/AddItemsToCollectionRequestSeasonsInnerIds.md)
 - [AddItemsToCollectionRequestShowsInner](docs/AddItemsToCollectionRequestShowsInner.md)
 - [AddItemsToCollectionRequestShowsInnerIds](docs/AddItemsToCollectionRequestShowsInnerIds.md)
 - [AddItemsToCollectionRequestShowsInnerSeasonsInner](docs/AddItemsToCollectionRequestShowsInnerSeasonsInner.md)
 - [AddItemsToCollectionRequestShowsInnerSeasonsInnerEpisodesInner](docs/AddItemsToCollectionRequestShowsInnerSeasonsInnerEpisodesInner.md)
 - [AddItemsToPersonalListRequest](docs/AddItemsToPersonalListRequest.md)
 - [AddItemsToPersonalListRequestMoviesInner](docs/AddItemsToPersonalListRequestMoviesInner.md)
 - [AddItemsToPersonalListRequestMoviesInnerIds](docs/AddItemsToPersonalListRequestMoviesInnerIds.md)
 - [AddItemsToPersonalListRequestPeopleInner](docs/AddItemsToPersonalListRequestPeopleInner.md)
 - [AddItemsToPersonalListRequestShowsInner](docs/AddItemsToPersonalListRequestShowsInner.md)
 - [AddItemsToPersonalRecommendationsRequest](docs/AddItemsToPersonalRecommendationsRequest.md)
 - [AddItemsToPersonalRecommendationsRequestMoviesInner](docs/AddItemsToPersonalRecommendationsRequestMoviesInner.md)
 - [AddItemsToPersonalRecommendationsRequestShowsInner](docs/AddItemsToPersonalRecommendationsRequestShowsInner.md)
 - [AddItemsToWatchedHistoryRequest](docs/AddItemsToWatchedHistoryRequest.md)
 - [AddItemsToWatchedHistoryRequestEpisodesInner](docs/AddItemsToWatchedHistoryRequestEpisodesInner.md)
 - [AddItemsToWatchedHistoryRequestMoviesInner](docs/AddItemsToWatchedHistoryRequestMoviesInner.md)
 - [AddItemsToWatchedHistoryRequestSeasonsInner](docs/AddItemsToWatchedHistoryRequestSeasonsInner.md)
 - [AddItemsToWatchedHistoryRequestShowsInner](docs/AddItemsToWatchedHistoryRequestShowsInner.md)
 - [AddItemsToWatchedHistoryRequestShowsInnerSeasonsInner](docs/AddItemsToWatchedHistoryRequestShowsInnerSeasonsInner.md)
 - [AddItemsToWatchedHistoryRequestShowsInnerSeasonsInnerEpisodesInner](docs/AddItemsToWatchedHistoryRequestShowsInnerSeasonsInnerEpisodesInner.md)
 - [AddItemsToWatchlistRequest](docs/AddItemsToWatchlistRequest.md)
 - [AddItemsToWatchlistRequestShowsInner](docs/AddItemsToWatchlistRequestShowsInner.md)
 - [AddNewRatingsRequest](docs/AddNewRatingsRequest.md)
 - [AddNewRatingsRequestEpisodesInner](docs/AddNewRatingsRequestEpisodesInner.md)
 - [AddNewRatingsRequestMoviesInner](docs/AddNewRatingsRequestMoviesInner.md)
 - [AddNewRatingsRequestSeasonsInner](docs/AddNewRatingsRequestSeasonsInner.md)
 - [AddNewRatingsRequestShowsInner](docs/AddNewRatingsRequestShowsInner.md)
 - [AddNewRatingsRequestShowsInnerSeasonsInner](docs/AddNewRatingsRequestShowsInnerSeasonsInner.md)
 - [AddNewRatingsRequestShowsInnerSeasonsInnerEpisodesInner](docs/AddNewRatingsRequestShowsInnerSeasonsInnerEpisodesInner.md)
 - [CheckIntoAnItemRequest](docs/CheckIntoAnItemRequest.md)
 - [CheckIntoAnItemRequestMovie](docs/CheckIntoAnItemRequestMovie.md)
 - [CheckIntoAnItemRequestMovieIds](docs/CheckIntoAnItemRequestMovieIds.md)
 - [CheckIntoAnItemRequestSharing](docs/CheckIntoAnItemRequestSharing.md)
 - [CreatePersonalListRequest](docs/CreatePersonalListRequest.md)
 - [ExchangeRefreshTokenForAccessTokenRequest](docs/ExchangeRefreshTokenForAccessTokenRequest.md)
 - [GenerateNewDeviceCodesRequest](docs/GenerateNewDeviceCodesRequest.md)
 - [PauseWatchingInAMediaCenterRequest](docs/PauseWatchingInAMediaCenterRequest.md)
 - [PollForTheAccessTokenRequest](docs/PollForTheAccessTokenRequest.md)
 - [PostACommentRequest](docs/PostACommentRequest.md)
 - [PostACommentRequestSharing](docs/PostACommentRequestSharing.md)
 - [PostAReplyForACommentRequest](docs/PostAReplyForACommentRequest.md)
 - [RemoveItemsFromCollectionRequest](docs/RemoveItemsFromCollectionRequest.md)
 - [RemoveItemsFromCollectionRequestMoviesInner](docs/RemoveItemsFromCollectionRequestMoviesInner.md)
 - [RemoveItemsFromCollectionRequestShowsInner](docs/RemoveItemsFromCollectionRequestShowsInner.md)
 - [RemoveItemsFromCollectionRequestShowsInnerSeasonsInner](docs/RemoveItemsFromCollectionRequestShowsInnerSeasonsInner.md)
 - [RemoveItemsFromCollectionRequestShowsInnerSeasonsInnerEpisodesInner](docs/RemoveItemsFromCollectionRequestShowsInnerSeasonsInnerEpisodesInner.md)
 - [RemoveItemsFromHistoryRequest](docs/RemoveItemsFromHistoryRequest.md)
 - [RemoveItemsFromPersonalListRequest](docs/RemoveItemsFromPersonalListRequest.md)
 - [RemoveItemsFromPersonalListRequestMoviesInner](docs/RemoveItemsFromPersonalListRequestMoviesInner.md)
 - [RemoveItemsFromPersonalListRequestShowsInner](docs/RemoveItemsFromPersonalListRequestShowsInner.md)
 - [RemoveItemsFromPersonalRecommendationsRequest](docs/RemoveItemsFromPersonalRecommendationsRequest.md)
 - [RemoveItemsFromPersonalRecommendationsRequestShowsInner](docs/RemoveItemsFromPersonalRecommendationsRequestShowsInner.md)
 - [ReorderAUserSListsRequest](docs/ReorderAUserSListsRequest.md)
 - [ReorderPersonallyRecommendedItemsRequest](docs/ReorderPersonallyRecommendedItemsRequest.md)
 - [RevokeAnAccessTokenRequest](docs/RevokeAnAccessTokenRequest.md)
 - [StartWatchingInAMediaCenterRequest](docs/StartWatchingInAMediaCenterRequest.md)
 - [StopOrFinishWatchingInAMediaCenterRequest](docs/StopOrFinishWatchingInAMediaCenterRequest.md)
 - [UpdateACommentOrReplyRequest](docs/UpdateACommentOrReplyRequest.md)
 - [UpdatePersonalListRequest](docs/UpdatePersonalListRequest.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="oauth2"></a>
### oauth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: /
- **Scopes**: N/A


## Author




