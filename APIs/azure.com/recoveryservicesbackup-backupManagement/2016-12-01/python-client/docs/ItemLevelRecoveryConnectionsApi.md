# openapi_client.ItemLevelRecoveryConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**item_level_recovery_connections_provision**](ItemLevelRecoveryConnectionsApi.md#item_level_recovery_connections_provision) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}/provisionInstantItemRecovery | 
[**item_level_recovery_connections_revoke**](ItemLevelRecoveryConnectionsApi.md#item_level_recovery_connections_revoke) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}/revokeInstantItemRecovery | 


# **item_level_recovery_connections_provision**
> item_level_recovery_connections_provision(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, recovery_point_id, parameters)



Provisions a script which invokes an iSCSI connection to the backup data. Executing this script opens a file explorer displaying all the recoverable files and folders. This is an asynchronous operation. To know the status of provisioning, call GetProtectedItemOperationResult API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ilr_request_resource import ILRRequestResource
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
    api_instance = openapi_client.ItemLevelRecoveryConnectionsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the backed up items.
    container_name = 'container_name_example' # str | Container name associated with the backed up items.
    protected_item_name = 'protected_item_name_example' # str | Backed up item name whose files/folders are to be restored.
    recovery_point_id = 'recovery_point_id_example' # str | Recovery point ID which represents backed up data. iSCSI connection will be provisioned for this backed up data.
    parameters = openapi_client.ILRRequestResource() # ILRRequestResource | resource ILR request

    try:
        api_instance.item_level_recovery_connections_provision(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, recovery_point_id, parameters)
    except Exception as e:
        print("Exception when calling ItemLevelRecoveryConnectionsApi->item_level_recovery_connections_provision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the backed up items. | 
 **container_name** | **str**| Container name associated with the backed up items. | 
 **protected_item_name** | **str**| Backed up item name whose files/folders are to be restored. | 
 **recovery_point_id** | **str**| Recovery point ID which represents backed up data. iSCSI connection will be provisioned for this backed up data. | 
 **parameters** | [**ILRRequestResource**](ILRRequestResource.md)| resource ILR request | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **item_level_recovery_connections_revoke**
> item_level_recovery_connections_revoke(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, recovery_point_id)



Revokes an iSCSI connection which can be used to download a script. Executing this script opens a file explorer displaying all recoverable files and folders. This is an asynchronous operation.

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
    api_instance = openapi_client.ItemLevelRecoveryConnectionsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the backed up items.
    container_name = 'container_name_example' # str | Container name associated with the backed up items.
    protected_item_name = 'protected_item_name_example' # str | Backed up item name whose files/folders are to be restored.
    recovery_point_id = 'recovery_point_id_example' # str | Recovery point ID which represents backed up data. iSCSI connection will be revoked for this backed up data.

    try:
        api_instance.item_level_recovery_connections_revoke(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, recovery_point_id)
    except Exception as e:
        print("Exception when calling ItemLevelRecoveryConnectionsApi->item_level_recovery_connections_revoke: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the backed up items. | 
 **container_name** | **str**| Container name associated with the backed up items. | 
 **protected_item_name** | **str**| Backed up item name whose files/folders are to be restored. | 
 **recovery_point_id** | **str**| Recovery point ID which represents backed up data. iSCSI connection will be revoked for this backed up data. | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

