# openapi_client.ProtectedItemOperationResultsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protected_item_operation_results_get**](ProtectedItemOperationResultsApi.md#protected_item_operation_results_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/operationResults/{operationId} | 


# **protected_item_operation_results_get**
> ProtectedItemResource protected_item_operation_results_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, operation_id)



Gets the result of any operation on the backup item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protected_item_resource import ProtectedItemResource
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
    api_instance = openapi_client.ProtectedItemOperationResultsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    fabric_name = 'fabric_name_example' # str | The fabric name associated with the backup item.
    container_name = 'container_name_example' # str | The container name associated with the backup item.
    protected_item_name = 'protected_item_name_example' # str | The name of backup item used in this GET operation.
    operation_id = 'operation_id_example' # str | The OperationID used in this GET operation.

    try:
        api_response = api_instance.protected_item_operation_results_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, operation_id)
        print("The response of ProtectedItemOperationResultsApi->protected_item_operation_results_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectedItemOperationResultsApi->protected_item_operation_results_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **fabric_name** | **str**| The fabric name associated with the backup item. | 
 **container_name** | **str**| The container name associated with the backup item. | 
 **protected_item_name** | **str**| The name of backup item used in this GET operation. | 
 **operation_id** | **str**| The OperationID used in this GET operation. | 

### Return type

[**ProtectedItemResource**](ProtectedItemResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

