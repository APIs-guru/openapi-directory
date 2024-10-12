# openapi_client.QueuesApi

All URIs are relative to *https://cloudextension-testservice.local/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**play_media_on_queue**](QueuesApi.md#play_media_on_queue) | **POST** /queues/playMedia | playMedia
[**update_activity_on_queue**](QueuesApi.md#update_activity_on_queue) | **POST** /queues/updateActivity | updateActivity


# **play_media_on_queue**
> Queue play_media_on_queue(x_applecloudextension_session_id, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, play_media_request=play_media_request)

playMedia

### Example


```python
import openapi_client
from openapi_client.models.play_media_request import PlayMediaRequest
from openapi_client.models.queue import Queue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudextension-testservice.local/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudextension-testservice.local/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)
    x_applecloudextension_session_id = 'x_applecloudextension_session_id_example' # str | 
    user_agent = 'user_agent_example' # str | 
    accept_language = 'accept_language_example' # str | 
    x_applecloudextension_retry_count = 3.4 # float |  (optional)
    play_media_request = openapi_client.PlayMediaRequest() # PlayMediaRequest |  (optional)

    try:
        # playMedia
        api_response = api_instance.play_media_on_queue(x_applecloudextension_session_id, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, play_media_request=play_media_request)
        print("The response of QueuesApi->play_media_on_queue:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->play_media_on_queue: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_applecloudextension_session_id** | **str**|  | 
 **user_agent** | **str**|  | 
 **accept_language** | **str**|  | 
 **x_applecloudextension_retry_count** | **float**|  | [optional] 
 **play_media_request** | [**PlayMediaRequest**](PlayMediaRequest.md)|  | [optional] 

### Return type

[**Queue**](Queue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** |  |  -  |
**401** |  |  -  |
**410** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_activity_on_queue**
> UpdateActivityResponse update_activity_on_queue(x_applecloudextension_session_id, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, update_activity_request=update_activity_request)

updateActivity

### Example


```python
import openapi_client
from openapi_client.models.update_activity_request import UpdateActivityRequest
from openapi_client.models.update_activity_response import UpdateActivityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudextension-testservice.local/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudextension-testservice.local/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueuesApi(api_client)
    x_applecloudextension_session_id = 'x_applecloudextension_session_id_example' # str | 
    user_agent = 'user_agent_example' # str | 
    accept_language = 'accept_language_example' # str | 
    x_applecloudextension_retry_count = 3.4 # float |  (optional)
    update_activity_request = openapi_client.UpdateActivityRequest() # UpdateActivityRequest |  (optional)

    try:
        # updateActivity
        api_response = api_instance.update_activity_on_queue(x_applecloudextension_session_id, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, update_activity_request=update_activity_request)
        print("The response of QueuesApi->update_activity_on_queue:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->update_activity_on_queue: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_applecloudextension_session_id** | **str**|  | 
 **user_agent** | **str**|  | 
 **accept_language** | **str**|  | 
 **x_applecloudextension_retry_count** | **float**|  | [optional] 
 **update_activity_request** | [**UpdateActivityRequest**](UpdateActivityRequest.md)|  | [optional] 

### Return type

[**UpdateActivityResponse**](UpdateActivityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |
**410** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

