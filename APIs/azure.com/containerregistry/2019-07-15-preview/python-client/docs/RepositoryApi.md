# openapi_client.RepositoryApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_repositories**](RepositoryApi.md#get_repositories) | **GET** /v2/_catalog | 


# **get_repositories**
> Repositories get_repositories(last=last, n=n)



List repositories

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.repositories import Repositories
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: registry_oauth2
configuration.api_key['registry_oauth2'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['registry_oauth2'] = 'Bearer'

# Configure HTTP basic authorization: registry_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepositoryApi(api_client)
    last = 'last_example' # str | Query parameter for the last item in previous query. Result set will include values lexically after last. (optional)
    n = 56 # int | query parameter for max number of items (optional)

    try:
        api_response = api_instance.get_repositories(last=last, n=n)
        print("The response of RepositoryApi->get_repositories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepositoryApi->get_repositories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **last** | **str**| Query parameter for the last item in previous query. Result set will include values lexically after last. | [optional] 
 **n** | **int**| query parameter for max number of items | [optional] 

### Return type

[**Repositories**](Repositories.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of repositories |  * Link - next paginated result <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

