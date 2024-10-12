# openapi-client
Musixmatch lyrics API is a robust service that permits you to search and retrieve lyrics in the simplest possible way. It just works.

Include millions of licensed lyrics on your website or in your application legally.

The fastest, most powerful and legal way to display lyrics on your website or in your application.

#### Read musixmatch API Terms & Conditions and the Privacy Policy:
Before getting started, you must take a look at the [API Terms & Conditions](http://musixmatch.com/apiterms/) and the [Privacy Policy](https://developer.musixmatch.com/privacy). We’ve worked hard to make this service completely legal so that we are all protected from any foreseeable liability. Take the time to read this stuff.

#### Register for an API key:
All you need to do is [register](https://developer.musixmatch.com/signup) in order to get your API key, a mandatory parameter for most of our API calls. It’s your personal identifier and should be kept secret:

```
  https://api.musixmatch.com/ws/v1.1/track.get?apikey=YOUR_API_KEY
```
#### Integrate the musixmatch service with your web site or application
In the most common scenario you only need to implement two API calls: 
The first call is to match your catalog to ours using the [track.search](#!/Track/get_track_search) function and the second is to get the lyrics using the [track.lyrics.get](#!/Lyrics/get_track_lyrics_get) api. That’s it!

## API Methods
What does the musiXmatch API do?

The musiXmatch API allows you to read objects from our huge 100% licensed lyrics database.

To make your life easier we are providing you with one or more examples to show you how it could work in the wild. You’ll find both the API request and API response in all the available output formats for each API call. Follow the links below for the details.

The current API version is 1.1, the root URL is located at https://api.musixmatch.com/ws/1.1/

Supported input parameters can be found on the page [Input Parameters](https://developer.musixmatch.com/documentation/input-parameters). Use UTF-8 to encode arguments when calling API methods.

Every response includes a status_code. A list of all status codes can be consulted at [Status Codes](https://developer.musixmatch.com/documentation/status-codes).

## Music meta data
The musiXmatch api is built around lyrics, but there are many other data we provide through the api that can be used to improve every existent music service.

## Track
Inside the track object you can get the following extra information:

### TRACK RATING

The track rating is a score 0-100 identifying how popular is a song in musixmatch.

You can use this information to sort search results, like the most popular songs of an artist, of a music genre, of a lyrics language.

### INSTRUMENTAL AND EXPLICIT FLAGS

The instrumental flag identifies songs with music only, no lyrics.

The explicit flag identifies songs with explicit lyrics or explicit title. We're able to identify explicit words and set the flag for the most common languages.

### FAVOURITES

How many users have this song in their list of favourites.

Can be used to sort tracks by num favourite to identify more popular tracks within a set.

### MUSIC GENRE

The music genere of the song.

Can be used to group songs by genre, as input for similarity alghorithms, artist genre identification, navigate songs by genere, etc.

### SONG TITLES TRANSLATIONS

The track title, as translated in different lanauages, can be used to display the right writing for a given user, example:

LIES (Bigbang) becomes 在光化門 in chinese
HALLELUJAH (Bigbang) becomes ハレルヤ in japanese


## Artist
Inside the artist object you can get the following nice extra information:

### COMMENTS AND COUNTRY

An artist comment is a short snippet of text which can be mainly used for disambiguation.

The artist country is the born country of the artist/group

There are two perfect search result if you search by artist with the keyword \"U2\". Indeed there are two distinct music groups with this same name, one is the most known irish group of Bono Vox, the other is a less popular (world wide speaking) group from Japan.

Here's how you can made use of the artist comment in your search result page:

U2 (Irish rock band)
U2 (あきやまうに)
You can also show the artist country for even better disambiguation:

U2 (Irish rock band) from Ireland
U2 (あきやまうに) from Japan
ARTIST TRANSLATIONS

When you create a world wide music related service you have to take into consideration to display the artist name in the user's local language. These translation are also used as aliases to improve the search results.

Let's use PSY for this example.

Western people know him as PSY but korean want to see the original name 싸이.

Using the name translations provided by our api you can show to every user the writing they expect to see.

Furthermore, when you search for \"psy gangnam style\" or \"싸이 gangnam style\" with our search/match api you will still be able to find the song.

### ARTIST RATING

The artist rating is a score 0-100 identifying how popular is an artist in musixmatch.

You can use this information to build charts, for suggestions, to sort search results. In the example above about U2, we use the artist rating to show the irish band before the japanese one in our serp.

### ARTIST MUSIC GENRE

We provide one or more main artist genre, this information can be used to calculate similar artist, suggestions, or the filter a search by artist genre.



## Album
Inside the album object you can get the following nice extra information:

### ALBUM RATING

The album rating is a score 0-100 identifying how popular is an album in musixmatch.

You can use this information to sort search results, like the most popular albums of an artist.

### ALBUM RATING

The album rating is a score 0-100 identifying how popular is an album in musixmatch.

You can use this information to sort search results, like the most popular albums of an artist.

### ALBUM COPYRIGHT AND LABEL

For most of our albums we can provide extra information like for example:

Label: Universal-Island Records Ltd.
Copyright: (P) 2013 Rubyworks, under license to Columbia Records, a Division of Sony Music Entertainment.
ALBUM TYPE AND RELEASE DATE

The album official release date can be used to sort an artist's albums view starting by the most recent one.

Album can also be filtered or grouped by type: Single, Album, Compilation, Remix, Live. This can help to build an artist page with a more organized structure.

### ALBUM MUSIC GENRE

For most of the albums we provide two groups of music genres. Primary and secondary. This information can be used to help user navigate albums by genre.

An example could be:

Primary genere: POP
Secondary genre: K-POP or Mandopop


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.1.0
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen
For more information, please visit [https://musixmatch.com](https://musixmatch.com)

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

# Defining the host is optional and defaults to https://api.musixmatch.com/ws/1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.musixmatch.com/ws/1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlbumApi(api_client)
    album_id = 'album_id_example' # str | The musiXmatch album id
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)

    try:
        api_response = api_instance.album_get_get(album_id, format=format, param_callback=param_callback)
        print("The response of AlbumApi->album_get_get:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AlbumApi->album_get_get: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.musixmatch.com/ws/1.1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AlbumApi* | [**album_get_get**](docs/AlbumApi.md#album_get_get) | **GET** /album.get | 
*AlbumApi* | [**artist_albums_get_get**](docs/AlbumApi.md#artist_albums_get_get) | **GET** /artist.albums.get | 
*ArtistApi* | [**artist_get_get**](docs/ArtistApi.md#artist_get_get) | **GET** /artist.get | 
*ArtistApi* | [**artist_related_get_get**](docs/ArtistApi.md#artist_related_get_get) | **GET** /artist.related.get | 
*ArtistApi* | [**artist_search_get**](docs/ArtistApi.md#artist_search_get) | **GET** /artist.search | 
*ArtistApi* | [**chart_artists_get_get**](docs/ArtistApi.md#chart_artists_get_get) | **GET** /chart.artists.get | 
*LyricsApi* | [**matcher_lyrics_get_get**](docs/LyricsApi.md#matcher_lyrics_get_get) | **GET** /matcher.lyrics.get | 
*LyricsApi* | [**track_lyrics_get_get**](docs/LyricsApi.md#track_lyrics_get_get) | **GET** /track.lyrics.get | 
*SnippetApi* | [**track_snippet_get_get**](docs/SnippetApi.md#track_snippet_get_get) | **GET** /track.snippet.get | 
*SubtitleApi* | [**matcher_subtitle_get_get**](docs/SubtitleApi.md#matcher_subtitle_get_get) | **GET** /matcher.subtitle.get | 
*SubtitleApi* | [**track_subtitle_get_get**](docs/SubtitleApi.md#track_subtitle_get_get) | **GET** /track.subtitle.get | 
*TrackApi* | [**album_tracks_get_get**](docs/TrackApi.md#album_tracks_get_get) | **GET** /album.tracks.get | 
*TrackApi* | [**chart_tracks_get_get**](docs/TrackApi.md#chart_tracks_get_get) | **GET** /chart.tracks.get | 
*TrackApi* | [**matcher_track_get_get**](docs/TrackApi.md#matcher_track_get_get) | **GET** /matcher.track.get | 
*TrackApi* | [**track_get_get**](docs/TrackApi.md#track_get_get) | **GET** /track.get | 
*TrackApi* | [**track_search_get**](docs/TrackApi.md#track_search_get) | **GET** /track.search | 


## Documentation For Models

 - [Album](docs/Album.md)
 - [AlbumGetGet200Response](docs/AlbumGetGet200Response.md)
 - [AlbumGetGet200ResponseMessage](docs/AlbumGetGet200ResponseMessage.md)
 - [AlbumGetGet200ResponseMessageBody](docs/AlbumGetGet200ResponseMessageBody.md)
 - [AlbumGetGet200ResponseMessageHeader](docs/AlbumGetGet200ResponseMessageHeader.md)
 - [AlbumPrimaryGenres](docs/AlbumPrimaryGenres.md)
 - [AlbumPrimaryGenresMusicGenreListInner](docs/AlbumPrimaryGenresMusicGenreListInner.md)
 - [AlbumPrimaryGenresMusicGenreListInnerMusicGenre](docs/AlbumPrimaryGenresMusicGenreListInnerMusicGenre.md)
 - [AlbumSecondaryGenres](docs/AlbumSecondaryGenres.md)
 - [AlbumTracksGetGet200Response](docs/AlbumTracksGetGet200Response.md)
 - [AlbumTracksGetGet200ResponseMessage](docs/AlbumTracksGetGet200ResponseMessage.md)
 - [AlbumTracksGetGet200ResponseMessageBody](docs/AlbumTracksGetGet200ResponseMessageBody.md)
 - [AlbumTracksGetGet200ResponseMessageHeader](docs/AlbumTracksGetGet200ResponseMessageHeader.md)
 - [Artist](docs/Artist.md)
 - [ArtistAlbumsGetGet200Response](docs/ArtistAlbumsGetGet200Response.md)
 - [ArtistAlbumsGetGet200ResponseMessage](docs/ArtistAlbumsGetGet200ResponseMessage.md)
 - [ArtistAlbumsGetGet200ResponseMessageBody](docs/ArtistAlbumsGetGet200ResponseMessageBody.md)
 - [ArtistArtistAliasListInner](docs/ArtistArtistAliasListInner.md)
 - [ArtistArtistCredits](docs/ArtistArtistCredits.md)
 - [ArtistArtistNameTranslationListInner](docs/ArtistArtistNameTranslationListInner.md)
 - [ArtistArtistNameTranslationListInnerArtistNameTranslation](docs/ArtistArtistNameTranslationListInnerArtistNameTranslation.md)
 - [ArtistGetGet200Response](docs/ArtistGetGet200Response.md)
 - [ArtistGetGet200ResponseMessage](docs/ArtistGetGet200ResponseMessage.md)
 - [ArtistGetGet200ResponseMessageBody](docs/ArtistGetGet200ResponseMessageBody.md)
 - [ArtistRelatedGetGet200Response](docs/ArtistRelatedGetGet200Response.md)
 - [ArtistRelatedGetGet200ResponseMessage](docs/ArtistRelatedGetGet200ResponseMessage.md)
 - [ArtistRelatedGetGet200ResponseMessageBody](docs/ArtistRelatedGetGet200ResponseMessageBody.md)
 - [ChartArtistsGetGet200Response](docs/ChartArtistsGetGet200Response.md)
 - [ChartArtistsGetGet200ResponseMessage](docs/ChartArtistsGetGet200ResponseMessage.md)
 - [ChartArtistsGetGet200ResponseMessageHeader](docs/ChartArtistsGetGet200ResponseMessageHeader.md)
 - [ChartTracksGetGet200Response](docs/ChartTracksGetGet200Response.md)
 - [ChartTracksGetGet200ResponseMessage](docs/ChartTracksGetGet200ResponseMessage.md)
 - [ChartTracksGetGet200ResponseMessageBody](docs/ChartTracksGetGet200ResponseMessageBody.md)
 - [ChartTracksGetGet200ResponseMessageBodyTrackListInner](docs/ChartTracksGetGet200ResponseMessageBodyTrackListInner.md)
 - [Lyrics](docs/Lyrics.md)
 - [MatcherLyricsGetGet200Response](docs/MatcherLyricsGetGet200Response.md)
 - [MatcherLyricsGetGet200ResponseMessage](docs/MatcherLyricsGetGet200ResponseMessage.md)
 - [MatcherLyricsGetGet200ResponseMessageBody](docs/MatcherLyricsGetGet200ResponseMessageBody.md)
 - [MatcherSubtitleGetGet200Response](docs/MatcherSubtitleGetGet200Response.md)
 - [MatcherSubtitleGetGet200ResponseMessage](docs/MatcherSubtitleGetGet200ResponseMessage.md)
 - [MatcherSubtitleGetGet200ResponseMessageBody](docs/MatcherSubtitleGetGet200ResponseMessageBody.md)
 - [MatcherTrackGetGet200Response](docs/MatcherTrackGetGet200Response.md)
 - [MatcherTrackGetGet200ResponseMessage](docs/MatcherTrackGetGet200ResponseMessage.md)
 - [Snippet](docs/Snippet.md)
 - [Subtitle](docs/Subtitle.md)
 - [Track](docs/Track.md)
 - [TrackSnippetGetGet200Response](docs/TrackSnippetGetGet200Response.md)
 - [TrackSnippetGetGet200ResponseMessage](docs/TrackSnippetGetGet200ResponseMessage.md)
 - [TrackSnippetGetGet200ResponseMessageBody](docs/TrackSnippetGetGet200ResponseMessageBody.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="key"></a>
### key

- **Type**: API key
- **API key parameter name**: apikey
- **Location**: URL query string


## Author

info@musixmatch.com


