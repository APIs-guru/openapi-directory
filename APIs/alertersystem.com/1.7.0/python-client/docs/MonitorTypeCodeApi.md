# openapi_client.MonitorTypeCodeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_monitor_type_code_get_collection**](MonitorTypeCodeApi.md#api_monitor_type_code_get_collection) | **GET** /api/monitor-type-code | Retrieves the collection of MonitorTypeCode resources.
[**api_monitor_type_code_id_get**](MonitorTypeCodeApi.md#api_monitor_type_code_id_get) | **GET** /api/monitor-type-code/{id} | Retrieves a MonitorTypeCode resource.


# **api_monitor_type_code_get_collection**
> List[MonitorTypeCodeGet] api_monitor_type_code_get_collection(page=page, properties=properties)

Retrieves the collection of MonitorTypeCode resources.

Retrieves the collection of MonitorTypeCode resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.monitor_type_code_get import MonitorTypeCodeGet
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
    api_instance = openapi_client.MonitorTypeCodeApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of MonitorTypeCode resources.
        api_response = api_instance.api_monitor_type_code_get_collection(page=page, properties=properties)
        print("The response of MonitorTypeCodeApi->api_monitor_type_code_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorTypeCodeApi->api_monitor_type_code_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[MonitorTypeCodeGet]**](MonitorTypeCodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MonitorTypeCode collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_monitor_type_code_id_get**
> MonitorTypeCodeGet api_monitor_type_code_id_get(id)

Retrieves a MonitorTypeCode resource.

Retrieves a MonitorTypeCode resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.monitor_type_code_get import MonitorTypeCodeGet
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
    api_instance = openapi_client.MonitorTypeCodeApi(api_client)
    id = 'id_example' # str | MonitorTypeCode identifier

    try:
        # Retrieves a MonitorTypeCode resource.
        api_response = api_instance.api_monitor_type_code_id_get(id)
        print("The response of MonitorTypeCodeApi->api_monitor_type_code_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorTypeCodeApi->api_monitor_type_code_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| MonitorTypeCode identifier | 

### Return type

[**MonitorTypeCodeGet**](MonitorTypeCodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MonitorTypeCode resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

