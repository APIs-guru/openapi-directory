# openapi_client.LyricsApi

All URIs are relative to *https://api.musixmatch.com/ws/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**matcher_lyrics_get_get**](LyricsApi.md#matcher_lyrics_get_get) | **GET** /matcher.lyrics.get | 
[**track_lyrics_get_get**](LyricsApi.md#track_lyrics_get_get) | **GET** /track.lyrics.get | 


# **matcher_lyrics_get_get**
> MatcherLyricsGetGet200Response matcher_lyrics_get_get(format=format, param_callback=param_callback, q_track=q_track, q_artist=q_artist)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.matcher_lyrics_get_get200_response import MatcherLyricsGetGet200Response
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
    api_instance = openapi_client.LyricsApi(api_client)
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)
    q_track = 'q_track_example' # str | The song title (optional)
    q_artist = 'q_artist_example' # str | The song artist (optional)

    try:
        api_response = api_instance.matcher_lyrics_get_get(format=format, param_callback=param_callback, q_track=q_track, q_artist=q_artist)
        print("The response of LyricsApi->matcher_lyrics_get_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LyricsApi->matcher_lyrics_get_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 
 **q_track** | **str**| The song title | [optional] 
 **q_artist** | **str**| The song artist | [optional] 

### Return type

[**MatcherLyricsGetGet200Response**](MatcherLyricsGetGet200Response.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **track_lyrics_get_get**
> MatcherLyricsGetGet200Response track_lyrics_get_get(track_id, format=format, param_callback=param_callback)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.matcher_lyrics_get_get200_response import MatcherLyricsGetGet200Response
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
    api_instance = openapi_client.LyricsApi(api_client)
    track_id = 'track_id_example' # str | The musiXmatch track id
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)

    try:
        api_response = api_instance.track_lyrics_get_get(track_id, format=format, param_callback=param_callback)
        print("The response of LyricsApi->track_lyrics_get_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LyricsApi->track_lyrics_get_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **track_id** | **str**| The musiXmatch track id | 
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 

### Return type

[**MatcherLyricsGetGet200Response**](MatcherLyricsGetGet200Response.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

