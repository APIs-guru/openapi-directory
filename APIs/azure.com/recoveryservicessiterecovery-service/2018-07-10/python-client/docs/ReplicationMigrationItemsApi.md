# openapi_client.ReplicationMigrationItemsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_migration_items_create**](ReplicationMigrationItemsApi.md#replication_migration_items_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName} | Enables migration.
[**replication_migration_items_delete**](ReplicationMigrationItemsApi.md#replication_migration_items_delete) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName} | Delete the migration item.
[**replication_migration_items_get**](ReplicationMigrationItemsApi.md#replication_migration_items_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName} | Gets the details of a migration item.
[**replication_migration_items_list**](ReplicationMigrationItemsApi.md#replication_migration_items_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationMigrationItems | Gets the list of migration items in the vault.
[**replication_migration_items_list_by_replication_protection_containers**](ReplicationMigrationItemsApi.md#replication_migration_items_list_by_replication_protection_containers) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems | Gets the list of migration items in the protection container.
[**replication_migration_items_migrate**](ReplicationMigrationItemsApi.md#replication_migration_items_migrate) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/migrate | Migrate item.
[**replication_migration_items_test_migrate**](ReplicationMigrationItemsApi.md#replication_migration_items_test_migrate) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/testMigrate | Test migrate item.
[**replication_migration_items_test_migrate_cleanup**](ReplicationMigrationItemsApi.md#replication_migration_items_test_migrate_cleanup) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/testMigrateCleanup | Test migrate cleanup.
[**replication_migration_items_update**](ReplicationMigrationItemsApi.md#replication_migration_items_update) | **PATCH** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName} | Updates migration item.


# **replication_migration_items_create**
> MigrationItem replication_migration_items_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, input)

Enables migration.

The operation to create an ASR migration item (enable migration).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.enable_migration_input import EnableMigrationInput
from openapi_client.models.migration_item import MigrationItem
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
    api_instance = openapi_client.ReplicationMigrationItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    migration_item_name = 'migration_item_name_example' # str | Migration item name.
    input = openapi_client.EnableMigrationInput() # EnableMigrationInput | Enable migration input.

    try:
        # Enables migration.
        api_response = api_instance.replication_migration_items_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, input)
        print("The response of ReplicationMigrationItemsApi->replication_migration_items_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationMigrationItemsApi->replication_migration_items_create: %s\n" % e)
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
 **migration_item_name** | **str**| Migration item name. | 
 **input** | [**EnableMigrationInput**](EnableMigrationInput.md)| Enable migration input. | 

### Return type

[**MigrationItem**](MigrationItem.md)

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

# **replication_migration_items_delete**
> replication_migration_items_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, delete_option=delete_option)

Delete the migration item.

The operation to delete an ASR migration item.

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
    api_instance = openapi_client.ReplicationMigrationItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    migration_item_name = 'migration_item_name_example' # str | Migration item name.
    delete_option = 'delete_option_example' # str | The delete option. (optional)

    try:
        # Delete the migration item.
        api_instance.replication_migration_items_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, delete_option=delete_option)
    except Exception as e:
        print("Exception when calling ReplicationMigrationItemsApi->replication_migration_items_delete: %s\n" % e)
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
 **migration_item_name** | **str**| Migration item name. | 
 **delete_option** | **str**| The delete option. | [optional] 

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

# **replication_migration_items_get**
> MigrationItem replication_migration_items_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name)

Gets the details of a migration item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_item import MigrationItem
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
    api_instance = openapi_client.ReplicationMigrationItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric unique name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    migration_item_name = 'migration_item_name_example' # str | Migration item name.

    try:
        # Gets the details of a migration item.
        api_response = api_instance.replication_migration_items_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name)
        print("The response of ReplicationMigrationItemsApi->replication_migration_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationMigrationItemsApi->replication_migration_items_get: %s\n" % e)
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

[**MigrationItem**](MigrationItem.md)

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

# **replication_migration_items_list**
> MigrationItemCollection replication_migration_items_list(api_version, resource_name, resource_group_name, subscription_id, skip_token=skip_token, filter=filter)

Gets the list of migration items in the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_item_collection import MigrationItemCollection
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
    api_instance = openapi_client.ReplicationMigrationItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    skip_token = 'skip_token_example' # str | The pagination token. (optional)
    filter = 'filter_example' # str | OData filter options. (optional)

    try:
        # Gets the list of migration items in the vault.
        api_response = api_instance.replication_migration_items_list(api_version, resource_name, resource_group_name, subscription_id, skip_token=skip_token, filter=filter)
        print("The response of ReplicationMigrationItemsApi->replication_migration_items_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationMigrationItemsApi->replication_migration_items_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **skip_token** | **str**| The pagination token. | [optional] 
 **filter** | **str**| OData filter options. | [optional] 

### Return type

[**MigrationItemCollection**](MigrationItemCollection.md)

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

# **replication_migration_items_list_by_replication_protection_containers**
> MigrationItemCollection replication_migration_items_list_by_replication_protection_containers(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)

Gets the list of migration items in the protection container.

Gets the list of ASR migration items in the protection container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_item_collection import MigrationItemCollection
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
    api_instance = openapi_client.ReplicationMigrationItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.

    try:
        # Gets the list of migration items in the protection container.
        api_response = api_instance.replication_migration_items_list_by_replication_protection_containers(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)
        print("The response of ReplicationMigrationItemsApi->replication_migration_items_list_by_replication_protection_containers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationMigrationItemsApi->replication_migration_items_list_by_replication_protection_containers: %s\n" % e)
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

[**MigrationItemCollection**](MigrationItemCollection.md)

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

# **replication_migration_items_migrate**
> MigrationItem replication_migration_items_migrate(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, migrate_input)

Migrate item.

The operation to initiate migration of the item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migrate_input import MigrateInput
from openapi_client.models.migration_item import MigrationItem
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
    api_instance = openapi_client.ReplicationMigrationItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    migration_item_name = 'migration_item_name_example' # str | Migration item name.
    migrate_input = openapi_client.MigrateInput() # MigrateInput | Migrate input.

    try:
        # Migrate item.
        api_response = api_instance.replication_migration_items_migrate(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, migrate_input)
        print("The response of ReplicationMigrationItemsApi->replication_migration_items_migrate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationMigrationItemsApi->replication_migration_items_migrate: %s\n" % e)
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
 **migration_item_name** | **str**| Migration item name. | 
 **migrate_input** | [**MigrateInput**](MigrateInput.md)| Migrate input. | 

### Return type

[**MigrationItem**](MigrationItem.md)

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

# **replication_migration_items_test_migrate**
> MigrationItem replication_migration_items_test_migrate(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, test_migrate_input)

Test migrate item.

The operation to initiate test migration of the item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_item import MigrationItem
from openapi_client.models.test_migrate_input import TestMigrateInput
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
    api_instance = openapi_client.ReplicationMigrationItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    migration_item_name = 'migration_item_name_example' # str | Migration item name.
    test_migrate_input = openapi_client.TestMigrateInput() # TestMigrateInput | Test migrate input.

    try:
        # Test migrate item.
        api_response = api_instance.replication_migration_items_test_migrate(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, test_migrate_input)
        print("The response of ReplicationMigrationItemsApi->replication_migration_items_test_migrate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationMigrationItemsApi->replication_migration_items_test_migrate: %s\n" % e)
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
 **migration_item_name** | **str**| Migration item name. | 
 **test_migrate_input** | [**TestMigrateInput**](TestMigrateInput.md)| Test migrate input. | 

### Return type

[**MigrationItem**](MigrationItem.md)

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

# **replication_migration_items_test_migrate_cleanup**
> MigrationItem replication_migration_items_test_migrate_cleanup(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, test_migrate_cleanup_input)

Test migrate cleanup.

The operation to initiate test migrate cleanup.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_item import MigrationItem
from openapi_client.models.test_migrate_cleanup_input import TestMigrateCleanupInput
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
    api_instance = openapi_client.ReplicationMigrationItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    migration_item_name = 'migration_item_name_example' # str | Migration item name.
    test_migrate_cleanup_input = openapi_client.TestMigrateCleanupInput() # TestMigrateCleanupInput | Test migrate cleanup input.

    try:
        # Test migrate cleanup.
        api_response = api_instance.replication_migration_items_test_migrate_cleanup(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, test_migrate_cleanup_input)
        print("The response of ReplicationMigrationItemsApi->replication_migration_items_test_migrate_cleanup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationMigrationItemsApi->replication_migration_items_test_migrate_cleanup: %s\n" % e)
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
 **migration_item_name** | **str**| Migration item name. | 
 **test_migrate_cleanup_input** | [**TestMigrateCleanupInput**](TestMigrateCleanupInput.md)| Test migrate cleanup input. | 

### Return type

[**MigrationItem**](MigrationItem.md)

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

# **replication_migration_items_update**
> MigrationItem replication_migration_items_update(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, input)

Updates migration item.

The operation to update the recovery settings of an ASR migration item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.migration_item import MigrationItem
from openapi_client.models.update_migration_item_input import UpdateMigrationItemInput
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
    api_instance = openapi_client.ReplicationMigrationItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    migration_item_name = 'migration_item_name_example' # str | Migration item name.
    input = openapi_client.UpdateMigrationItemInput() # UpdateMigrationItemInput | Update migration item input.

    try:
        # Updates migration item.
        api_response = api_instance.replication_migration_items_update(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, migration_item_name, input)
        print("The response of ReplicationMigrationItemsApi->replication_migration_items_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationMigrationItemsApi->replication_migration_items_update: %s\n" % e)
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
 **migration_item_name** | **str**| Migration item name. | 
 **input** | [**UpdateMigrationItemInput**](UpdateMigrationItemInput.md)| Update migration item input. | 

### Return type

[**MigrationItem**](MigrationItem.md)

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

