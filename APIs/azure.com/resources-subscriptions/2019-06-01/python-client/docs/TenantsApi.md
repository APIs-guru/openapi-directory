# openapi_client.TenantsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenants_list**](TenantsApi.md#tenants_list) | **GET** /tenants | 


# **tenants_list**
> TenantListResult tenants_list(api_version)



Gets the tenants for your account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tenant_list_result import TenantListResult
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
    api_instance = openapi_client.TenantsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        api_response = api_instance.tenants_list(api_version)
        print("The response of TenantsApi->tenants_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->tenants_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**TenantListResult**](TenantListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of tenants. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

