# openapi_client.AlertLogApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_alert_log_get_collection**](AlertLogApi.md#api_alert_log_get_collection) | **GET** /api/alert-log | Retrieves the collection of AlertLog resources.
[**api_alert_log_id_get**](AlertLogApi.md#api_alert_log_id_get) | **GET** /api/alert-log/{id} | Retrieves a AlertLog resource.


# **api_alert_log_get_collection**
> List[AlertLogGet] api_alert_log_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, monitor=monitor, monitor2=monitor2, alert_service=alert_service, alert_service2=alert_service2, alert_log_status_code=alert_log_status_code, alert_log_status_code2=alert_log_status_code2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of AlertLog resources.

Retrieves the collection of AlertLog resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.alert_log_get import AlertLogGet
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
    api_instance = openapi_client.AlertLogApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    monitor = 'monitor_example' # str |  (optional)
    monitor2 = ['monitor_example'] # List[str] |  (optional)
    alert_service = 'alert_service_example' # str |  (optional)
    alert_service2 = ['alert_service_example'] # List[str] |  (optional)
    alert_log_status_code = 'alert_log_status_code_example' # str |  (optional)
    alert_log_status_code2 = ['alert_log_status_code_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of AlertLog resources.
        api_response = api_instance.api_alert_log_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, monitor=monitor, monitor2=monitor2, alert_service=alert_service, alert_service2=alert_service2, alert_log_status_code=alert_log_status_code, alert_log_status_code2=alert_log_status_code2, partition=partition, partition2=partition2, properties=properties)
        print("The response of AlertLogApi->api_alert_log_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertLogApi->api_alert_log_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **data_segment_code** | **str**|  | [optional] 
 **data_segment_code2** | [**List[str]**](str.md)|  | [optional] 
 **monitor** | **str**|  | [optional] 
 **monitor2** | [**List[str]**](str.md)|  | [optional] 
 **alert_service** | **str**|  | [optional] 
 **alert_service2** | [**List[str]**](str.md)|  | [optional] 
 **alert_log_status_code** | **str**|  | [optional] 
 **alert_log_status_code2** | [**List[str]**](str.md)|  | [optional] 
 **partition** | **str**|  | [optional] 
 **partition2** | [**List[str]**](str.md)|  | [optional] 
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[AlertLogGet]**](AlertLogGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AlertLog collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_alert_log_id_get**
> AlertLogGet api_alert_log_id_get(id)

Retrieves a AlertLog resource.

Retrieves a AlertLog resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.alert_log_get import AlertLogGet
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
    api_instance = openapi_client.AlertLogApi(api_client)
    id = 'id_example' # str | AlertLog identifier

    try:
        # Retrieves a AlertLog resource.
        api_response = api_instance.api_alert_log_id_get(id)
        print("The response of AlertLogApi->api_alert_log_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertLogApi->api_alert_log_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| AlertLog identifier | 

### Return type

[**AlertLogGet**](AlertLogGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AlertLog resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

