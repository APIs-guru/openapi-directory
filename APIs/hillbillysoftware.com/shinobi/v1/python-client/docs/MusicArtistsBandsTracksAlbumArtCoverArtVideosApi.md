# openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**musi_videos_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#musi_videos_get) | **GET** /Music/Videos/{AccessToken}/{ArtistID} | Lists all videos available for this Artist / Band
[**music_album_art_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_album_art_get) | **GET** /Music/Albums/Art/{AccessToken}/{AlbumID} | Returns Albumart for passed AlbumID
[**music_albums_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_albums_get) | **GET** /Music/Albums/{AccessToken}/{ArtistID} | Get albums from passed ArtistID
[**music_artist_extended_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_artist_extended_get) | **GET** /Music/Artist/Extended/{AccessToken}/{Name} | Provides extended information, which includes all known albums and music videos of artist / band
[**music_by_music_brainz_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_by_music_brainz_get) | **GET** /Music/Albums/MusicBrainzID/{AccessToken}/{MBID} | Get Artist / Band information on MusicBrainzID
[**music_cd_covers_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_cd_covers_get) | **GET** /Music/Albums/CoverArt/{AccessToken}/{MBID} | Gets CD art for passed MusicBrainzID
[**music_cover_art_by_name_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_cover_art_by_name_get) | **GET** /Music/Artist/Art/Name/{AccessToken}/{Name} | Retrieves artist / band Banner and logo based on artist or bandname
[**music_cover_art_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_cover_art_get) | **GET** /Music/Artist/Art/ID/{AccessToken}/{ArtistID} | Retrieves artist / band Banner and logo based on ArtistID
[**music_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_get) | **GET** /Music/Artist/{AccessToken}/{Name} | Get information about passed band name or artist
[**music_lyrics_by_song_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_lyrics_by_song_get) | **GET** /Music/Lyrics/BySong/{AccessToken}/{Song} | Get lyrics on song title
[**music_lyrics_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_lyrics_get) | **GET** /Music/Lyrics/ByName/{AccessToken}/{Name} | Get lyrics for band or artist (record set limited to 25)
[**music_lyricsby_album_id_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_lyricsby_album_id_get) | **GET** /Music/Lyrics/AlbumID/{AccessToken}/{AlbumID} | Returns all lyrics for requested AlbumID
[**music_tracks_get**](MusicArtistsBandsTracksAlbumArtCoverArtVideosApi.md#music_tracks_get) | **GET** /Music/Tracks/{AccessToken}/{AlbumID} | Get all tracks from requested album


# **musi_videos_get**
> List[MusicVideo] musi_videos_get(access_token, artist_id)

Lists all videos available for this Artist / Band

### Example


```python
import openapi_client
from openapi_client.models.music_video import MusicVideo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    artist_id = 'artist_id_example' # str | 

    try:
        # Lists all videos available for this Artist / Band
        api_response = api_instance.musi_videos_get(access_token, artist_id)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->musi_videos_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->musi_videos_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **artist_id** | **str**|  | 

### Return type

[**List[MusicVideo]**](MusicVideo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists all videos available for this Artist / Band |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_album_art_get**
> AlbumArt music_album_art_get(access_token, album_id)

Returns Albumart for passed AlbumID

### Example


```python
import openapi_client
from openapi_client.models.album_art import AlbumArt
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    album_id = 'album_id_example' # str | 

    try:
        # Returns Albumart for passed AlbumID
        api_response = api_instance.music_album_art_get(access_token, album_id)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_album_art_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_album_art_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **album_id** | **str**|  | 

### Return type

[**AlbumArt**](AlbumArt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets album art for passed AlbumID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_albums_get**
> List[BandAlbums] music_albums_get(access_token, artist_id)

Get albums from passed ArtistID

### Example


```python
import openapi_client
from openapi_client.models.band_albums import BandAlbums
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    artist_id = 'artist_id_example' # str | ID of artist or band to retrieve albums from

    try:
        # Get albums from passed ArtistID
        api_response = api_instance.music_albums_get(access_token, artist_id)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_albums_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_albums_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **artist_id** | **str**| ID of artist or band to retrieve albums from | 

### Return type

[**List[BandAlbums]**](BandAlbums.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists all albums from passed ArtistID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_artist_extended_get**
> List[BandInfoExtended] music_artist_extended_get(access_token, name)

Provides extended information, which includes all known albums and music videos of artist / band

### Example


```python
import openapi_client
from openapi_client.models.band_info_extended import BandInfoExtended
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | 

    try:
        # Provides extended information, which includes all known albums and music videos of artist / band
        api_response = api_instance.music_artist_extended_get(access_token, name)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_artist_extended_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_artist_extended_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**|  | 

### Return type

[**List[BandInfoExtended]**](BandInfoExtended.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Extended Information about band / artist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_by_music_brainz_get**
> List[BandInfo] music_by_music_brainz_get(access_token, mbid)

Get Artist / Band information on MusicBrainzID

### Example


```python
import openapi_client
from openapi_client.models.band_info import BandInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    mbid = 'mbid_example' # str | MusicBrainzID

    try:
        # Get Artist / Band information on MusicBrainzID
        api_response = api_instance.music_by_music_brainz_get(access_token, mbid)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_by_music_brainz_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_by_music_brainz_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **mbid** | **str**| MusicBrainzID | 

### Return type

[**List[BandInfo]**](BandInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about band / artist based on MusicBrainzID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_cd_covers_get**
> List[CDCoverArt] music_cd_covers_get(access_token, mbid)

Gets CD art for passed MusicBrainzID

### Example


```python
import openapi_client
from openapi_client.models.cd_cover_art import CDCoverArt
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    mbid = 'mbid_example' # str | MusicBrainzID

    try:
        # Gets CD art for passed MusicBrainzID
        api_response = api_instance.music_cd_covers_get(access_token, mbid)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_cd_covers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_cd_covers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **mbid** | **str**| MusicBrainzID | 

### Return type

[**List[CDCoverArt]**](CDCoverArt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets CD Cover Art for album |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_cover_art_by_name_get**
> ArtistArt music_cover_art_by_name_get(access_token, name)

Retrieves artist / band Banner and logo based on artist or bandname

### Example


```python
import openapi_client
from openapi_client.models.artist_art import ArtistArt
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | Name of artist or band

    try:
        # Retrieves artist / band Banner and logo based on artist or bandname
        api_response = api_instance.music_cover_art_by_name_get(access_token, name)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_cover_art_by_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_cover_art_by_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**| Name of artist or band | 

### Return type

[**ArtistArt**](ArtistArt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets art for passed arist or bandname |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_cover_art_get**
> ArtistArt music_cover_art_get(access_token, artist_id)

Retrieves artist / band Banner and logo based on ArtistID

### Example


```python
import openapi_client
from openapi_client.models.artist_art import ArtistArt
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    artist_id = 'artist_id_example' # str | ArtistID of artist or band

    try:
        # Retrieves artist / band Banner and logo based on ArtistID
        api_response = api_instance.music_cover_art_get(access_token, artist_id)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_cover_art_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_cover_art_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **artist_id** | **str**| ArtistID of artist or band | 

### Return type

[**ArtistArt**](ArtistArt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets art for passed ArtistID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_get**
> List[BandInfo] music_get(access_token, name)

Get information about passed band name or artist

### Example


```python
import openapi_client
from openapi_client.models.band_info import BandInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | Name (or part) of band or artist name

    try:
        # Get information about passed band name or artist
        api_response = api_instance.music_get(access_token, name)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**| Name (or part) of band or artist name | 

### Return type

[**List[BandInfo]**](BandInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about band / artist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_lyrics_by_song_get**
> List[Lyric] music_lyrics_by_song_get(access_token, song)

Get lyrics on song title

### Example


```python
import openapi_client
from openapi_client.models.lyric import Lyric
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    song = 'song_example' # str | Name or part of song name

    try:
        # Get lyrics on song title
        api_response = api_instance.music_lyrics_by_song_get(access_token, song)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_lyrics_by_song_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_lyrics_by_song_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **song** | **str**| Name or part of song name | 

### Return type

[**List[Lyric]**](Lyric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | lyric(s) for requested song |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_lyrics_get**
> List[Lyric] music_lyrics_get(access_token, name)

Get lyrics for band or artist (record set limited to 25)

### Example


```python
import openapi_client
from openapi_client.models.lyric import Lyric
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | Name (or partial) of band or artist (record set limited to 25)

    try:
        # Get lyrics for band or artist (record set limited to 25)
        api_response = api_instance.music_lyrics_get(access_token, name)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_lyrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_lyrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**| Name (or partial) of band or artist (record set limited to 25) | 

### Return type

[**List[Lyric]**](Lyric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | lyric(s) for requested artist / band |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_lyricsby_album_id_get**
> List[Lyric] music_lyricsby_album_id_get(access_token, album_id)

Returns all lyrics for requested AlbumID

### Example


```python
import openapi_client
from openapi_client.models.lyric import Lyric
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    album_id = 'album_id_example' # str | 

    try:
        # Returns all lyrics for requested AlbumID
        api_response = api_instance.music_lyricsby_album_id_get(access_token, album_id)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_lyricsby_album_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_lyricsby_album_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **album_id** | **str**|  | 

### Return type

[**List[Lyric]**](Lyric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | lyric(s) for requested albumID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **music_tracks_get**
> List[AlbumTracks] music_tracks_get(access_token, album_id)

Get all tracks from requested album

### Example


```python
import openapi_client
from openapi_client.models.album_tracks import AlbumTracks
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MusicArtistsBandsTracksAlbumArtCoverArtVideosApi(api_client)
    access_token = 'access_token_example' # str | 
    album_id = 'album_id_example' # str | AlbumID (can be retrieved via album endpoint)

    try:
        # Get all tracks from requested album
        api_response = api_instance.music_tracks_get(access_token, album_id)
        print("The response of MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_tracks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MusicArtistsBandsTracksAlbumArtCoverArtVideosApi->music_tracks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **album_id** | **str**| AlbumID (can be retrieved via album endpoint) | 

### Return type

[**List[AlbumTracks]**](AlbumTracks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists all tracks on album from passed AlbumID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

