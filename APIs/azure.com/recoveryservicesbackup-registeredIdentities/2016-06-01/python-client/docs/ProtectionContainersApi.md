# openapi_client.ProtectionContainersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protection_containers_unregister**](ProtectionContainersApi.md#protection_containers_unregister) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/registeredIdentities/{identityName} | 


# **protection_containers_unregister**
> protection_containers_unregister(subscription_id, resource_group_name, vault_name, api_version, identity_name)



Unregisters the given container from your Recovery Services vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.ProtectionContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    api_version = 'api_version_example' # str | Client API version.
    identity_name = 'identity_name_example' # str | Name of the protection container to unregister.

    try:
        api_instance.protection_containers_unregister(subscription_id, resource_group_name, vault_name, api_version, identity_name)
    except Exception as e:
        print("Exception when calling ProtectionContainersApi->protection_containers_unregister: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **api_version** | **str**| Client API version. | 
 **identity_name** | **str**| Name of the protection container to unregister. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

