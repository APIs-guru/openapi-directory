# openapi_client.BackgroundTasksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_background_task_api_v1_background_task_task_id_get**](BackgroundTasksApi.md#get_background_task_api_v1_background_task_task_id_get) | **GET** /api/v1/background-task/{task_id}/ | Get Background Task
[**list_background_tasks_api_v1_background_task_get**](BackgroundTasksApi.md#list_background_tasks_api_v1_background_task_get) | **GET** /api/v1/background-task/ | List Background Tasks


# **get_background_task_api_v1_background_task_task_id_get**
> BackgroundTaskOut get_background_task_api_v1_background_task_task_id_get(task_id, idempotency_key=idempotency_key)

Get Background Task

Get a background task by ID.

### Example


```python
import openapi_client
from openapi_client.models.background_task_out import BackgroundTaskOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackgroundTasksApi(api_client)
    task_id = 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Background Task
        api_response = api_instance.get_background_task_api_v1_background_task_task_id_get(task_id, idempotency_key=idempotency_key)
        print("The response of BackgroundTasksApi->get_background_task_api_v1_background_task_task_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackgroundTasksApi->get_background_task_api_v1_background_task_task_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**BackgroundTaskOut**](BackgroundTaskOut.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_background_tasks_api_v1_background_task_get**
> ListResponseBackgroundTaskOut list_background_tasks_api_v1_background_task_get(iterator=iterator, limit=limit, order=order, idempotency_key=idempotency_key)

List Background Tasks

List background tasks executed in the past 90 days.

### Example


```python
import openapi_client
from openapi_client.models.list_response_background_task_out import ListResponseBackgroundTaskOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackgroundTasksApi(api_client)
    iterator = 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    order = openapi_client.Ordering() # Ordering |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Background Tasks
        api_response = api_instance.list_background_tasks_api_v1_background_task_get(iterator=iterator, limit=limit, order=order, idempotency_key=idempotency_key)
        print("The response of BackgroundTasksApi->list_background_tasks_api_v1_background_task_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackgroundTasksApi->list_background_tasks_api_v1_background_task_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **order** | [**Ordering**](.md)|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseBackgroundTaskOut**](ListResponseBackgroundTaskOut.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

