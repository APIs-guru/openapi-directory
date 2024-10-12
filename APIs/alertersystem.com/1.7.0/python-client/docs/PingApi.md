# openapi_client.PingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_ping_get_collection**](PingApi.md#api_ping_get_collection) | **GET** /api/ping | Retrieves the collection of Ping resources.
[**api_ping_id_get**](PingApi.md#api_ping_id_get) | **GET** /api/ping/{id} | Retrieves a Ping resource.
[**api_ping_post**](PingApi.md#api_ping_post) | **POST** /api/ping | Creates a Ping resource.


# **api_ping_get_collection**
> List[PingGet] api_ping_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, monitor=monitor, monitor2=monitor2, partition=partition, partition2=partition2, properties=properties)

Retrieves the collection of Ping resources.

Retrieves the collection of Ping resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.ping_get import PingGet
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
    api_instance = openapi_client.PingApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    data_segment_code = 'data_segment_code_example' # str |  (optional)
    data_segment_code2 = ['data_segment_code_example'] # List[str] |  (optional)
    monitor = 'monitor_example' # str |  (optional)
    monitor2 = ['monitor_example'] # List[str] |  (optional)
    partition = 'partition_example' # str |  (optional)
    partition2 = ['partition_example'] # List[str] |  (optional)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of Ping resources.
        api_response = api_instance.api_ping_get_collection(page=page, data_segment_code=data_segment_code, data_segment_code2=data_segment_code2, monitor=monitor, monitor2=monitor2, partition=partition, partition2=partition2, properties=properties)
        print("The response of PingApi->api_ping_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PingApi->api_ping_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **data_segment_code** | **str**|  | [optional] 
 **data_segment_code2** | [**List[str]**](str.md)|  | [optional] 
 **monitor** | **str**|  | [optional] 
 **monitor2** | [**List[str]**](str.md)|  | [optional] 
 **partition** | **str**|  | [optional] 
 **partition2** | [**List[str]**](str.md)|  | [optional] 
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[PingGet]**](PingGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ping collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_ping_id_get**
> PingGet api_ping_id_get(id)

Retrieves a Ping resource.

Retrieves a Ping resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.ping_get import PingGet
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
    api_instance = openapi_client.PingApi(api_client)
    id = 'id_example' # str | Ping identifier

    try:
        # Retrieves a Ping resource.
        api_response = api_instance.api_ping_id_get(id)
        print("The response of PingApi->api_ping_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PingApi->api_ping_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Ping identifier | 

### Return type

[**PingGet**](PingGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ping resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_ping_post**
> PingGet api_ping_post(ping_post)

Creates a Ping resource.

Creates a Ping resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.ping_get import PingGet
from openapi_client.models.ping_post import PingPost
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
    api_instance = openapi_client.PingApi(api_client)
    ping_post = openapi_client.PingPost() # PingPost | The new Ping resource

    try:
        # Creates a Ping resource.
        api_response = api_instance.api_ping_post(ping_post)
        print("The response of PingApi->api_ping_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PingApi->api_ping_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ping_post** | [**PingPost**](PingPost.md)| The new Ping resource | 

### Return type

[**PingGet**](PingGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Ping resource created |  -  |
**400** | Invalid input |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable entity |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

