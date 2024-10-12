# openapi_client.ScrobbleApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pause_watching_in_a_media_center**](ScrobbleApi.md#pause_watching_in_a_media_center) | **POST** /scrobble/pause | Pause watching in a media center
[**start_watching_in_a_media_center**](ScrobbleApi.md#start_watching_in_a_media_center) | **POST** /scrobble/start | Start watching in a media center
[**stop_or_finish_watching_in_a_media_center**](ScrobbleApi.md#stop_or_finish_watching_in_a_media_center) | **POST** /scrobble/stop | Stop or finish watching in a media center


# **pause_watching_in_a_media_center**
> pause_watching_in_a_media_center(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, pause_watching_in_a_media_center_request=pause_watching_in_a_media_center_request)

Pause watching in a media center

#### &#128274; OAuth Required  Use this method when the video is paused. The playback progress will be saved and [**/sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position. Unpause a video by calling the [**/scrobble/start**](/reference/scrobble/start/) method again.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie` or `episode` object. (see examples &#8594;) | | `progress` <span style=\"color:red;\">*</a> | float | Progress percentage between 0 and 100. | | `app_version` | string | Version number of the app. | | `app_date` | string | Build date of the app. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.pause_watching_in_a_media_center_request import PauseWatchingInAMediaCenterRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScrobbleApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    pause_watching_in_a_media_center_request = openapi_client.PauseWatchingInAMediaCenterRequest() # PauseWatchingInAMediaCenterRequest |  (optional)

    try:
        # Pause watching in a media center
        api_instance.pause_watching_in_a_media_center(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, pause_watching_in_a_media_center_request=pause_watching_in_a_media_center_request)
    except Exception as e:
        print("Exception when calling ScrobbleApi->pause_watching_in_a_media_center: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **pause_watching_in_a_media_center_request** | [**PauseWatchingInAMediaCenterRequest**](PauseWatchingInAMediaCenterRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_watching_in_a_media_center**
> start_watching_in_a_media_center(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, start_watching_in_a_media_center_request=start_watching_in_a_media_center_request)

Start watching in a media center

#### &#128274; OAuth Required  Use this method when the video initially starts playing or is unpaused. This will remove any playback progress if it exists.  **Note:** A watching status will auto expire after the remaining runtime has elapsed. There is no need to call this method again while continuing to watch the same item.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie` or `episode` object. (see examples &#8594;) | | `progress` <span style=\"color:red;\">*</a> | float | Progress percentage between 0 and 100. | | `app_version` | string | Version number of the app. | | `app_date` | string | Build date of the app. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.start_watching_in_a_media_center_request import StartWatchingInAMediaCenterRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScrobbleApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    start_watching_in_a_media_center_request = openapi_client.StartWatchingInAMediaCenterRequest() # StartWatchingInAMediaCenterRequest |  (optional)

    try:
        # Start watching in a media center
        api_instance.start_watching_in_a_media_center(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, start_watching_in_a_media_center_request=start_watching_in_a_media_center_request)
    except Exception as e:
        print("Exception when calling ScrobbleApi->start_watching_in_a_media_center: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **start_watching_in_a_media_center_request** | [**StartWatchingInAMediaCenterRequest**](StartWatchingInAMediaCenterRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_or_finish_watching_in_a_media_center**
> stop_or_finish_watching_in_a_media_center(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, stop_or_finish_watching_in_a_media_center_request=stop_or_finish_watching_in_a_media_center_request)

Stop or finish watching in a media center

#### &#128274; OAuth Required  Use this method when the video is stopped or finishes playing on its own. If the progress is above 80%, the video will be scrobbled and the `action` will be set to **scrobble**. A unique history `id` (64-bit integer) will be returned and can be used to reference this `scrobble` directly.  If the progress is less than 80%, it will be treated as a *pause* and the `action` will be set to **pause**. The playback progress will be saved and [**/sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position.  **Note:** If you prefer to use a threshold higher than 80%, you should use [**/scrobble/pause**](/reference/scrobble/pause/) yourself so it doesn't create duplicate scrobbles.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | item <span style=\"color:red;\">*</a> | object | `movie` or `episode` object. (see examples &#8594;) | | `progress` <span style=\"color:red;\">*</a> | flloat | Progress percentage between 0 and 100. | | `app_version` | string | Version number of the app. | | `app_date` | string | Build date of the app. |  **Note:** If the same item was just scrobbled, a `409` HTTP status code will returned to avoid scrobbling a duplicate. The response will contain a `watched_at` timestamp when the item was last scrobbled and a `expires_at` timestamp when the item can be scrobbled again.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.stop_or_finish_watching_in_a_media_center_request import StopOrFinishWatchingInAMediaCenterRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScrobbleApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    stop_or_finish_watching_in_a_media_center_request = openapi_client.StopOrFinishWatchingInAMediaCenterRequest() # StopOrFinishWatchingInAMediaCenterRequest |  (optional)

    try:
        # Stop or finish watching in a media center
        api_instance.stop_or_finish_watching_in_a_media_center(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, stop_or_finish_watching_in_a_media_center_request=stop_or_finish_watching_in_a_media_center_request)
    except Exception as e:
        print("Exception when calling ScrobbleApi->stop_or_finish_watching_in_a_media_center: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **stop_or_finish_watching_in_a_media_center_request** | [**StopOrFinishWatchingInAMediaCenterRequest**](StopOrFinishWatchingInAMediaCenterRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**409** | The same item was recently scrobbled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

