# openapi_client.HttpMethodCodeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_http_method_code_get_collection**](HttpMethodCodeApi.md#api_http_method_code_get_collection) | **GET** /api/http-method-code | Retrieves the collection of HttpMethodCode resources.
[**api_http_method_code_id_get**](HttpMethodCodeApi.md#api_http_method_code_id_get) | **GET** /api/http-method-code/{id} | Retrieves a HttpMethodCode resource.


# **api_http_method_code_get_collection**
> List[HttpMethodCodeGet] api_http_method_code_get_collection(page=page, properties=properties)

Retrieves the collection of HttpMethodCode resources.

Retrieves the collection of HttpMethodCode resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.http_method_code_get import HttpMethodCodeGet
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
    api_instance = openapi_client.HttpMethodCodeApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of HttpMethodCode resources.
        api_response = api_instance.api_http_method_code_get_collection(page=page, properties=properties)
        print("The response of HttpMethodCodeApi->api_http_method_code_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HttpMethodCodeApi->api_http_method_code_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[HttpMethodCodeGet]**](HttpMethodCodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HttpMethodCode collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_http_method_code_id_get**
> HttpMethodCodeGet api_http_method_code_id_get(id)

Retrieves a HttpMethodCode resource.

Retrieves a HttpMethodCode resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.http_method_code_get import HttpMethodCodeGet
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
    api_instance = openapi_client.HttpMethodCodeApi(api_client)
    id = 'id_example' # str | HttpMethodCode identifier

    try:
        # Retrieves a HttpMethodCode resource.
        api_response = api_instance.api_http_method_code_id_get(id)
        print("The response of HttpMethodCodeApi->api_http_method_code_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HttpMethodCodeApi->api_http_method_code_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| HttpMethodCode identifier | 

### Return type

[**HttpMethodCodeGet**](HttpMethodCodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HttpMethodCode resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

