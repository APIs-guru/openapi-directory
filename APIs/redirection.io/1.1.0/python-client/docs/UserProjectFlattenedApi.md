# openapi_client.UserProjectFlattenedApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user_project_flattened_item**](UserProjectFlattenedApi.md#get_user_project_flattened_item) | **GET** /user-project-flatteneds/{id} | Retrieves a UserProjectFlattened resource.


# **get_user_project_flattened_item**
> UserProjectFlattenedRead get_user_project_flattened_item(id)

Retrieves a UserProjectFlattened resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_project_flattened_read import UserProjectFlattenedRead
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
    api_instance = openapi_client.UserProjectFlattenedApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a UserProjectFlattened resource.
        api_response = api_instance.get_user_project_flattened_item(id)
        print("The response of UserProjectFlattenedApi->get_user_project_flattened_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserProjectFlattenedApi->get_user_project_flattened_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**UserProjectFlattenedRead**](UserProjectFlattenedRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UserProjectFlattened resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

