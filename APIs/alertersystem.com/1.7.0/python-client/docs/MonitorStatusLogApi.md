# openapi_client.MonitorStatusLogApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_monitor_status_log_get_collection**](MonitorStatusLogApi.md#api_monitor_status_log_get_collection) | **GET** /api/monitor-status-log | Retrieves the collection of MonitorStatusLog resources.
[**api_monitor_status_log_id_get**](MonitorStatusLogApi.md#api_monitor_status_log_id_get) | **GET** /api/monitor-status-log/{id} | Retrieves a MonitorStatusLog resource.


# **api_monitor_status_log_get_collection**
> List[MonitorStatusLogGet] api_monitor_status_log_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, monitor=monitor, monitor2=monitor2, monitor_status_code=monitor_status_code, monitor_status_code2=monitor_status_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of MonitorStatusLog resources.

Retrieves the collection of MonitorStatusLog resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.monitor_status_log_get import MonitorStatusLogGet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MonitorStatusLogApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    monitor = 'monitor_example' # str |  (optional)
    monitor2 = ['monitor_example'] # List[str] |  (optional)
    monitor_status_code = 'monitor_status_code_example' # str |  (optional)
    monitor_status_code2 = ['monitor_status_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of MonitorStatusLog resources.
        api_response = api_instance.api_monitor_status_log_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, monitor=monitor, monitor2=monitor2, monitor_status_code=monitor_status_code, monitor_status_code2=monitor_status_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of MonitorStatusLogApi->api_monitor_status_log_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorStatusLogApi->api_monitor_status_log_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **data_segment_code** | **str**|  | [optional] 
 **data_segment_code2** | [**List[str]**](str.md)|  | [optional] 
 **monitor** | **str**|  | [optional] 
 **monitor2** | [**List[str]**](str.md)|  | [optional] 
 **monitor_status_code** | **str**|  | [optional] 
 **monitor_status_code2** | [**List[str]**](str.md)|  | [optional] 
 **partition** | **str**|  | [optional] 
 **partition2** | [**List[str]**](str.md)|  | [optional] 
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[MonitorStatusLogGet]**](MonitorStatusLogGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MonitorStatusLog collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_monitor_status_log_id_get**
> MonitorStatusLogGet api_monitor_status_log_id_get(id)

Retrieves a MonitorStatusLog resource.

Retrieves a MonitorStatusLog resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.monitor_status_log_get import MonitorStatusLogGet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MonitorStatusLogApi(api_client)
    id = 'id_example' # str | MonitorStatusLog identifier

    try:
        # Retrieves a MonitorStatusLog resource.
        api_response = api_instance.api_monitor_status_log_id_get(id)
        print("The response of MonitorStatusLogApi->api_monitor_status_log_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorStatusLogApi->api_monitor_status_log_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| MonitorStatusLog identifier | 

### Return type

[**MonitorStatusLogGet**](MonitorStatusLogGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MonitorStatusLog resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

