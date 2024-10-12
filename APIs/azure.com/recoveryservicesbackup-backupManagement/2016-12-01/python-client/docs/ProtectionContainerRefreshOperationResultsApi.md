# openapi_client.ProtectionContainerRefreshOperationResultsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protection_container_refresh_operation_results_get**](ProtectionContainerRefreshOperationResultsApi.md#protection_container_refresh_operation_results_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/operationResults/{operationId} | 


# **protection_container_refresh_operation_results_get**
> protection_container_refresh_operation_results_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, operation_id)



Provides the result of the refresh operation triggered by the BeginRefresh operation.

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
    api_instance = openapi_client.ProtectionContainerRefreshOperationResultsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the container.
    operation_id = 'operation_id_example' # str | Operation ID associated with the operation whose result needs to be fetched.

    try:
        api_instance.protection_container_refresh_operation_results_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, operation_id)
    except Exception as e:
        print("Exception when calling ProtectionContainerRefreshOperationResultsApi->protection_container_refresh_operation_results_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the container. | 
 **operation_id** | **str**| Operation ID associated with the operation whose result needs to be fetched. | 

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
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

