# openapi_client.ImpactSmartListApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_impact_smart_list_item**](ImpactSmartListApi.md#get_impact_smart_list_item) | **GET** /impact-smart-lists/{id} | Retrieves a ImpactSmartList resource.
[**post_impact_smart_list_collection**](ImpactSmartListApi.md#post_impact_smart_list_collection) | **POST** /impact-smart-lists | Creates a ImpactSmartList resource.


# **get_impact_smart_list_item**
> ImpactSmartListRead get_impact_smart_list_item(id)

Retrieves a ImpactSmartList resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.impact_smart_list_read import ImpactSmartListRead
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
    api_instance = openapi_client.ImpactSmartListApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a ImpactSmartList resource.
        api_response = api_instance.get_impact_smart_list_item(id)
        print("The response of ImpactSmartListApi->get_impact_smart_list_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImpactSmartListApi->get_impact_smart_list_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ImpactSmartListRead**](ImpactSmartListRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ImpactSmartList resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_impact_smart_list_collection**
> ImpactSmartListRead post_impact_smart_list_collection(impact_smart_list=impact_smart_list)

Creates a ImpactSmartList resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.impact_smart_list_read import ImpactSmartListRead
from openapi_client.models.impact_smart_list_write import ImpactSmartListWrite
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
    api_instance = openapi_client.ImpactSmartListApi(api_client)
    impact_smart_list = openapi_client.ImpactSmartListWrite() # ImpactSmartListWrite | The new ImpactSmartList resource (optional)

    try:
        # Creates a ImpactSmartList resource.
        api_response = api_instance.post_impact_smart_list_collection(impact_smart_list=impact_smart_list)
        print("The response of ImpactSmartListApi->post_impact_smart_list_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImpactSmartListApi->post_impact_smart_list_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impact_smart_list** | [**ImpactSmartListWrite**](ImpactSmartListWrite.md)| The new ImpactSmartList resource | [optional] 

### Return type

[**ImpactSmartListRead**](ImpactSmartListRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ImpactSmartList resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

