# openapi_client.SubtitleApi

All URIs are relative to *https://api.musixmatch.com/ws/1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**matcher_subtitle_get_get**](SubtitleApi.md#matcher_subtitle_get_get) | **GET** /matcher.subtitle.get | 
[**track_subtitle_get_get**](SubtitleApi.md#track_subtitle_get_get) | **GET** /track.subtitle.get | 


# **matcher_subtitle_get_get**
> MatcherSubtitleGetGet200Response matcher_subtitle_get_get(format=format, param_callback=param_callback, q_track=q_track, q_artist=q_artist, f_subtitle_length=f_subtitle_length, f_subtitle_length_max_deviation=f_subtitle_length_max_deviation)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.matcher_subtitle_get_get200_response import MatcherSubtitleGetGet200Response
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
    api_instance = openapi_client.SubtitleApi(api_client)
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)
    q_track = 'q_track_example' # str | The song title (optional)
    q_artist = 'q_artist_example' # str |  The song artist (optional)
    f_subtitle_length = 3.4 # float | Filter by subtitle length in seconds (optional)
    f_subtitle_length_max_deviation = 3.4 # float | Max deviation for a subtitle length in seconds (optional)

    try:
        api_response = api_instance.matcher_subtitle_get_get(format=format, param_callback=param_callback, q_track=q_track, q_artist=q_artist, f_subtitle_length=f_subtitle_length, f_subtitle_length_max_deviation=f_subtitle_length_max_deviation)
        print("The response of SubtitleApi->matcher_subtitle_get_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubtitleApi->matcher_subtitle_get_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 
 **q_track** | **str**| The song title | [optional] 
 **q_artist** | **str**|  The song artist | [optional] 
 **f_subtitle_length** | **float**| Filter by subtitle length in seconds | [optional] 
 **f_subtitle_length_max_deviation** | **float**| Max deviation for a subtitle length in seconds | [optional] 

### Return type

[**MatcherSubtitleGetGet200Response**](MatcherSubtitleGetGet200Response.md)

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

# **track_subtitle_get_get**
> MatcherSubtitleGetGet200Response track_subtitle_get_get(track_id, format=format, param_callback=param_callback)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.models.matcher_subtitle_get_get200_response import MatcherSubtitleGetGet200Response
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
    api_instance = openapi_client.SubtitleApi(api_client)
    track_id = 'track_id_example' # str | The musiXmatch track id
    format = 'json' # str | output format: json, jsonp, xml. (optional) (default to 'json')
    param_callback = 'param_callback_example' # str | jsonp callback (optional)

    try:
        api_response = api_instance.track_subtitle_get_get(track_id, format=format, param_callback=param_callback)
        print("The response of SubtitleApi->track_subtitle_get_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubtitleApi->track_subtitle_get_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **track_id** | **str**| The musiXmatch track id | 
 **format** | **str**| output format: json, jsonp, xml. | [optional] [default to &#39;json&#39;]
 **param_callback** | **str**| jsonp callback | [optional] 

### Return type

[**MatcherSubtitleGetGet200Response**](MatcherSubtitleGetGet200Response.md)

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

