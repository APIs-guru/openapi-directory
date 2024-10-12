# openapi_client.SmartListApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_smart_list_collection**](SmartListApi.md#get_smart_list_collection) | **GET** /smart-lists | Retrieves the collection of SmartList resources.
[**get_smart_list_item**](SmartListApi.md#get_smart_list_item) | **GET** /smart-lists/{id} | Retrieves a SmartList resource.


# **get_smart_list_collection**
> List[SmartList] get_smart_list_collection()

Retrieves the collection of SmartList resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.smart_list import SmartList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmartListApi(api_client)

    try:
        # Retrieves the collection of SmartList resources.
        api_response = api_instance.get_smart_list_collection()
        print("The response of SmartListApi->get_smart_list_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartListApi->get_smart_list_collection: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[SmartList]**](SmartList.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SmartList collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_smart_list_item**
> SmartList get_smart_list_item(id)

Retrieves a SmartList resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.smart_list import SmartList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmartListApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a SmartList resource.
        api_response = api_instance.get_smart_list_item(id)
        print("The response of SmartListApi->get_smart_list_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartListApi->get_smart_list_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**SmartList**](SmartList.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SmartList resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

