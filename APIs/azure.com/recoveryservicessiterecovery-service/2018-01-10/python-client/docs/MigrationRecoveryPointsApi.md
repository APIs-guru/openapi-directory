# openapi_client.MigrationRecoveryPointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**migration_recovery_points_get**](MigrationRecoveryPointsApi.md#migration_recovery_points_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/migrationRecoveryPoints/{migrationRecoveryPointName} | Gets a recovery point for a migration item.
[**migration_recovery_points_list_by_replication_migration_items**](MigrationRecoveryPointsApi.md#migration_recovery_points_list_by_replication_migration_items) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/migrationRecoveryPoints | Gets the recovery points for a migration item.


# **migration_recovery_points_get**
> MigrationRecoveryPoint migration_recovery_points_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, migration_recovery_point_name)

Gets a recovery point for a migration item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_recovery_point import MigrationRecoveryPoint
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
    api_instance = openapi_client.MigrationRecoveryPointsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric unique name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    migration_item_name = 'migration_item_name_example' # str | Migration item name.
    migration_recovery_point_name = 'migration_recovery_point_name_example' # str | The migration recovery point name.

    try:
        # Gets a recovery point for a migration item.
        api_response = api_instance.migration_recovery_points_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, migration_recovery_point_name)
        print("The response of MigrationRecoveryPointsApi->migration_recovery_points_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MigrationRecoveryPointsApi->migration_recovery_points_get: %s\n" % e)
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
 **migration_item_name** | **str**| Migration item name. | 
 **migration_recovery_point_name** | **str**| The migration recovery point name. | 

### Return type

[**MigrationRecoveryPoint**](MigrationRecoveryPoint.md)

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

# **migration_recovery_points_list_by_replication_migration_items**
> MigrationRecoveryPointCollection migration_recovery_points_list_by_replication_migration_items(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name)

Gets the recovery points for a migration item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_recovery_point_collection import MigrationRecoveryPointCollection
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
    api_instance = openapi_client.MigrationRecoveryPointsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric unique name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    migration_item_name = 'migration_item_name_example' # str | Migration item name.

    try:
        # Gets the recovery points for a migration item.
        api_response = api_instance.migration_recovery_points_list_by_replication_migration_items(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name)
        print("The response of MigrationRecoveryPointsApi->migration_recovery_points_list_by_replication_migration_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MigrationRecoveryPointsApi->migration_recovery_points_list_by_replication_migration_items: %s\n" % e)
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
 **migration_item_name** | **str**| Migration item name. | 

### Return type

[**MigrationRecoveryPointCollection**](MigrationRecoveryPointCollection.md)

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

