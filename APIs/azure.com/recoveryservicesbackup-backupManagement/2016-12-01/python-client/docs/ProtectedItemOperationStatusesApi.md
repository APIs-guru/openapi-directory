# openapi_client.ProtectedItemOperationStatusesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protected_item_operation_statuses_get**](ProtectedItemOperationStatusesApi.md#protected_item_operation_statuses_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/operationsStatus/{operationId} | 


# **protected_item_operation_statuses_get**
> OperationStatus protected_item_operation_statuses_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, operation_id)



Fetches the status of an operation such as triggering a backup, restore. The status can be in progress, completed or failed. You can refer to the OperationStatus enum for all the possible states of the operation. Some operations create jobs. This method returns the list of jobs associated with the operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
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
    api_instance = openapi_client.ProtectedItemOperationStatusesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the backup item.
    container_name = 'container_name_example' # str | Container name associated with the backup item.
    protected_item_name = 'protected_item_name_example' # str | Backup item name whose details are to be fetched.
    operation_id = 'operation_id_example' # str | OperationID represents the operation whose status needs to be fetched.

    try:
        api_response = api_instance.protected_item_operation_statuses_get(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, operation_id)
        print("The response of ProtectedItemOperationStatusesApi->protected_item_operation_statuses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectedItemOperationStatusesApi->protected_item_operation_statuses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the backup item. | 
 **container_name** | **str**| Container name associated with the backup item. | 
 **protected_item_name** | **str**| Backup item name whose details are to be fetched. | 
 **operation_id** | **str**| OperationID represents the operation whose status needs to be fetched. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

