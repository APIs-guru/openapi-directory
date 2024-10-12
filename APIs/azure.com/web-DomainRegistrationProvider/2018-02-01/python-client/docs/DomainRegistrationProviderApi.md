# openapi_client.DomainRegistrationProviderApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domain_registration_provider_list_operations**](DomainRegistrationProviderApi.md#domain_registration_provider_list_operations) | **GET** /providers/Microsoft.DomainRegistration/operations | Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider


# **domain_registration_provider_list_operations**
> DomainRegistrationProviderListOperations200Response domain_registration_provider_list_operations(api_version)

Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider

Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_registration_provider_list_operations200_response import DomainRegistrationProviderListOperations200Response
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
    api_instance = openapi_client.DomainRegistrationProviderApi(api_client)
    api_version = 'api_version_example' # str | API Version

    try:
        # Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
        api_response = api_instance.domain_registration_provider_list_operations(api_version)
        print("The response of DomainRegistrationProviderApi->domain_registration_provider_list_operations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainRegistrationProviderApi->domain_registration_provider_list_operations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 

### Return type

[**DomainRegistrationProviderListOperations200Response**](DomainRegistrationProviderListOperations200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

