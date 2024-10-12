# coding: utf-8

"""
    Trakt API

    At Trakt, we collect lots of interesting information about what tv shows and movies everyone is watching. Part of the fun with such data is making it available for anyone to mash up and use on their own site or app. The Trakt API was made just for this purpose. It is very easy to use, you basically call a URL and get some JSON back.  More complex API calls (such as adding a movie or show to your collection) involve sending us data. These are still easy to use, you simply POST some JSON data to a specific URL.  Make sure to check out the [**Required Headers**](#introduction/required-headers) and [**Authentication**](#reference/authentication-oauth) sections for more info on what needs to be sent with each API call. Also check out the [**Terminology**](#introduction/terminology) section insight into the features Trakt supports.  # Create an App  To use the Trakt API, you'll need to [**create a new API app**](https://trakt.tv/oauth/applications/new).  # Stay Connected  API discussion and bugs should be posted in the [**GitHub Developer Forum**](https://github.com/trakt/api-help/issues) and *watch* the repository if you'd like to get notifications. Make sure to follow our [**API Blog**](https://apiblog.trakt.tv) and [**@traktapi on Twitter**](https://twitter.com/traktapi) too.  # API URL  The API should always be accessed over SSL.  ``` https://api.trakt.tv ```  If you would like to use our sandbox environment to not fill production with test data, use this URL over SSL. **Note:** Staging is a completely separate environment, so you'll need to [**create a new API app on staging**](https://staging.trakt.tv/oauth/applications/new).  ``` https://api-staging.trakt.tv ```  # Verbs  The API uses restful verbs.  | Verb | Description | |---|---| | `GET` | Select one or more items. Success returns `200` status code. | | `POST` | Create a new item. Success returns `201` status code. | | `PUT` | Update an item. Success returns `200` status code. | | `DELETE` | Delete an item. Success returns `200` or `204` status code. |  # Status Codes  The API will respond with one of the following HTTP status codes.  | Code | Description | |---|---| | `200` | Success | `201` | Success - *new resource created (POST)* | `204` | Success - *no content to return (DELETE)* | `400` | Bad Request - *request couldn't be parsed* | `401` | Unauthorized - *OAuth must be provided* | `403` | Forbidden - *invalid API key or unapproved app* | `404` | Not Found - *method exists, but no record found* | `405` | Method Not Found - *method doesn't exist* | `409` | Conflict - *resource already created* | `412` | Precondition Failed - *use application/json content type* | `420` | Account Limit Exceeded - *list count, item count, etc* | `422` | Unprocessable Entity - *validation errors* | `423` | Locked User Account - *have the user contact support* | `426` | VIP Only - *user must upgrade to VIP* | `429` | Rate Limit Exceeded | `500` | Server Error - *please open a support ticket* | `502` | Service Unavailable - *server overloaded (try again in 30s)* | `503` | Service Unavailable - *server overloaded (try again in 30s)* | `504` | Service Unavailable - *server overloaded (try again in 30s)* | `520` | Service Unavailable - *Cloudflare error* | `521` | Service Unavailable - *Cloudflare error* | `522` | Service Unavailable - *Cloudflare error*  # Required Headers  You'll need to send some headers when making API calls to identify your application, set the version and set the content type to JSON.  | Header | Value | |---|---| | `Content-type` <span style=\"color:red;\">*</a> | `application/json` | | `trakt-api-key` <span style=\"color:red;\">*</a> | Your `client_id` listed under your Trakt applications. | | `trakt-api-version` <span style=\"color:red;\">*</a> | `2` | API version to use.  All `POST`, `PUT`, and `DELETE` methods require a valid OAuth `access_token`. Some `GET` calls require OAuth and others will return user specific data if OAuth is sent. Methods that &#128274; **require** or have &#128275; **optional** OAuth will be indicated.  Your OAuth library should take care of sending the auth headers for you, but for reference here's how the Bearer token should be sent.  | Header | Value | |---|---| | `Authorization` | `Bearer [access_token]` |  # Rate Limiting  All API methods are rate limited. A `429` HTTP status code is returned when the limit has been exceeded. Check the headers for detailed info, then try your API call in `Retry-After` seconds.  | Header | Value | |---|---| | `X-Ratelimit` | `{\"name\":\"UNAUTHED_API_GET_LIMIT\",\"period\":300,\"limit\":1000,\"remaining\":0,\"until\":\"2020-10-10T00:24:00Z\"}` | | `Retry-After` | `10` |  Here are the current limits. There are separate limits for authed (user level) and unauthed (application level) calls. We'll continue to adjust these limits to optimize API performance for everyone. The goal is to prevent API abuse and poor coding, but allow users to use apps normally.  | Name | Verb | Methods | Limit | |---|---|---|---| | `AUTHED_API_POST_LIMIT` | `POST`, `PUT`, `DELETE` | all | 1 call per second | | `AUTHED_API_GET_LIMIT` | `GET` | all | 1000 calls every 5 minutes | | `UNAUTHED_API_GET_LIMIT` | `GET` | all | 1000 calls every 5 minutes |  # Locked User Account  A `423` HTTP status code is returned when the OAuth user has a locked user account. Please instruct the user to [**contact Trakt support**](https://support.trakt.tv) so we can fix their account. API access will be suspended for the user until we fix their account.  # VIP Methods  Some API methods are tagged 🔥 **VIP Only**. A `426` HTTP status code is returned when the user isn't a VIP, indicating they need to sign up for [**Trakt VIP**](https://trakt.tv/vip) in order to use this method. In your app, please open a browser to `X-Upgrade-URL` so the user can sign up for Trakt VIP.  | Header | Value | |---|---| | `X-Upgrade-URL` | `https://trakt.tv/vip` |  Some API methods are tagged 🔥 **VIP Enhanced**. A `420` HTTP status code is returned when the user has exceeded their account limit. Signing up for [**Trakt VIP**](https://trakt.tv/vip) will increase these limits. If the user isn't a VIP, please open a browser to `X-Upgrade-URL` so the user can sign up for Trakt VIP. If they are already VIP and still exceeded the limit, please display a message indicating this.  | Header | Value | |---|---| | `X-Upgrade-URL` | `https://trakt.tv/vip` | | `X-VIP-User` | `true` or `false` | | `X-Account-Limit` | Limit allowed. |  # Pagination  Some methods are paginated. Methods with &#128196; **Pagination** will load 1 page of 10 items by default. Methods with &#128196; **Pagination Optional** will load all items by default. In either case, append a query string like `?page={page}&limit={limit}` to the URL to influence the results.  | Parameter | Type | Default | Value | |---|---|---|---| | `page` | integer | `1` | Number of page of results to be returned. | | `limit` | integer | `10` | Number of results to return per page. |  All paginated methods will return these HTTP headers.  | Header | Value | |---|---| | `X-Pagination-Page` | Current page. | | `X-Pagination-Limit` | Items per page. | | `X-Pagination-Page-Count` | Total number of pages. | | `X-Pagination-Item-Count` | Total number of items. |  # Extended Info  By default, all methods will return minimal info for movies, shows, episodes, people, and users. Minimal info is typically all you need to match locally cached items and includes the `title`, `year`, and `ids`. However, you can request different extended levels of information by adding `?extended={level}` to the URL. Send a comma separated string to get multiple types of extended info.  **Note:** This returns a lot of extra data, so please only use extended parameters if you actually need them!  | Level | Description | |---|---| | `full` | Complete info for an item. | `metadata` | **Collection only.** Additional video and audio info.  # Filters  Some `movies`, `shows`, `calendars`,  and `search` methods support additional filters and will be tagged with &#127898; **Filters**. Applying these filters refines the results and helps your users to more easily discover new items.  Add a query string (i.e. `?years=2016&genres=action`) with any filters you want to use. Some filters allow multiples which can be sent as comma delimited parameters. For example, `?genres=action,adventure` would match the `action` OR `adventure` genre.  **Note:** Make sure to properly URL encode the parameters including spaces and special characters.  #### Common Filters  | Parameter | Multiples | Example | Value | |---|---|---|---| | `query` | | `batman` | Search titles and descriptions. | | `years` | | `2016` | 4 digit year or range of years. | | `genres` | &#10003; | `action` | [Genre slugs.](#reference/genres) | | `languages` | &#10003; | `en` | [2 character language code.](#reference/languages) | | `countries` | &#10003; | `us` | [2 character country code.](#reference/countries) | | `runtimes` | | `30-90` | Range in minutes. | | `studios` | &#10003; | `marvel-studios` | Studio slugs. |  #### Rating Filters  Trakt, TMDB, and IMDB ratings apply to `movies`, `shows`, and `episodes`. Rotten Tomatoes and Metacritic apply to `movies`.  | Parameter | Multiples | Example | Value | |---|---|---|---| | `ratings` | | `75-100` | Trakt rating range between `0` and `100`. | | `votes` | | `5000-10000` | Trakt vote count between `0` and `100000`. | | `tmdb_ratings` | | `5.5-10.0` | TMDB rating range between `0.0` and `10.0`. | | `tmdb_votes` | | `5000-10000` | TMDB vote count between `0` and `100000`. | | `imdb_ratings` | | `5.5-10.0` | IMDB rating range between `0.0` and `10.0`. | | `imdb_votes` | | `5000-10000` | IMDB vote count between `0` and `3000000`. | | `rt_meters` | | `5.5-10.0` | Rotten Tomatoes meter range between `0` and `100`. | | `metascores` | | `5.5-10.0` | Metacritic score range between `0` and `100`. |  #### Movie Filters  | Parameter | Multiples | Example | Value | |---|---|---|---| | `certifications` | &#10003; | `pg-13` | US content certification. |  #### Show Filters  | Parameter | Multiples | Example | Value | |---|---|---|---| | `certifications` | &#10003; | `tv-pg` | US content certification. | | `networks` | &#10003; | `HBO` | Network name. | | `status` | &#10003; | `ended` | Set to `returning series`, `continuing`, `in production`, `planned`, `upcoming`,  `pilot`, `canceled`, or `ended`. |  # CORS  When creating your API app, specify the JavaScript (CORS) origins you'll be using. We use these origins to return the headers needed for CORS.  # Dates  All dates will be GMT and returned in the ISO 8601 format like `2014-09-01T09:10:11.000Z`. Adjust accordingly in your app for the user's local timezone.  # Emojis  We use short codes for emojis like `:smiley:` and `:raised_hands:` and render them on the Trakt website using [**JoyPixels**](https://www.joypixels.com/) _(verion 6.6.0)_. Methods that support emojis are tagged with &#128513; **Emojis**. For POST methods, you can send standard unicode emojis and we'll automatically convert them to short codes. For GET methods, we'll return the short codes and it's up to your app to convert them back to unicode emojis.  # Standard Media Objects  All methods will accept or return standard media objects for `movie`, `show`, `season`, `episode`, `person`, and `user` items. Here are examples for all minimal objects.  #### movie  ``` {     \"title\": \"Batman Begins\",     \"year\": 2005,     \"ids\": {         \"trakt\": 1,         \"slug\": \"batman-begins-2005\",         \"imdb\": \"tt0372784\",         \"tmdb\": 272     } } ```  #### show  ``` {     \"title\": \"Breaking Bad\",     \"year\": 2008,     \"ids\": {         \"trakt\": 1,         \"slug\": \"breaking-bad\",         \"tvdb\": 81189,         \"imdb\": \"tt0903747\",         \"tmdb\": 1396     } } ```  #### season  ``` {     \"number\": 0,     \"ids\": {         \"trakt\": 1,         \"tvdb\": 439371,         \"tmdb\": 3577     } } ```  #### episode  ``` {     \"season\": 1,     \"number\": 1,     \"title\": \"Pilot\",     \"ids\": {         \"trakt\": 16,         \"tvdb\": 349232,         \"imdb\": \"tt0959621\",         \"tmdb\": 62085     } } ```  #### person  ``` {     \"name\": \"Bryan Cranston\",     \"ids\": {         \"trakt\": 142,         \"slug\": \"bryan-cranston\",         \"imdb\": \"nm0186505\",         \"tmdb\": 17419     } } ```  #### user  ``` {     \"username\": \"sean\",     \"private\": false,     \"name\": \"Sean Rudford\",     \"vip\": true,     \"vip_ep\": true,     \"ids\": {         \"slug\": \"sean\"     } } ```  # Images  The standard media objects for all `movie`, `show`, `season`, `episode`, and `person` items include an `ids` object. These `ids` map to other services like [TMDB](https://www.themoviedb.org), [TVDB](https://thetvdb.com), [Fanart.tv](https://fanart.tv), [IMDB](https://www.imdb.com), and [OMDB](https://www.omdbapi.com/).  Most of these services have free APIs you can use to grab lots of great looking images. Here’s a chart to help you find the best artwork for your app. [**We also wrote an article to help with this.**](https://apiblog.trakt.tv/how-to-find-the-best-images-516045bcc3b6)  | Media | Type | [TMDB](https://developers.themoviedb.org/3) | [TVDB](https://api.thetvdb.com/swagger) | [Fanart.tv](http://docs.fanarttv.apiary.io) | [OMDB](https://www.omdbapi.com) | |---|---|---|---|---|---| | `shows` | `poster` | &#10003; | &#10003; | &#10003; | &#10003; | |  | `fanart` | &#10003; | &#10003; | &#10003; |  | |  | `banner` |  | &#10003; | &#10003; |  | |  | `logo` |  |  | &#10003; |  | |  | `clearart` |  |  | &#10003; |  | |  | `thumb` |  |  | &#10003; |  | | `seasons` | `poster` | &#10003; | &#10003; | &#10003; |  | |  | `banner` |  | &#10003; | &#10003; |  | |  | `thumb` |  |  | &#10003; |  | | `episodes` | `screenshot` | &#10003; | &#10003; |  |  | | `movies` | `poster` | &#10003; |  | &#10003; | &#10003; | |  | `fanart` | &#10003; |  | &#10003; |  | |  | `banner` |  |  | &#10003; |  | |  | `logo` |  |  | &#10003; |  | |  | `clearart` |  |  | &#10003; |  | |  | `thumb` |  |  | &#10003; |  | | `person` | `headshot` | &#10003; |  |  |  | |  | `character` |  | &#10003; |  |  |  # Website Media Links  There are several ways to construct direct links to media on the Trakt website. The website itself uses slugs so the URLs are more readable.  | Type | URL | |---|---| | `movie` | `/movies/:slug` | | `show` | `/shows/:slug` | | `season` | `/shows/:slug/seasons/:num` | | `episode` | `/shows/:slug/seasons/:num/episodes/:num` | | `person` | `/people/:slug` | | `comment` | `/comments/:id` | | `list` | `/lists/:id` |  You can also create links using the Trakt, IMDB, TMDB, or TVDB IDs. We recommend using the Trakt ID if possible since that will always have full coverage. If you use the search url without an `id_type` it will return search results if multiple items are found.  | Type | URL | |---|---| | `trakt` | `/search/trakt/:id` | |  | `/search/trakt/:id?id_type=movie` | |  | `/search/trakt/:id?id_type=show` | |  | `/search/trakt/:id?id_type=season` | |  | `/search/trakt/:id?id_type=episode` | |  | `/search/trakt/:id?id_type=person` | | `imdb` | `/search/imdb/:id` | | `tmdb` | `/search/tmdb/:id` | |  | `/search/tmdb/:id?id_type=movie` | |  | `/search/tmdb/:id?id_type=show` | |  | `/search/tmdb/:id?id_type=episode` | |  | `/search/tmdb/:id?id_type=person` | | `tvdb` | `/search/tvdb/:id` | |  | `/search/tvdb/:id?id_type=show` | |  | `/search/tvdb/:id?id_type=episode` |  # Third Party Libraries  All of the libraries listed below are user contributed. If you find a bug or missing feature, please contact the developer directly. These might help give your project a head start, but we can't provide direct support for any of these libraries. Please help us keep this list up to date.  | Language | Name | Repository | |---|---|---| | `C#` | `Trakt.NET` | https://github.com/henrikfroehling/Trakt.NET | |  | `TraktSharp` | https://github.com/wwarby/TraktSharp | | `C++` | `libtraqt` | https://github.com/RobertMe/libtraqt | | `Clojure` | `clj-trakt` | https://github.com/niamu/clj-trakt | | `Java` | `trakt-java` | https://github.com/UweTrottmann/trakt-java | | `Kotlin` | `trakt-api` | https://github.com/MoviebaseApp/trakt-api | | `Node.js` | `Trakt.tv` | https://github.com/vankasteelj/trakt.tv | |  | `TraktApi2` | https://github.com/PatrickE94/traktapi2 | | `Python` | `trakt.py` | https://github.com/fuzeman/trakt.py | |  | `pyTrakt` | https://github.com/moogar0880/PyTrakt | | `R` | `tRakt` | https://github.com/jemus42/tRakt | | `React Native` | `nodeless-trakt` | https://github.com/kdemoya/nodeless-trakt | | `Ruby` | `omniauth-trakt` | https://github.com/wafcio/omniauth-trakt | |  | `omniauth-trakt` | https://github.com/alextakitani/omniauth-trakt | | `Swift` | `TraktKit` | https://github.com/MaxHasADHD/TraktKit | |  | `AKTrakt` | https://github.com/arsonik/AKTrakt |  # Terminology  Trakt has a lot of features and here's a chart to help explain the differences between some of them.  | Term | Description | |---|---| | `scrobble` | Automatic way to track what a user is watching in a media center. | | `checkin` | Manual action used by mobile apps allowing the user to indicate what they are watching right now. | | `history` | All watched items (scrobbles, checkins, watched) for a user. | | `collection` | Items a user has available to watch including Blu-Rays, DVDs, and digital downloads. | | `watchlist` | Items a user wants to watch in the future. Once watched, they are auto removed from this list. | | `list` | Personal list for any purpose. Items are not auto removed from any personal lists. | | `recommendations` | Movies and TV shows a user personally recommends to others. |

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from pydantic import Field, StrictInt, StrictStr, field_validator
from typing import Optional
from typing_extensions import Annotated
from openapi_client.models.add_items_to_collection_request import AddItemsToCollectionRequest
from openapi_client.models.add_items_to_personal_recommendations_request import AddItemsToPersonalRecommendationsRequest
from openapi_client.models.add_items_to_watched_history_request import AddItemsToWatchedHistoryRequest
from openapi_client.models.add_items_to_watchlist_request import AddItemsToWatchlistRequest
from openapi_client.models.add_new_ratings_request import AddNewRatingsRequest
from openapi_client.models.remove_items_from_collection_request import RemoveItemsFromCollectionRequest
from openapi_client.models.remove_items_from_history_request import RemoveItemsFromHistoryRequest
from openapi_client.models.remove_items_from_personal_recommendations_request import RemoveItemsFromPersonalRecommendationsRequest
from openapi_client.models.reorder_personally_recommended_items_request import ReorderPersonallyRecommendedItemsRequest

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class SyncApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def add_items_to_collection(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_collection_request: Optional[AddItemsToCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Add items to collection

        #### &#128274; OAuth Required  Add items to a user's collection. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be collected. If seasons are specified, all episodes in those seasons will be collected.  Send a `collected_at` UTC datetime to mark items as collected in the past. You can also send additional metadata about the media itself to have a very accurate collection. Showcase what is available to watch from your epic HD DVD collection down to your downloaded iTunes movies.  **Note:** You can resend items already in your collection and they will be updated with any new values. This includes the `collected_at` and any other metadata.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. | | `collected_at` | datetime | UTC datetime when the item was collected. Set to `released` to automatically use the inital release date + runtime *(episodes only)*). | | `media_type` | string | Set to `digital`, `bluray`, `hddvd`, `dvd`, `vcd`, `vhs`, `betamax`, or `laserdisc`. | | `resolution` | string | Set to `uhd_4k`, `hd_1080p`, `hd_1080i`, `hd_720p`, `sd_480p`, `sd_480i`, `sd_576p`, or `sd_576i`. | | `hdr` | string | Set to `dolby_vision`, `hdr10`, `hdr10_plus`, or `hlg`. | | `audio` | string | Set to `dolby_digital`, `dolby_digital_plus`, `dolby_digital_plus_atmos`, `dolby_truehd`, `dolby_atmos` *(Dolby TrueHD Atmos)*, `dolby_prologic`, `dts`, `dts_ma`, `dts_hr`, `dts_x`, `auro_3d`, `mp3`, `mp2`, `aac`, `lpcm`, `ogg` *(Ogg Vorbis)*, `ogg_opus`, `wma`, or `flac`. | | `audio_channels` | string | Set to `1.0`, `2.0`, `2.1`, `3.0`, `3.1`, `4.0`, `4.1`, `5.0`, `5.1`, `5.1.2`, `5.1.4`, `6.1`, `7.1`, `7.1.2`, `7.1.4`, `9.1`, or `10.1` | | `3d` | boolean | Set `true` if in 3D. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_collection_request:
        :type add_items_to_collection_request: AddItemsToCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_collection_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_collection_request=add_items_to_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def add_items_to_collection_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_collection_request: Optional[AddItemsToCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Add items to collection

        #### &#128274; OAuth Required  Add items to a user's collection. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be collected. If seasons are specified, all episodes in those seasons will be collected.  Send a `collected_at` UTC datetime to mark items as collected in the past. You can also send additional metadata about the media itself to have a very accurate collection. Showcase what is available to watch from your epic HD DVD collection down to your downloaded iTunes movies.  **Note:** You can resend items already in your collection and they will be updated with any new values. This includes the `collected_at` and any other metadata.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. | | `collected_at` | datetime | UTC datetime when the item was collected. Set to `released` to automatically use the inital release date + runtime *(episodes only)*). | | `media_type` | string | Set to `digital`, `bluray`, `hddvd`, `dvd`, `vcd`, `vhs`, `betamax`, or `laserdisc`. | | `resolution` | string | Set to `uhd_4k`, `hd_1080p`, `hd_1080i`, `hd_720p`, `sd_480p`, `sd_480i`, `sd_576p`, or `sd_576i`. | | `hdr` | string | Set to `dolby_vision`, `hdr10`, `hdr10_plus`, or `hlg`. | | `audio` | string | Set to `dolby_digital`, `dolby_digital_plus`, `dolby_digital_plus_atmos`, `dolby_truehd`, `dolby_atmos` *(Dolby TrueHD Atmos)*, `dolby_prologic`, `dts`, `dts_ma`, `dts_hr`, `dts_x`, `auro_3d`, `mp3`, `mp2`, `aac`, `lpcm`, `ogg` *(Ogg Vorbis)*, `ogg_opus`, `wma`, or `flac`. | | `audio_channels` | string | Set to `1.0`, `2.0`, `2.1`, `3.0`, `3.1`, `4.0`, `4.1`, `5.0`, `5.1`, `5.1.2`, `5.1.4`, `6.1`, `7.1`, `7.1.2`, `7.1.4`, `9.1`, or `10.1` | | `3d` | boolean | Set `true` if in 3D. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_collection_request:
        :type add_items_to_collection_request: AddItemsToCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_collection_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_collection_request=add_items_to_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def add_items_to_collection_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_collection_request: Optional[AddItemsToCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Add items to collection

        #### &#128274; OAuth Required  Add items to a user's collection. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be collected. If seasons are specified, all episodes in those seasons will be collected.  Send a `collected_at` UTC datetime to mark items as collected in the past. You can also send additional metadata about the media itself to have a very accurate collection. Showcase what is available to watch from your epic HD DVD collection down to your downloaded iTunes movies.  **Note:** You can resend items already in your collection and they will be updated with any new values. This includes the `collected_at` and any other metadata.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. | | `collected_at` | datetime | UTC datetime when the item was collected. Set to `released` to automatically use the inital release date + runtime *(episodes only)*). | | `media_type` | string | Set to `digital`, `bluray`, `hddvd`, `dvd`, `vcd`, `vhs`, `betamax`, or `laserdisc`. | | `resolution` | string | Set to `uhd_4k`, `hd_1080p`, `hd_1080i`, `hd_720p`, `sd_480p`, `sd_480i`, `sd_576p`, or `sd_576i`. | | `hdr` | string | Set to `dolby_vision`, `hdr10`, `hdr10_plus`, or `hlg`. | | `audio` | string | Set to `dolby_digital`, `dolby_digital_plus`, `dolby_digital_plus_atmos`, `dolby_truehd`, `dolby_atmos` *(Dolby TrueHD Atmos)*, `dolby_prologic`, `dts`, `dts_ma`, `dts_hr`, `dts_x`, `auro_3d`, `mp3`, `mp2`, `aac`, `lpcm`, `ogg` *(Ogg Vorbis)*, `ogg_opus`, `wma`, or `flac`. | | `audio_channels` | string | Set to `1.0`, `2.0`, `2.1`, `3.0`, `3.1`, `4.0`, `4.1`, `5.0`, `5.1`, `5.1.2`, `5.1.4`, `6.1`, `7.1`, `7.1.2`, `7.1.4`, `9.1`, or `10.1` | | `3d` | boolean | Set `true` if in 3D. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_collection_request:
        :type add_items_to_collection_request: AddItemsToCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_collection_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_collection_request=add_items_to_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _add_items_to_collection_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        add_items_to_collection_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if add_items_to_collection_request is not None:
            _body_params = add_items_to_collection_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/collection',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def add_items_to_personal_recommendations(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_personal_recommendations_request: Optional[AddItemsToPersonalRecommendationsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Add items to personal recommendations

        #### &#128274; OAuth Required &#128513; Emojis  If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### Notes  Each recommendation can optionally accept a `notes` *(255 maximum characters)* field explaining why the user recommended the item.  #### Limits  If the user has recommended 50 items already, a `420` HTTP error code is returned. This limit applies to all users.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_personal_recommendations_request:
        :type add_items_to_personal_recommendations_request: AddItemsToPersonalRecommendationsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_personal_recommendations_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_personal_recommendations_request=add_items_to_personal_recommendations_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def add_items_to_personal_recommendations_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_personal_recommendations_request: Optional[AddItemsToPersonalRecommendationsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Add items to personal recommendations

        #### &#128274; OAuth Required &#128513; Emojis  If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### Notes  Each recommendation can optionally accept a `notes` *(255 maximum characters)* field explaining why the user recommended the item.  #### Limits  If the user has recommended 50 items already, a `420` HTTP error code is returned. This limit applies to all users.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_personal_recommendations_request:
        :type add_items_to_personal_recommendations_request: AddItemsToPersonalRecommendationsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_personal_recommendations_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_personal_recommendations_request=add_items_to_personal_recommendations_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def add_items_to_personal_recommendations_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_personal_recommendations_request: Optional[AddItemsToPersonalRecommendationsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Add items to personal recommendations

        #### &#128274; OAuth Required &#128513; Emojis  If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### Notes  Each recommendation can optionally accept a `notes` *(255 maximum characters)* field explaining why the user recommended the item.  #### Limits  If the user has recommended 50 items already, a `420` HTTP error code is returned. This limit applies to all users.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_personal_recommendations_request:
        :type add_items_to_personal_recommendations_request: AddItemsToPersonalRecommendationsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_personal_recommendations_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_personal_recommendations_request=add_items_to_personal_recommendations_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _add_items_to_personal_recommendations_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        add_items_to_personal_recommendations_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if add_items_to_personal_recommendations_request is not None:
            _body_params = add_items_to_personal_recommendations_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/recommendations',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def add_items_to_watched_history(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_watched_history_request: Optional[AddItemsToWatchedHistoryRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Add items to watched history

        #### &#128274; OAuth Required  Add items to a user's watch history. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be added. If seasons are specified, only episodes in those seasons will be added.  Send a `watched_at` UTC datetime to mark items as watched in the past. This is useful for syncing past watches from a media center.  **Note:** Please be careful with sending duplicate data. We don't verify the `item` + `watched_at` to ensure it's unique, it is up to your app to veify this and not send duplicate plays.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. | | `watched_at` | datetime | UTC datetime when the item was watched. Set to `released` to automatically use the initial release date + runtime *(episodes only)*. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_watched_history_request:
        :type add_items_to_watched_history_request: AddItemsToWatchedHistoryRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_watched_history_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_watched_history_request=add_items_to_watched_history_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def add_items_to_watched_history_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_watched_history_request: Optional[AddItemsToWatchedHistoryRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Add items to watched history

        #### &#128274; OAuth Required  Add items to a user's watch history. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be added. If seasons are specified, only episodes in those seasons will be added.  Send a `watched_at` UTC datetime to mark items as watched in the past. This is useful for syncing past watches from a media center.  **Note:** Please be careful with sending duplicate data. We don't verify the `item` + `watched_at` to ensure it's unique, it is up to your app to veify this and not send duplicate plays.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. | | `watched_at` | datetime | UTC datetime when the item was watched. Set to `released` to automatically use the initial release date + runtime *(episodes only)*. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_watched_history_request:
        :type add_items_to_watched_history_request: AddItemsToWatchedHistoryRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_watched_history_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_watched_history_request=add_items_to_watched_history_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def add_items_to_watched_history_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_watched_history_request: Optional[AddItemsToWatchedHistoryRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Add items to watched history

        #### &#128274; OAuth Required  Add items to a user's watch history. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be added. If seasons are specified, only episodes in those seasons will be added.  Send a `watched_at` UTC datetime to mark items as watched in the past. This is useful for syncing past watches from a media center.  **Note:** Please be careful with sending duplicate data. We don't verify the `item` + `watched_at` to ensure it's unique, it is up to your app to veify this and not send duplicate plays.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. | | `watched_at` | datetime | UTC datetime when the item was watched. Set to `released` to automatically use the initial release date + runtime *(episodes only)*. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_watched_history_request:
        :type add_items_to_watched_history_request: AddItemsToWatchedHistoryRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_watched_history_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_watched_history_request=add_items_to_watched_history_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _add_items_to_watched_history_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        add_items_to_watched_history_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if add_items_to_watched_history_request is not None:
            _body_params = add_items_to_watched_history_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/history',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def add_items_to_watchlist(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_watchlist_request: Optional[AddItemsToWatchlistRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Add items to watchlist

        #### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced  Add one of more items to a user's watchlist. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be added. If seasons are specified, all of those seasons will be added.  #### Notes  Each watchlist item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.  #### Limits  If the user's watchlist limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_watchlist_request:
        :type add_items_to_watchlist_request: AddItemsToWatchlistRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_watchlist_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_watchlist_request=add_items_to_watchlist_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
            '420': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def add_items_to_watchlist_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_watchlist_request: Optional[AddItemsToWatchlistRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Add items to watchlist

        #### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced  Add one of more items to a user's watchlist. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be added. If seasons are specified, all of those seasons will be added.  #### Notes  Each watchlist item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.  #### Limits  If the user's watchlist limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_watchlist_request:
        :type add_items_to_watchlist_request: AddItemsToWatchlistRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_watchlist_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_watchlist_request=add_items_to_watchlist_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
            '420': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def add_items_to_watchlist_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_items_to_watchlist_request: Optional[AddItemsToWatchlistRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Add items to watchlist

        #### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced  Add one of more items to a user's watchlist. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be added. If seasons are specified, all of those seasons will be added.  #### Notes  Each watchlist item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.  #### Limits  If the user's watchlist limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_items_to_watchlist_request:
        :type add_items_to_watchlist_request: AddItemsToWatchlistRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_items_to_watchlist_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_items_to_watchlist_request=add_items_to_watchlist_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
            '420': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _add_items_to_watchlist_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        add_items_to_watchlist_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if add_items_to_watchlist_request is not None:
            _body_params = add_items_to_watchlist_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/watchlist',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def add_new_ratings(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_new_ratings_request: Optional[AddNewRatingsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Add new ratings

        #### &#128274; OAuth Required  Rate one or more items. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be rated. If seasons are specified, all of those seasons will be rated.  Send a `rated_at` UTC datetime to mark items as rated in the past. This is useful for syncing ratings from a media center.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, `season`, or `episode` object. | | `rating` <span style=\"color:red;\">*</a> | integer | Between 1 and 10. | | `rated_at` | datetime | UTC datetime when the item was rated. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_new_ratings_request:
        :type add_new_ratings_request: AddNewRatingsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_new_ratings_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_new_ratings_request=add_new_ratings_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def add_new_ratings_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_new_ratings_request: Optional[AddNewRatingsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Add new ratings

        #### &#128274; OAuth Required  Rate one or more items. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be rated. If seasons are specified, all of those seasons will be rated.  Send a `rated_at` UTC datetime to mark items as rated in the past. This is useful for syncing ratings from a media center.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, `season`, or `episode` object. | | `rating` <span style=\"color:red;\">*</a> | integer | Between 1 and 10. | | `rated_at` | datetime | UTC datetime when the item was rated. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_new_ratings_request:
        :type add_new_ratings_request: AddNewRatingsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_new_ratings_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_new_ratings_request=add_new_ratings_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def add_new_ratings_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        add_new_ratings_request: Optional[AddNewRatingsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Add new ratings

        #### &#128274; OAuth Required  Rate one or more items. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be rated. If seasons are specified, all of those seasons will be rated.  Send a `rated_at` UTC datetime to mark items as rated in the past. This is useful for syncing ratings from a media center.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |  #### Media Object POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie`, `show`, `season`, or `episode` object. | | `rating` <span style=\"color:red;\">*</a> | integer | Between 1 and 10. | | `rated_at` | datetime | UTC datetime when the item was rated. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param add_new_ratings_request:
        :type add_new_ratings_request: AddNewRatingsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._add_new_ratings_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            add_new_ratings_request=add_new_ratings_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _add_new_ratings_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        add_new_ratings_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if add_new_ratings_request is not None:
            _body_params = add_new_ratings_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/ratings',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_collection(
        self,
        type: StrictStr,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Get collection

        #### &#128274; OAuth Required &#10024; Extended Info  Get all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.  Each `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.  Each `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.  If you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.

        :param type:  (required)
        :type type: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_collection_serialize(
            type=type,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_collection_with_http_info(
        self,
        type: StrictStr,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Get collection

        #### &#128274; OAuth Required &#10024; Extended Info  Get all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.  Each `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.  Each `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.  If you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.

        :param type:  (required)
        :type type: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_collection_serialize(
            type=type,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_collection_without_preload_content(
        self,
        type: StrictStr,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get collection

        #### &#128274; OAuth Required &#10024; Extended Info  Get all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.  Each `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.  Each `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.  If you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.

        :param type:  (required)
        :type type: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_collection_serialize(
            type=type,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_collection_serialize(
        self,
        type,
        trakt_api_version,
        trakt_api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if type is not None:
            _path_params['type'] = type
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/sync/collection/{type}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_last_activity(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Get last activity

        #### &#128274; OAuth Required  This method is a useful first step in the syncing process. We recommended caching these dates locally, then you can compare to know exactly what data has changed recently. This can greatly optimize your syncs so you don't pull down a ton of data only to see nothing has actually changed.  #### Account  `settings_at` is set when the OAuth user updates any of their Trakt settings on the website. `followed_at` is set when another Trakt user follows or unfollows the OAuth user. `following_at` is set when the OAuth user follows or unfollows another Trakt user. `pending_at` is set when the OAuth user follows a private account, which requires their approval. `requested_at` is set when the OAuth user has a private account and someone requests to follow them.

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_last_activity_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_last_activity_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Get last activity

        #### &#128274; OAuth Required  This method is a useful first step in the syncing process. We recommended caching these dates locally, then you can compare to know exactly what data has changed recently. This can greatly optimize your syncs so you don't pull down a ton of data only to see nothing has actually changed.  #### Account  `settings_at` is set when the OAuth user updates any of their Trakt settings on the website. `followed_at` is set when another Trakt user follows or unfollows the OAuth user. `following_at` is set when the OAuth user follows or unfollows another Trakt user. `pending_at` is set when the OAuth user follows a private account, which requires their approval. `requested_at` is set when the OAuth user has a private account and someone requests to follow them.

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_last_activity_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_last_activity_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get last activity

        #### &#128274; OAuth Required  This method is a useful first step in the syncing process. We recommended caching these dates locally, then you can compare to know exactly what data has changed recently. This can greatly optimize your syncs so you don't pull down a ton of data only to see nothing has actually changed.  #### Account  `settings_at` is set when the OAuth user updates any of their Trakt settings on the website. `followed_at` is set when another Trakt user follows or unfollows the OAuth user. `following_at` is set when the OAuth user follows or unfollows another Trakt user. `pending_at` is set when the OAuth user follows a private account, which requires their approval. `requested_at` is set when the OAuth user has a private account and someone requests to follow them.

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_last_activity_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_last_activity_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/sync/last_activities',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_personal_recommendations(
        self,
        type: Annotated[StrictStr, Field(description="Filter for a specific item type")],
        sort: Annotated[StrictStr, Field(description="How to sort (only if type is also sent)")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Get personal recommendations

        #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### Notes  Each recommendation contains a `notes` field explaining why the user recommended the item.

        :param type: Filter for a specific item type (required)
        :type type: str
        :param sort: How to sort (only if type is also sent) (required)
        :type sort: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_personal_recommendations_serialize(
            type=type,
            sort=sort,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_personal_recommendations_with_http_info(
        self,
        type: Annotated[StrictStr, Field(description="Filter for a specific item type")],
        sort: Annotated[StrictStr, Field(description="How to sort (only if type is also sent)")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Get personal recommendations

        #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### Notes  Each recommendation contains a `notes` field explaining why the user recommended the item.

        :param type: Filter for a specific item type (required)
        :type type: str
        :param sort: How to sort (only if type is also sent) (required)
        :type sort: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_personal_recommendations_serialize(
            type=type,
            sort=sort,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_personal_recommendations_without_preload_content(
        self,
        type: Annotated[StrictStr, Field(description="Filter for a specific item type")],
        sort: Annotated[StrictStr, Field(description="How to sort (only if type is also sent)")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get personal recommendations

        #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### Notes  Each recommendation contains a `notes` field explaining why the user recommended the item.

        :param type: Filter for a specific item type (required)
        :type type: str
        :param sort: How to sort (only if type is also sent) (required)
        :type sort: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_personal_recommendations_serialize(
            type=type,
            sort=sort,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_personal_recommendations_serialize(
        self,
        type,
        sort,
        trakt_api_version,
        trakt_api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if type is not None:
            _path_params['type'] = type
        if sort is not None:
            _path_params['sort'] = sort
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/sync/recommendations/{type}/{sort}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_playback_progress(
        self,
        type: StrictStr,
        start_at: Annotated[Optional[StrictStr], Field(description="Starting date.")] = None,
        end_at: Annotated[Optional[StrictStr], Field(description="Ending date.")] = None,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Get playback progress

        #### &#128274; OAuth Required &#128196; Pagination Optional  Whenever a scrobble is paused, the playback progress is saved. Use this progress to sync up playback across different media centers or apps. For example, you can start watching a movie in a media center, stop it, then resume on your tablet from the same spot. Each item will have the `progress` percentage between 0 and 100.  You can optionally specify a `type` to only get `movies` or `episodes`.  By default, all results will be returned. Pagination is optional and can be used for something like an \"on deck\" feature, or if you only need a limited data set.  **Note:** We only save playback progress for the last 6 months.

        :param type:  (required)
        :type type: str
        :param start_at: Starting date.
        :type start_at: str
        :param end_at: Ending date.
        :type end_at: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_playback_progress_serialize(
            type=type,
            start_at=start_at,
            end_at=end_at,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_playback_progress_with_http_info(
        self,
        type: StrictStr,
        start_at: Annotated[Optional[StrictStr], Field(description="Starting date.")] = None,
        end_at: Annotated[Optional[StrictStr], Field(description="Ending date.")] = None,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Get playback progress

        #### &#128274; OAuth Required &#128196; Pagination Optional  Whenever a scrobble is paused, the playback progress is saved. Use this progress to sync up playback across different media centers or apps. For example, you can start watching a movie in a media center, stop it, then resume on your tablet from the same spot. Each item will have the `progress` percentage between 0 and 100.  You can optionally specify a `type` to only get `movies` or `episodes`.  By default, all results will be returned. Pagination is optional and can be used for something like an \"on deck\" feature, or if you only need a limited data set.  **Note:** We only save playback progress for the last 6 months.

        :param type:  (required)
        :type type: str
        :param start_at: Starting date.
        :type start_at: str
        :param end_at: Ending date.
        :type end_at: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_playback_progress_serialize(
            type=type,
            start_at=start_at,
            end_at=end_at,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_playback_progress_without_preload_content(
        self,
        type: StrictStr,
        start_at: Annotated[Optional[StrictStr], Field(description="Starting date.")] = None,
        end_at: Annotated[Optional[StrictStr], Field(description="Ending date.")] = None,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get playback progress

        #### &#128274; OAuth Required &#128196; Pagination Optional  Whenever a scrobble is paused, the playback progress is saved. Use this progress to sync up playback across different media centers or apps. For example, you can start watching a movie in a media center, stop it, then resume on your tablet from the same spot. Each item will have the `progress` percentage between 0 and 100.  You can optionally specify a `type` to only get `movies` or `episodes`.  By default, all results will be returned. Pagination is optional and can be used for something like an \"on deck\" feature, or if you only need a limited data set.  **Note:** We only save playback progress for the last 6 months.

        :param type:  (required)
        :type type: str
        :param start_at: Starting date.
        :type start_at: str
        :param end_at: Ending date.
        :type end_at: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_playback_progress_serialize(
            type=type,
            start_at=start_at,
            end_at=end_at,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_playback_progress_serialize(
        self,
        type,
        start_at,
        end_at,
        trakt_api_version,
        trakt_api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if type is not None:
            _path_params['type'] = type
        # process the query parameters
        if start_at is not None:
            
            _query_params.append(('start_at', start_at))
            
        if end_at is not None:
            
            _query_params.append(('end_at', end_at))
            
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/sync/playback/{type}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_ratings(
        self,
        type: StrictStr,
        rating: Annotated[StrictInt, Field(description="Filter for a specific rating.")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Get ratings

        #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info  Get a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.

        :param type:  (required)
        :type type: str
        :param rating: Filter for a specific rating. (required)
        :type rating: int
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_ratings_serialize(
            type=type,
            rating=rating,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_ratings_with_http_info(
        self,
        type: StrictStr,
        rating: Annotated[StrictInt, Field(description="Filter for a specific rating.")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Get ratings

        #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info  Get a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.

        :param type:  (required)
        :type type: str
        :param rating: Filter for a specific rating. (required)
        :type rating: int
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_ratings_serialize(
            type=type,
            rating=rating,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_ratings_without_preload_content(
        self,
        type: StrictStr,
        rating: Annotated[StrictInt, Field(description="Filter for a specific rating.")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get ratings

        #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info  Get a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.

        :param type:  (required)
        :type type: str
        :param rating: Filter for a specific rating. (required)
        :type rating: int
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_ratings_serialize(
            type=type,
            rating=rating,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_ratings_serialize(
        self,
        type,
        rating,
        trakt_api_version,
        trakt_api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if type is not None:
            _path_params['type'] = type
        if rating is not None:
            _path_params['rating'] = rating
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/sync/ratings/{type}/{rating}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_watched(
        self,
        type: StrictStr,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Get watched

        #### &#128274; OAuth Required &#10024; Extended Info  Returns all movies or shows a user has watched sorted by most plays.  If `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.  Each `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.  Each `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.

        :param type:  (required)
        :type type: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_watched_serialize(
            type=type,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_watched_with_http_info(
        self,
        type: StrictStr,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Get watched

        #### &#128274; OAuth Required &#10024; Extended Info  Returns all movies or shows a user has watched sorted by most plays.  If `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.  Each `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.  Each `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.

        :param type:  (required)
        :type type: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_watched_serialize(
            type=type,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_watched_without_preload_content(
        self,
        type: StrictStr,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get watched

        #### &#128274; OAuth Required &#10024; Extended Info  Returns all movies or shows a user has watched sorted by most plays.  If `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.  Each `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.  Each `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.

        :param type:  (required)
        :type type: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_watched_serialize(
            type=type,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_watched_serialize(
        self,
        type,
        trakt_api_version,
        trakt_api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if type is not None:
            _path_params['type'] = type
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/sync/watched/{type}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_watched_history(
        self,
        type: StrictStr,
        id: Annotated[StrictInt, Field(description="Trakt ID for a specific item.")],
        start_at: Annotated[Optional[StrictStr], Field(description="Starting date.")] = None,
        end_at: Annotated[Optional[StrictStr], Field(description="Ending date.")] = None,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Get watched history

        #### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info  Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.  Specify a `type` and trakt `id` to limit the history for just that item. If the `id` is valid, but there is no history, an empty array will be returned.  | Example URL | Returns watches for... | |---|---| | `/history/movies/12601` | TRON: Legacy | | `/history/shows/1388` | All episodes of Breaking Bad | | `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 | | `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |

        :param type:  (required)
        :type type: str
        :param id: Trakt ID for a specific item. (required)
        :type id: int
        :param start_at: Starting date.
        :type start_at: str
        :param end_at: Ending date.
        :type end_at: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_watched_history_serialize(
            type=type,
            id=id,
            start_at=start_at,
            end_at=end_at,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_watched_history_with_http_info(
        self,
        type: StrictStr,
        id: Annotated[StrictInt, Field(description="Trakt ID for a specific item.")],
        start_at: Annotated[Optional[StrictStr], Field(description="Starting date.")] = None,
        end_at: Annotated[Optional[StrictStr], Field(description="Ending date.")] = None,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Get watched history

        #### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info  Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.  Specify a `type` and trakt `id` to limit the history for just that item. If the `id` is valid, but there is no history, an empty array will be returned.  | Example URL | Returns watches for... | |---|---| | `/history/movies/12601` | TRON: Legacy | | `/history/shows/1388` | All episodes of Breaking Bad | | `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 | | `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |

        :param type:  (required)
        :type type: str
        :param id: Trakt ID for a specific item. (required)
        :type id: int
        :param start_at: Starting date.
        :type start_at: str
        :param end_at: Ending date.
        :type end_at: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_watched_history_serialize(
            type=type,
            id=id,
            start_at=start_at,
            end_at=end_at,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_watched_history_without_preload_content(
        self,
        type: StrictStr,
        id: Annotated[StrictInt, Field(description="Trakt ID for a specific item.")],
        start_at: Annotated[Optional[StrictStr], Field(description="Starting date.")] = None,
        end_at: Annotated[Optional[StrictStr], Field(description="Ending date.")] = None,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get watched history

        #### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info  Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.  Specify a `type` and trakt `id` to limit the history for just that item. If the `id` is valid, but there is no history, an empty array will be returned.  | Example URL | Returns watches for... | |---|---| | `/history/movies/12601` | TRON: Legacy | | `/history/shows/1388` | All episodes of Breaking Bad | | `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 | | `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |

        :param type:  (required)
        :type type: str
        :param id: Trakt ID for a specific item. (required)
        :type id: int
        :param start_at: Starting date.
        :type start_at: str
        :param end_at: Ending date.
        :type end_at: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_watched_history_serialize(
            type=type,
            id=id,
            start_at=start_at,
            end_at=end_at,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_watched_history_serialize(
        self,
        type,
        id,
        start_at,
        end_at,
        trakt_api_version,
        trakt_api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if type is not None:
            _path_params['type'] = type
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if start_at is not None:
            
            _query_params.append(('start_at', start_at))
            
        if end_at is not None:
            
            _query_params.append(('end_at', end_at))
            
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/sync/history/{type}/{id}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_watchlist(
        self,
        type: Annotated[StrictStr, Field(description="Filter for a specific item type")],
        sort: Annotated[StrictStr, Field(description="How to sort (only if type is also sent)")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Get watchlist

        #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  Returns all items in a user's watchlist filtered by type.  #### Notes  Each watchlist item contains a `notes` field with text entered by the user.  #### Sorting Headers  By default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.  We also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.  #### Auto Removal  When an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.  _**The watchlist should not be used as a list of what the user is actively watching.**_  Use a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.

        :param type: Filter for a specific item type (required)
        :type type: str
        :param sort: How to sort (only if type is also sent) (required)
        :type sort: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_watchlist_serialize(
            type=type,
            sort=sort,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_watchlist_with_http_info(
        self,
        type: Annotated[StrictStr, Field(description="Filter for a specific item type")],
        sort: Annotated[StrictStr, Field(description="How to sort (only if type is also sent)")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Get watchlist

        #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  Returns all items in a user's watchlist filtered by type.  #### Notes  Each watchlist item contains a `notes` field with text entered by the user.  #### Sorting Headers  By default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.  We also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.  #### Auto Removal  When an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.  _**The watchlist should not be used as a list of what the user is actively watching.**_  Use a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.

        :param type: Filter for a specific item type (required)
        :type type: str
        :param sort: How to sort (only if type is also sent) (required)
        :type sort: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_watchlist_serialize(
            type=type,
            sort=sort,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_watchlist_without_preload_content(
        self,
        type: Annotated[StrictStr, Field(description="Filter for a specific item type")],
        sort: Annotated[StrictStr, Field(description="How to sort (only if type is also sent)")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get watchlist

        #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  Returns all items in a user's watchlist filtered by type.  #### Notes  Each watchlist item contains a `notes` field with text entered by the user.  #### Sorting Headers  By default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.  We also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.  #### Auto Removal  When an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.  _**The watchlist should not be used as a list of what the user is actively watching.**_  Use a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.

        :param type: Filter for a specific item type (required)
        :type type: str
        :param sort: How to sort (only if type is also sent) (required)
        :type sort: str
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_watchlist_serialize(
            type=type,
            sort=sort,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_watchlist_serialize(
        self,
        type,
        sort,
        trakt_api_version,
        trakt_api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if type is not None:
            _path_params['type'] = type
        if sort is not None:
            _path_params['sort'] = sort
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/sync/watchlist/{type}/{sort}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def remove_a_playback_item(
        self,
        id: Annotated[StrictInt, Field(description="playback ID")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Remove a playback item

        #### &#128274; OAuth Required  Remove a playback item from a user's playback progress list. A `404` will be returned if the `id` is invalid.

        :param id: playback ID (required)
        :type id: int
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_a_playback_item_serialize(
            id=id,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '204': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def remove_a_playback_item_with_http_info(
        self,
        id: Annotated[StrictInt, Field(description="playback ID")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Remove a playback item

        #### &#128274; OAuth Required  Remove a playback item from a user's playback progress list. A `404` will be returned if the `id` is invalid.

        :param id: playback ID (required)
        :type id: int
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_a_playback_item_serialize(
            id=id,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '204': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def remove_a_playback_item_without_preload_content(
        self,
        id: Annotated[StrictInt, Field(description="playback ID")],
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Remove a playback item

        #### &#128274; OAuth Required  Remove a playback item from a user's playback progress list. A `404` will be returned if the `id` is invalid.

        :param id: playback ID (required)
        :type id: int
        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_a_playback_item_serialize(
            id=id,
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '204': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _remove_a_playback_item_serialize(
        self,
        id,
        trakt_api_version,
        trakt_api_key,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter




        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='DELETE',
            resource_path='/sync/playback/{id}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def remove_items_from_collection(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_collection_request: Optional[RemoveItemsFromCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Remove items from collection

        #### &#128274; OAuth Required  Remove one or more items from a user's collection.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_collection_request:
        :type remove_items_from_collection_request: RemoveItemsFromCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_collection_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_collection_request=remove_items_from_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def remove_items_from_collection_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_collection_request: Optional[RemoveItemsFromCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Remove items from collection

        #### &#128274; OAuth Required  Remove one or more items from a user's collection.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_collection_request:
        :type remove_items_from_collection_request: RemoveItemsFromCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_collection_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_collection_request=remove_items_from_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def remove_items_from_collection_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_collection_request: Optional[RemoveItemsFromCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Remove items from collection

        #### &#128274; OAuth Required  Remove one or more items from a user's collection.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_collection_request:
        :type remove_items_from_collection_request: RemoveItemsFromCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_collection_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_collection_request=remove_items_from_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _remove_items_from_collection_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        remove_items_from_collection_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if remove_items_from_collection_request is not None:
            _body_params = remove_items_from_collection_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/collection/remove',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def remove_items_from_history(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_history_request: Optional[RemoveItemsFromHistoryRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Remove items from history

        #### &#128274; OAuth Required  Remove items from a user's watch history including all watches, scrobbles, and checkins. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be removed. If seasons are specified, only episodes in those seasons will be removed.  You can also send a list of raw history `ids` _(64-bit integers)_ to delete single plays from the watched history. The [**/sync/history**](#reference/sync/get-history) method will return an individual `id` _(64-bit integer)_ for each history item.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. | | `ids` | array | Array of history ids. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_history_request:
        :type remove_items_from_history_request: RemoveItemsFromHistoryRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_history_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_history_request=remove_items_from_history_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def remove_items_from_history_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_history_request: Optional[RemoveItemsFromHistoryRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Remove items from history

        #### &#128274; OAuth Required  Remove items from a user's watch history including all watches, scrobbles, and checkins. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be removed. If seasons are specified, only episodes in those seasons will be removed.  You can also send a list of raw history `ids` _(64-bit integers)_ to delete single plays from the watched history. The [**/sync/history**](#reference/sync/get-history) method will return an individual `id` _(64-bit integer)_ for each history item.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. | | `ids` | array | Array of history ids. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_history_request:
        :type remove_items_from_history_request: RemoveItemsFromHistoryRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_history_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_history_request=remove_items_from_history_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def remove_items_from_history_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_history_request: Optional[RemoveItemsFromHistoryRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Remove items from history

        #### &#128274; OAuth Required  Remove items from a user's watch history including all watches, scrobbles, and checkins. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be removed. If seasons are specified, only episodes in those seasons will be removed.  You can also send a list of raw history `ids` _(64-bit integers)_ to delete single plays from the watched history. The [**/sync/history**](#reference/sync/get-history) method will return an individual `id` _(64-bit integer)_ for each history item.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. | | `ids` | array | Array of history ids. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_history_request:
        :type remove_items_from_history_request: RemoveItemsFromHistoryRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_history_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_history_request=remove_items_from_history_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _remove_items_from_history_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        remove_items_from_history_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if remove_items_from_history_request is not None:
            _body_params = remove_items_from_history_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/history/remove',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def remove_items_from_personal_recommendations(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_personal_recommendations_request: Optional[RemoveItemsFromPersonalRecommendationsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Remove items from personal recommendations

        #### &#128274; OAuth Required  Remove items from a user's personal recommendations. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_personal_recommendations_request:
        :type remove_items_from_personal_recommendations_request: RemoveItemsFromPersonalRecommendationsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_personal_recommendations_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_personal_recommendations_request=remove_items_from_personal_recommendations_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def remove_items_from_personal_recommendations_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_personal_recommendations_request: Optional[RemoveItemsFromPersonalRecommendationsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Remove items from personal recommendations

        #### &#128274; OAuth Required  Remove items from a user's personal recommendations. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_personal_recommendations_request:
        :type remove_items_from_personal_recommendations_request: RemoveItemsFromPersonalRecommendationsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_personal_recommendations_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_personal_recommendations_request=remove_items_from_personal_recommendations_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def remove_items_from_personal_recommendations_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_personal_recommendations_request: Optional[RemoveItemsFromPersonalRecommendationsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Remove items from personal recommendations

        #### &#128274; OAuth Required  Remove items from a user's personal recommendations. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_personal_recommendations_request:
        :type remove_items_from_personal_recommendations_request: RemoveItemsFromPersonalRecommendationsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_personal_recommendations_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_personal_recommendations_request=remove_items_from_personal_recommendations_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _remove_items_from_personal_recommendations_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        remove_items_from_personal_recommendations_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if remove_items_from_personal_recommendations_request is not None:
            _body_params = remove_items_from_personal_recommendations_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/recommendations/remove',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def remove_items_from_watchlist(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_collection_request: Optional[RemoveItemsFromCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Remove items from watchlist

        #### &#128274; OAuth Required  Remove one or more items from a user's watchlist.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_collection_request:
        :type remove_items_from_collection_request: RemoveItemsFromCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_watchlist_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_collection_request=remove_items_from_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def remove_items_from_watchlist_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_collection_request: Optional[RemoveItemsFromCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Remove items from watchlist

        #### &#128274; OAuth Required  Remove one or more items from a user's watchlist.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_collection_request:
        :type remove_items_from_collection_request: RemoveItemsFromCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_watchlist_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_collection_request=remove_items_from_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def remove_items_from_watchlist_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_collection_request: Optional[RemoveItemsFromCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Remove items from watchlist

        #### &#128274; OAuth Required  Remove one or more items from a user's watchlist.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_collection_request:
        :type remove_items_from_collection_request: RemoveItemsFromCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_items_from_watchlist_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_collection_request=remove_items_from_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _remove_items_from_watchlist_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        remove_items_from_collection_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if remove_items_from_collection_request is not None:
            _body_params = remove_items_from_collection_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/watchlist/remove',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def remove_ratings(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_collection_request: Optional[RemoveItemsFromCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Remove ratings

        #### &#128274; OAuth Required  Remove ratings for one or more items.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_collection_request:
        :type remove_items_from_collection_request: RemoveItemsFromCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_ratings_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_collection_request=remove_items_from_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def remove_ratings_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_collection_request: Optional[RemoveItemsFromCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Remove ratings

        #### &#128274; OAuth Required  Remove ratings for one or more items.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_collection_request:
        :type remove_items_from_collection_request: RemoveItemsFromCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_ratings_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_collection_request=remove_items_from_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def remove_ratings_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        remove_items_from_collection_request: Optional[RemoveItemsFromCollectionRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Remove ratings

        #### &#128274; OAuth Required  Remove ratings for one or more items.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. |

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param remove_items_from_collection_request:
        :type remove_items_from_collection_request: RemoveItemsFromCollectionRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._remove_ratings_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            remove_items_from_collection_request=remove_items_from_collection_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _remove_ratings_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        remove_items_from_collection_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if remove_items_from_collection_request is not None:
            _body_params = remove_items_from_collection_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/ratings/remove',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def reorder_personally_recommended_items(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        reorder_personally_recommended_items_request: Optional[ReorderPersonallyRecommendedItemsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Reorder personally recommended items

        #### &#128274; OAuth Required  Reorder all items on a user's personal recommendations by sending the updated `rank` of list item ids. Use the [**/sync/recommendations**](#reference/sync/get-personal-recommendations) method to get all list item ids.

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param reorder_personally_recommended_items_request:
        :type reorder_personally_recommended_items_request: ReorderPersonallyRecommendedItemsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._reorder_personally_recommended_items_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            reorder_personally_recommended_items_request=reorder_personally_recommended_items_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def reorder_personally_recommended_items_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        reorder_personally_recommended_items_request: Optional[ReorderPersonallyRecommendedItemsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Reorder personally recommended items

        #### &#128274; OAuth Required  Reorder all items on a user's personal recommendations by sending the updated `rank` of list item ids. Use the [**/sync/recommendations**](#reference/sync/get-personal-recommendations) method to get all list item ids.

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param reorder_personally_recommended_items_request:
        :type reorder_personally_recommended_items_request: ReorderPersonallyRecommendedItemsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._reorder_personally_recommended_items_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            reorder_personally_recommended_items_request=reorder_personally_recommended_items_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def reorder_personally_recommended_items_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        reorder_personally_recommended_items_request: Optional[ReorderPersonallyRecommendedItemsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Reorder personally recommended items

        #### &#128274; OAuth Required  Reorder all items on a user's personal recommendations by sending the updated `rank` of list item ids. Use the [**/sync/recommendations**](#reference/sync/get-personal-recommendations) method to get all list item ids.

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param reorder_personally_recommended_items_request:
        :type reorder_personally_recommended_items_request: ReorderPersonallyRecommendedItemsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._reorder_personally_recommended_items_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            reorder_personally_recommended_items_request=reorder_personally_recommended_items_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _reorder_personally_recommended_items_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        reorder_personally_recommended_items_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if reorder_personally_recommended_items_request is not None:
            _body_params = reorder_personally_recommended_items_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/recommendations/reorder',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def reorder_watchlist_items(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        reorder_personally_recommended_items_request: Optional[ReorderPersonallyRecommendedItemsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> None:
        """Reorder watchlist items

        #### &#128274; OAuth Required  Reorder all items on a user's watchlist by sending the updated `rank` of list item ids. Use the [**/sync/watchlist**](#reference/sync/get-watchlist) method to get all list item ids.

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param reorder_personally_recommended_items_request:
        :type reorder_personally_recommended_items_request: ReorderPersonallyRecommendedItemsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._reorder_watchlist_items_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            reorder_personally_recommended_items_request=reorder_personally_recommended_items_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def reorder_watchlist_items_with_http_info(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        reorder_personally_recommended_items_request: Optional[ReorderPersonallyRecommendedItemsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[None]:
        """Reorder watchlist items

        #### &#128274; OAuth Required  Reorder all items on a user's watchlist by sending the updated `rank` of list item ids. Use the [**/sync/watchlist**](#reference/sync/get-watchlist) method to get all list item ids.

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param reorder_personally_recommended_items_request:
        :type reorder_personally_recommended_items_request: ReorderPersonallyRecommendedItemsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._reorder_watchlist_items_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            reorder_personally_recommended_items_request=reorder_personally_recommended_items_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def reorder_watchlist_items_without_preload_content(
        self,
        trakt_api_version: Annotated[Optional[StrictStr], Field(description="e.g. 2")] = None,
        trakt_api_key: Annotated[Optional[StrictStr], Field(description="e.g. [client_id]")] = None,
        reorder_personally_recommended_items_request: Optional[ReorderPersonallyRecommendedItemsRequest] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Reorder watchlist items

        #### &#128274; OAuth Required  Reorder all items on a user's watchlist by sending the updated `rank` of list item ids. Use the [**/sync/watchlist**](#reference/sync/get-watchlist) method to get all list item ids.

        :param trakt_api_version: e.g. 2
        :type trakt_api_version: str
        :param trakt_api_key: e.g. [client_id]
        :type trakt_api_key: str
        :param reorder_personally_recommended_items_request:
        :type reorder_personally_recommended_items_request: ReorderPersonallyRecommendedItemsRequest
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._reorder_watchlist_items_serialize(
            trakt_api_version=trakt_api_version,
            trakt_api_key=trakt_api_key,
            reorder_personally_recommended_items_request=reorder_personally_recommended_items_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _reorder_watchlist_items_serialize(
        self,
        trakt_api_version,
        trakt_api_key,
        reorder_personally_recommended_items_request,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        if trakt_api_version is not None:
            _header_params['trakt-api-version'] = trakt_api_version
        if trakt_api_key is not None:
            _header_params['trakt-api-key'] = trakt_api_key
        # process the form parameters
        # process the body parameter
        if reorder_personally_recommended_items_request is not None:
            _body_params = reorder_personally_recommended_items_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
            'oauth2'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/sync/watchlist/reorder',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )


