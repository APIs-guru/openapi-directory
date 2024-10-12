# openapi_client.ReplicationProtectedItemsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_protected_items_apply_recovery_point**](ReplicationProtectedItemsApi.md#replication_protected_items_apply_recovery_point) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/applyRecoveryPoint | Change or apply recovery point.
[**replication_protected_items_create**](ReplicationProtectedItemsApi.md#replication_protected_items_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName} | Enables protection.
[**replication_protected_items_delete**](ReplicationProtectedItemsApi.md#replication_protected_items_delete) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/remove | Disables protection.
[**replication_protected_items_failover_commit**](ReplicationProtectedItemsApi.md#replication_protected_items_failover_commit) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/failoverCommit | Execute commit failover
[**replication_protected_items_get**](ReplicationProtectedItemsApi.md#replication_protected_items_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName} | Gets the details of a Replication protected item.
[**replication_protected_items_list**](ReplicationProtectedItemsApi.md#replication_protected_items_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectedItems | Gets the list of replication protected items.
[**replication_protected_items_list_by_replication_protection_containers**](ReplicationProtectedItemsApi.md#replication_protected_items_list_by_replication_protection_containers) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems | Gets the list of Replication protected items.
[**replication_protected_items_planned_failover**](ReplicationProtectedItemsApi.md#replication_protected_items_planned_failover) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/plannedFailover | Execute planned failover
[**replication_protected_items_purge**](ReplicationProtectedItemsApi.md#replication_protected_items_purge) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName} | Purges protection.
[**replication_protected_items_repair_replication**](ReplicationProtectedItemsApi.md#replication_protected_items_repair_replication) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/repairReplication | Resynchronize or repair replication.
[**replication_protected_items_reprotect**](ReplicationProtectedItemsApi.md#replication_protected_items_reprotect) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/reProtect | Execute Reverse Replication\\Reprotect
[**replication_protected_items_test_failover**](ReplicationProtectedItemsApi.md#replication_protected_items_test_failover) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/testFailover | Execute test failover
[**replication_protected_items_test_failover_cleanup**](ReplicationProtectedItemsApi.md#replication_protected_items_test_failover_cleanup) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/testFailoverCleanup | Execute test failover cleanup.
[**replication_protected_items_unplanned_failover**](ReplicationProtectedItemsApi.md#replication_protected_items_unplanned_failover) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/unplannedFailover | Execute unplanned failover
[**replication_protected_items_update**](ReplicationProtectedItemsApi.md#replication_protected_items_update) | **PATCH** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName} | Updates protection.
[**replication_protected_items_update_mobility_service**](ReplicationProtectedItemsApi.md#replication_protected_items_update_mobility_service) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicationProtectedItemName}/updateMobilityService | Update the mobility service on a protected item.


# **replication_protected_items_apply_recovery_point**
> ReplicationProtectedItem replication_protected_items_apply_recovery_point(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, apply_recovery_point_input)

Change or apply recovery point.

The operation to change the recovery point of a failed over replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.apply_recovery_point_input import ApplyRecoveryPointInput
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | The ARM fabric name.
    protection_container_name = 'protection_container_name_example' # str | The protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | The replicated protected item's name.
    apply_recovery_point_input = openapi_client.ApplyRecoveryPointInput() # ApplyRecoveryPointInput | The ApplyRecoveryPointInput.

    try:
        # Change or apply recovery point.
        api_response = api_instance.replication_protected_items_apply_recovery_point(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, apply_recovery_point_input)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_apply_recovery_point:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_apply_recovery_point: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| The ARM fabric name. | 
 **protection_container_name** | **str**| The protection container name. | 
 **replicated_protected_item_name** | **str**| The replicated protected item&#39;s name. | 
 **apply_recovery_point_input** | [**ApplyRecoveryPointInput**](ApplyRecoveryPointInput.md)| The ApplyRecoveryPointInput. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_create**
> ReplicationProtectedItem replication_protected_items_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, input)

Enables protection.

The operation to create an ASR replication protected item (Enable replication).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.enable_protection_input import EnableProtectionInput
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Name of the fabric.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | A name for the replication protected item.
    input = openapi_client.EnableProtectionInput() # EnableProtectionInput | Enable Protection Input.

    try:
        # Enables protection.
        api_response = api_instance.replication_protected_items_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, input)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Name of the fabric. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| A name for the replication protected item. | 
 **input** | [**EnableProtectionInput**](EnableProtectionInput.md)| Enable Protection Input. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_delete**
> replication_protected_items_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, disable_protection_input)

Disables protection.

The operation to disable replication on a replication protected item. This will also remove the item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disable_protection_input import DisableProtectionInput
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.
    disable_protection_input = openapi_client.DisableProtectionInput() # DisableProtectionInput | Disable protection input.

    try:
        # Disables protection.
        api_instance.replication_protected_items_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, disable_protection_input)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 
 **disable_protection_input** | [**DisableProtectionInput**](DisableProtectionInput.md)| Disable protection input. | 

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
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_failover_commit**
> ReplicationProtectedItem replication_protected_items_failover_commit(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)

Execute commit failover

Operation to commit the failover of the replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Unique fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.

    try:
        # Execute commit failover
        api_response = api_instance.replication_protected_items_failover_commit(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_failover_commit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_failover_commit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Unique fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_get**
> ReplicationProtectedItem replication_protected_items_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)

Gets the details of a Replication protected item.

Gets the details of an ASR replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric unique name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.

    try:
        # Gets the details of a Replication protected item.
        api_response = api_instance.replication_protected_items_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric unique name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

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

# **replication_protected_items_list**
> ReplicationProtectedItemCollection replication_protected_items_list(api_version, resource_name, resource_group_name, subscription_id, skip_token=skip_token, filter=filter)

Gets the list of replication protected items.

Gets the list of ASR replication protected items in the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item_collection import ReplicationProtectedItemCollection
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    skip_token = 'skip_token_example' # str | The pagination token. Possible values: \"FabricId\" or \"FabricId_CloudId\" or null (optional)
    filter = 'filter_example' # str | OData filter options. (optional)

    try:
        # Gets the list of replication protected items.
        api_response = api_instance.replication_protected_items_list(api_version, resource_name, resource_group_name, subscription_id, skip_token=skip_token, filter=filter)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **skip_token** | **str**| The pagination token. Possible values: \&quot;FabricId\&quot; or \&quot;FabricId_CloudId\&quot; or null | [optional] 
 **filter** | **str**| OData filter options. | [optional] 

### Return type

[**ReplicationProtectedItemCollection**](ReplicationProtectedItemCollection.md)

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

# **replication_protected_items_list_by_replication_protection_containers**
> ReplicationProtectedItemCollection replication_protected_items_list_by_replication_protection_containers(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)

Gets the list of Replication protected items.

Gets the list of ASR replication protected items in the protection container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item_collection import ReplicationProtectedItemCollection
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.

    try:
        # Gets the list of Replication protected items.
        api_response = api_instance.replication_protected_items_list_by_replication_protection_containers(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_list_by_replication_protection_containers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_list_by_replication_protection_containers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 

### Return type

[**ReplicationProtectedItemCollection**](ReplicationProtectedItemCollection.md)

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

# **replication_protected_items_planned_failover**
> ReplicationProtectedItem replication_protected_items_planned_failover(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, failover_input)

Execute planned failover

Operation to initiate a planned failover of the replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.planned_failover_input import PlannedFailoverInput
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Unique fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.
    failover_input = openapi_client.PlannedFailoverInput() # PlannedFailoverInput | Disable protection input.

    try:
        # Execute planned failover
        api_response = api_instance.replication_protected_items_planned_failover(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, failover_input)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_planned_failover:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_planned_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Unique fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 
 **failover_input** | [**PlannedFailoverInput**](PlannedFailoverInput.md)| Disable protection input. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_purge**
> replication_protected_items_purge(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)

Purges protection.

The operation to delete or purge a replication protected item. This operation will force delete the replication protected item. Use the remove operation on replication protected item to perform a clean disable replication for the item.

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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.

    try:
        # Purges protection.
        api_instance.replication_protected_items_purge(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_purge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 

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

# **replication_protected_items_repair_replication**
> ReplicationProtectedItem replication_protected_items_repair_replication(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)

Resynchronize or repair replication.

The operation to start resynchronize/repair replication for a replication protected item requiring resynchronization.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | The name of the fabric.
    protection_container_name = 'protection_container_name_example' # str | The name of the container.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | The name of the replication protected item.

    try:
        # Resynchronize or repair replication.
        api_response = api_instance.replication_protected_items_repair_replication(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_repair_replication:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_repair_replication: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| The name of the fabric. | 
 **protection_container_name** | **str**| The name of the container. | 
 **replicated_protected_item_name** | **str**| The name of the replication protected item. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_reprotect**
> ReplicationProtectedItem replication_protected_items_reprotect(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, rr_input)

Execute Reverse Replication\\Reprotect

Operation to reprotect or reverse replicate a failed over replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
from openapi_client.models.reverse_replication_input import ReverseReplicationInput
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Unique fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.
    rr_input = openapi_client.ReverseReplicationInput() # ReverseReplicationInput | Disable protection input.

    try:
        # Execute Reverse Replication\\Reprotect
        api_response = api_instance.replication_protected_items_reprotect(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, rr_input)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_reprotect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_reprotect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Unique fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 
 **rr_input** | [**ReverseReplicationInput**](ReverseReplicationInput.md)| Disable protection input. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_test_failover**
> ReplicationProtectedItem replication_protected_items_test_failover(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, failover_input)

Execute test failover

Operation to perform a test failover of the replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
from openapi_client.models.test_failover_input import TestFailoverInput
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Unique fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.
    failover_input = openapi_client.TestFailoverInput() # TestFailoverInput | Test failover input.

    try:
        # Execute test failover
        api_response = api_instance.replication_protected_items_test_failover(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, failover_input)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_test_failover:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_test_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Unique fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 
 **failover_input** | [**TestFailoverInput**](TestFailoverInput.md)| Test failover input. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_test_failover_cleanup**
> ReplicationProtectedItem replication_protected_items_test_failover_cleanup(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, cleanup_input)

Execute test failover cleanup.

Operation to clean up the test failover of a replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
from openapi_client.models.test_failover_cleanup_input import TestFailoverCleanupInput
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Unique fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.
    cleanup_input = openapi_client.TestFailoverCleanupInput() # TestFailoverCleanupInput | Test failover cleanup input.

    try:
        # Execute test failover cleanup.
        api_response = api_instance.replication_protected_items_test_failover_cleanup(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, cleanup_input)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_test_failover_cleanup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_test_failover_cleanup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Unique fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 
 **cleanup_input** | [**TestFailoverCleanupInput**](TestFailoverCleanupInput.md)| Test failover cleanup input. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_unplanned_failover**
> ReplicationProtectedItem replication_protected_items_unplanned_failover(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, failover_input)

Execute unplanned failover

Operation to initiate a failover of the replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
from openapi_client.models.unplanned_failover_input import UnplannedFailoverInput
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Unique fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.
    failover_input = openapi_client.UnplannedFailoverInput() # UnplannedFailoverInput | Disable protection input.

    try:
        # Execute unplanned failover
        api_response = api_instance.replication_protected_items_unplanned_failover(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, failover_input)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_unplanned_failover:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_unplanned_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Unique fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 
 **failover_input** | [**UnplannedFailoverInput**](UnplannedFailoverInput.md)| Disable protection input. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_update**
> ReplicationProtectedItem replication_protected_items_update(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, update_protection_input)

Updates protection.

The operation to update the recovery settings of an ASR replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
from openapi_client.models.update_replication_protected_item_input import UpdateReplicationProtectedItemInput
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.
    update_protection_input = openapi_client.UpdateReplicationProtectedItemInput() # UpdateReplicationProtectedItemInput | Update protection input.

    try:
        # Updates protection.
        api_response = api_instance.replication_protected_items_update(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, update_protection_input)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 
 **update_protection_input** | [**UpdateReplicationProtectedItemInput**](UpdateReplicationProtectedItemInput.md)| Update protection input. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protected_items_update_mobility_service**
> ReplicationProtectedItem replication_protected_items_update_mobility_service(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replication_protected_item_name, update_mobility_service_request)

Update the mobility service on a protected item.

The operation to update(push update) the installed mobility service software on a replication protected item to the latest available version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_protected_item import ReplicationProtectedItem
from openapi_client.models.update_mobility_service_request import UpdateMobilityServiceRequest
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
    api_instance = openapi_client.ReplicationProtectedItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | The name of the fabric containing the protected item.
    protection_container_name = 'protection_container_name_example' # str | The name of the container containing the protected item.
    replication_protected_item_name = 'replication_protected_item_name_example' # str | The name of the protected item on which the agent is to be updated.
    update_mobility_service_request = openapi_client.UpdateMobilityServiceRequest() # UpdateMobilityServiceRequest | Request to update the mobility service on the protected item.

    try:
        # Update the mobility service on a protected item.
        api_response = api_instance.replication_protected_items_update_mobility_service(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replication_protected_item_name, update_mobility_service_request)
        print("The response of ReplicationProtectedItemsApi->replication_protected_items_update_mobility_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectedItemsApi->replication_protected_items_update_mobility_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| The name of the fabric containing the protected item. | 
 **protection_container_name** | **str**| The name of the container containing the protected item. | 
 **replication_protected_item_name** | **str**| The name of the protected item on which the agent is to be updated. | 
 **update_mobility_service_request** | [**UpdateMobilityServiceRequest**](UpdateMobilityServiceRequest.md)| Request to update the mobility service on the protected item. | 

### Return type

[**ReplicationProtectedItem**](ReplicationProtectedItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

