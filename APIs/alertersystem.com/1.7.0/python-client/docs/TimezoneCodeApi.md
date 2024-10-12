# openapi_client.TimezoneCodeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_timezone_code_get_collection**](TimezoneCodeApi.md#api_timezone_code_get_collection) | **GET** /api/timezone-code | Retrieves the collection of TimezoneCode resources.
[**api_timezone_code_id_get**](TimezoneCodeApi.md#api_timezone_code_id_get) | **GET** /api/timezone-code/{id} | Retrieves a TimezoneCode resource.


# **api_timezone_code_get_collection**
> List[TimezoneCodeGet] api_timezone_code_get_collection(page=page, properties=properties)

Retrieves the collection of TimezoneCode resources.

Retrieves the collection of TimezoneCode resources.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.timezone_code_get import TimezoneCodeGet
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
    api_instance = openapi_client.TimezoneCodeApi(api_client)
    page = 1 # int | The collection page number (optional) (default to 1)
    properties = ['properties_example'] # List[str] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)

    try:
        # Retrieves the collection of TimezoneCode resources.
        api_response = api_instance.api_timezone_code_get_collection(page=page, properties=properties)
        print("The response of TimezoneCodeApi->api_timezone_code_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimezoneCodeApi->api_timezone_code_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]
 **properties** | [**List[str]**](str.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 

### Return type

[**List[TimezoneCodeGet]**](TimezoneCodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TimezoneCode collection |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_timezone_code_id_get**
> TimezoneCodeGet api_timezone_code_id_get(id)

Retrieves a TimezoneCode resource.

Retrieves a TimezoneCode resource.

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.timezone_code_get import TimezoneCodeGet
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
    api_instance = openapi_client.TimezoneCodeApi(api_client)
    id = 'id_example' # str | TimezoneCode identifier

    try:
        # Retrieves a TimezoneCode resource.
        api_response = api_instance.api_timezone_code_id_get(id)
        print("The response of TimezoneCodeApi->api_timezone_code_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimezoneCodeApi->api_timezone_code_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| TimezoneCode identifier | 

### Return type

[**TimezoneCodeGet**](TimezoneCodeGet.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TimezoneCode resource |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Resource not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

