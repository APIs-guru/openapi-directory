# openapi_client.EntitiesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entities_list**](EntitiesApi.md#entities_list) | **POST** /providers/Microsoft.Management/getEntities | 


# **entities_list**
> EntityListResult entities_list(api_version, skiptoken=skiptoken, group_name=group_name, cache_control=cache_control)



List all entities (Management Groups, Subscriptions, etc.) for the authenticated user. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.entity_list_result import EntityListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntitiesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-01-01-preview.
    skiptoken = 'skiptoken_example' # str | Page continuation token is only used if a previous operation returned a partial result.  If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.  (optional)
    group_name = 'group_name_example' # str | A filter which allows the call to be filtered for a specific group. (optional)
    cache_control = 'no-cache' # str | Indicates that the request shouldn't utilize any caches. (optional) (default to 'no-cache')

    try:
        api_response = api_instance.entities_list(api_version, skiptoken=skiptoken, group_name=group_name, cache_control=cache_control)
        print("The response of EntitiesApi->entities_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntitiesApi->entities_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-01-01-preview. | 
 **skiptoken** | **str**| Page continuation token is only used if a previous operation returned a partial result.  If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.  | [optional] 
 **group_name** | **str**| A filter which allows the call to be filtered for a specific group. | [optional] 
 **cache_control** | **str**| Indicates that the request shouldn&#39;t utilize any caches. | [optional] [default to &#39;no-cache&#39;]

### Return type

[**EntityListResult**](EntityListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

