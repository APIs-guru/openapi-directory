# openapi_client.IdentityProvidersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identity_provider_update**](IdentityProvidersApi.md#identity_provider_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName} | 


# **identity_provider_update**
> identity_provider_update(resource_group_name, service_name, identity_provider_name, if_match, api_version, subscription_id, parameters)



Updates an existing IdentityProvider configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.identity_provider_update_parameters import IdentityProviderUpdateParameters
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
    api_instance = openapi_client.IdentityProvidersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    identity_provider_name = 'identity_provider_name_example' # str | Identity Provider Type identifier.
    if_match = 'if_match_example' # str | ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.IdentityProviderUpdateParameters() # IdentityProviderUpdateParameters | Update parameters.

    try:
        api_instance.identity_provider_update(resource_group_name, service_name, identity_provider_name, if_match, api_version, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling IdentityProvidersApi->identity_provider_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **identity_provider_name** | **str**| Identity Provider Type identifier. | 
 **if_match** | **str**| ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**IdentityProviderUpdateParameters**](IdentityProviderUpdateParameters.md)| Update parameters. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The existing identity provider configuration was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

