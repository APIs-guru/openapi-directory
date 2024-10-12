# openapi_client.DatabasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**databases_create_or_update**](DatabasesApi.md#databases_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName} | 
[**databases_delete**](DatabasesApi.md#databases_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName} | 
[**databases_export**](DatabasesApi.md#databases_export) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/export | 
[**databases_get**](DatabasesApi.md#databases_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName} | 
[**databases_list_by_elastic_pool**](DatabasesApi.md#databases_list_by_elastic_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/databases | 
[**databases_list_by_server**](DatabasesApi.md#databases_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases | 
[**databases_pause**](DatabasesApi.md#databases_pause) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/pause | 
[**databases_resume**](DatabasesApi.md#databases_resume) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/resume | 
[**databases_update**](DatabasesApi.md#databases_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName} | 


# **databases_create_or_update**
> Database databases_create_or_update(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)



Creates a new database or updates an existing database.

### Example


```python
import openapi_client
from openapi_client.models.database import Database
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.Database() # Database | The requested database resource state.

    try:
        api_response = api_instance.databases_create_or_update(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)
        print("The response of DatabasesApi->databases_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**Database**](Database.md)| The requested database resource state. | 

### Return type

[**Database**](Database.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the database. |  -  |
**201** | Successfully created the database. |  -  |
**202** | Creating or updating the database is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidDatabaseCreateOrUpdateRequest - The request body for the create or update database operation is invalid.   * 400 InvalidResourceId - Invalid resource identifier.   * 400 InvalidSourceDatabaseId - Invalid source database identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MissingCollation - Collation is required.   * 400 MissingMaxSizeBytes - MaxSizeBytes is required.   * 400 MissingSkuName - Sku name is required.   * 400 MissingSourceDatabaseId - Missing source database identifier.   * 400 DatabaseNameDoesNotMatchSourceDatabaseId - The database name specified doesn’t match the database name in sourceDatabaseId.   * 400 ElasticPoolNotSupportedForExternalBackupRestore - Elastic pool is not supported for external backup restore   * 400 InvalidRecoverableDatabaseId - Invalid recoverable database identifier.   * 400 InvalidRecoveryServicesRecoveryPointId - Invalid recovery services recovery point identifier.   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 MissingRecoverableDatabaseId - Missing recoverable database identifier.   * 400 MissingRecoveryServicesRecoveryPointId - Missing recovery services recovery point Id.   * 400 MissingRestorableDroppedDatabaseId - Missing restorableDroppedDatabaseId   * 400 MissingRestorePointInTime - Missing restore point in time   * 400 MissingSourceDatabaseDeletionDate - Missing source database deletion date   * 400 MissingStorageContainerSasToken - Missing storage container SAS token   * 400 MissingStorageContainerUri - Missing storage container URI   * 400 RestorableDroppedDatabaseIdGivenForRestoreWithSourceDatabaseId - Cannot specify restorableDroppedDatabaseId when sourceDatabaseId is already given in restore create mode   * 400 TierChangeUnsupportedDueToMemoryOptimizedObject - The database cannot update its sku because it has memory-optimized objects.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 400 ServerNotFound - The requested server was not found.   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 InvalidSku - The user specified an invalid sku.   * 400 InvalidTierSkuCombination - The specified tier does not support the specified sku.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OfferDisabledOnSubscription - Subscription offer type is restricted from provisioning the requested resource.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 CurrentDatabaseSizeExceedsMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 ElasticPoolSkuCombinationInvalid - Elastic pool and sku can be specified together only if sku is specified as &#39;ElasticPool&#39;.   * 400 ElasticPoolTierCombinationInvalid - The database tier is different than the elastic pool service tier.   * 400 TokenTooLong - The provided token is too long.   * 400 ElasticPoolDatabaseCountOverLimit - Attempting to create or add database to elastic pool when the database count limit of the elastic pool has been reached.   * 400 CannotChangeToOrFromDataWarehouseTier - User attempted to change the sku of a database from DataWarehouse tier to non DataWarehouse tiers or vice versa.   * 400 InvalidMaxSizeTierCombination - The specified tier does not support the specified database max size.   * 400 CannotUseTrailingWhitespacesInDatabaseName - The database name validation failed.   * 400 ElasticPoolDecreaseStorageLimitBelowUsage - Attempting to decrease the storage limit of the elastic pool below its storage usage.   * 400 UpdateNotAllowedOnPausedDatabase - User attempted to perform an update on a paused database.   * 400 InvalidTier - The user specified an invalid tier.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 InvalidServerName - Invalid server name specified.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 InvalidCollation - Collation is not recognized by the server.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 SourceDatabaseNotFound - The source database does not exist.   * 400 ChangeUnsupportedOnEntity - User attempted an unsupported create/update/delete operation on a given entity.   * 400 UpdateNotAllowedIfGeoDrOperationInProgress - The operation is disallowed because copy or failover operation for database &#39;{0}&#39; on server &#39;{1}&#39; is currently in progress.   * 400 UpdateNotAllowedInCurrentReplicationState - The operation is disallowed on the database in its current replication state.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 400 ReplicationSourceAndTargetMustHaveSameName - The replication source and target databases must have the same name.   * 400 ReplicationSourceAndTargetMustBeInDifferentServers - The replication source and target databases must be in different logical servers.   * 400 SourceServerNotFound - The server part of a source database id provided in a CreateDatabaseAsCopy API call doesn&#39;t map to an existing server.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CannotUpdateToFreeDatabase - Updating a database to the free sku is not supported.   * 400 CurrentDatabaseLogSizeExceedsMaxSize - User attempted to change the database to a sku with lower max log size than the current usage.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 SkuAssignmentInProgress - The current assignment request cannot be processed because a previous request has not completed.   * 409 CurrentMemoryUsageExceedsSkuQuota - User attempted an sku update operation that cannot be completed due to the higher resource consumption.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 ServerDtuQuotaExceeded - Could not perform the operation because server would exceed the allowed Database Throughput Unit quota.   * 409 UnableToAlterDatabaseInReplication - User altered edition on a database in a replication relationship.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 409 SimultaneousSkuChangeNotAllowed - Service objective change operations cannot run on both databases of a replication relationship at the same time.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidOperationForDatabaseInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_delete**
> databases_delete(resource_group_name, server_name, database_name, subscription_id, api_version)



Deletes the database.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.databases_delete(resource_group_name, server_name, database_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the database. |  -  |
**202** | Deleting the database is in progress. |  -  |
**204** | The specified database does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_export**
> ImportExportOperationResult databases_export(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)



Exports a database.

### Example


```python
import openapi_client
from openapi_client.models.import_export_database_definition import ImportExportDatabaseDefinition
from openapi_client.models.import_export_operation_result import ImportExportOperationResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ImportExportDatabaseDefinition() # ImportExportDatabaseDefinition | The database export request parameters.

    try:
        api_response = api_instance.databases_export(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)
        print("The response of DatabasesApi->databases_export:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_export: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ImportExportDatabaseDefinition**](ImportExportDatabaseDefinition.md)| The database export request parameters. | 

### Return type

[**ImportExportOperationResult**](ImportExportOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully exported the database. |  -  |
**202** | Exporting the database is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 MissingImportExportInputParameters - Missing ImportExport input parameters.   * 400 PolybaseImportAuthenticationTypeNotSupported - Authentication type parameter is not support for PolybaseImport operation.   * 400 InvalidOperationType - Provide a valid operation type.   * 404 ImportExportOperationIdNotFound - The operation Id for import or export cannot be found.   * 404 ResourceNotFound - Invalid request specifying a non-existent resource.   * 409 ImportExportOperationInProgress - There is an import or export operation in progress on the database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_get**
> Database databases_get(resource_group_name, server_name, database_name, subscription_id, api_version)



Gets a database.

### Example


```python
import openapi_client
from openapi_client.models.database import Database
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.databases_get(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of DatabasesApi->databases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**Database**](Database.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified database. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_list_by_elastic_pool**
> DatabaseListResult databases_list_by_elastic_pool(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)



Gets a list of databases in an elastic pool.

### Example


```python
import openapi_client
from openapi_client.models.database_list_result import DatabaseListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | The name of the elastic pool.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.databases_list_by_elastic_pool(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)
        print("The response of DatabasesApi->databases_list_by_elastic_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_list_by_elastic_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**| The name of the elastic pool. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseListResult**](DatabaseListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved a list of databases in an elastic pool. |  -  |
**0** | *** Error Responses: ***   * 400 TierChangeUnsupportedDueToMemoryOptimizedObject - The database cannot update its sku because it has memory-optimized objects.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 400 ServerNotFound - The requested server was not found.   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 InvalidSku - The user specified an invalid sku.   * 400 InvalidTierSkuCombination - The specified tier does not support the specified sku.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OfferDisabledOnSubscription - Subscription offer type is restricted from provisioning the requested resource.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 CurrentDatabaseSizeExceedsMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 ElasticPoolSkuCombinationInvalid - Elastic pool and sku can be specified together only if sku is specified as &#39;ElasticPool&#39;.   * 400 ElasticPoolTierCombinationInvalid - The database tier is different than the elastic pool service tier.   * 400 TokenTooLong - The provided token is too long.   * 400 ElasticPoolDatabaseCountOverLimit - Attempting to create or add database to elastic pool when the database count limit of the elastic pool has been reached.   * 400 CannotChangeToOrFromDataWarehouseTier - User attempted to change the sku of a database from DataWarehouse tier to non DataWarehouse tiers or vice versa.   * 400 InvalidMaxSizeTierCombination - The specified tier does not support the specified database max size.   * 400 CannotUseTrailingWhitespacesInDatabaseName - The database name validation failed.   * 400 ElasticPoolDecreaseStorageLimitBelowUsage - Attempting to decrease the storage limit of the elastic pool below its storage usage.   * 400 UpdateNotAllowedOnPausedDatabase - User attempted to perform an update on a paused database.   * 400 InvalidTier - The user specified an invalid tier.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 InvalidServerName - Invalid server name specified.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 InvalidCollation - Collation is not recognized by the server.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 SourceDatabaseNotFound - The source database does not exist.   * 400 ChangeUnsupportedOnEntity - User attempted an unsupported create/update/delete operation on a given entity.   * 400 UpdateNotAllowedIfGeoDrOperationInProgress - The operation is disallowed because copy or failover operation for database &#39;{0}&#39; on server &#39;{1}&#39; is currently in progress.   * 400 UpdateNotAllowedInCurrentReplicationState - The operation is disallowed on the database in its current replication state.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 400 ReplicationSourceAndTargetMustHaveSameName - The replication source and target databases must have the same name.   * 400 ReplicationSourceAndTargetMustBeInDifferentServers - The replication source and target databases must be in different logical servers.   * 400 SourceServerNotFound - The server part of a source database id provided in a CreateDatabaseAsCopy API call doesn&#39;t map to an existing server.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CannotUpdateToFreeDatabase - Updating a database to the free sku is not supported.   * 400 CurrentDatabaseLogSizeExceedsMaxSize - User attempted to change the database to a sku with lower max log size than the current usage.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 SkuAssignmentInProgress - The current assignment request cannot be processed because a previous request has not completed.   * 409 CurrentMemoryUsageExceedsSkuQuota - User attempted an sku update operation that cannot be completed due to the higher resource consumption.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 ServerDtuQuotaExceeded - Could not perform the operation because server would exceed the allowed Database Throughput Unit quota.   * 409 UnableToAlterDatabaseInReplication - User altered edition on a database in a replication relationship.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 409 SimultaneousSkuChangeNotAllowed - Service objective change operations cannot run on both databases of a replication relationship at the same time.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidOperationForDatabaseInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_list_by_server**
> DatabaseListResult databases_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Gets a list of databases.

### Example


```python
import openapi_client
from openapi_client.models.database_list_result import DatabaseListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.databases_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of DatabasesApi->databases_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseListResult**](DatabaseListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of databases. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_pause**
> Database databases_pause(resource_group_name, server_name, database_name, subscription_id, api_version)



Pauses a database.

### Example


```python
import openapi_client
from openapi_client.models.database import Database
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database to be paused.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.databases_pause(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of DatabasesApi->databases_pause:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_pause: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to be paused. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**Database**](Database.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully paused the database. |  -  |
**202** | Pausing the database is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 CannotDeactivateWhenDeactivatingInProgress - Deactivation workflow failed because there is a deactivate workflow already running.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_resume**
> Database databases_resume(resource_group_name, server_name, database_name, subscription_id, api_version)



Resumes a database.

### Example


```python
import openapi_client
from openapi_client.models.database import Database
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database to be resumed.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.databases_resume(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of DatabasesApi->databases_resume:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_resume: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to be resumed. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**Database**](Database.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully resumed the database. |  -  |
**202** | Resuming the database is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_update**
> Database databases_update(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)



Updates an existing database.

### Example


```python
import openapi_client
from openapi_client.models.database import Database
from openapi_client.models.database_update import DatabaseUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.DatabaseUpdate() # DatabaseUpdate | The requested database resource state.

    try:
        api_response = api_instance.databases_update(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)
        print("The response of DatabasesApi->databases_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**DatabaseUpdate**](DatabaseUpdate.md)| The requested database resource state. | 

### Return type

[**Database**](Database.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the database. |  -  |
**202** | Updating the database is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidDatabaseCreateOrUpdateRequest - The request body for the create or update database operation is invalid.   * 400 InvalidResourceId - Invalid resource identifier.   * 400 InvalidSourceDatabaseId - Invalid source database identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MissingCollation - Collation is required.   * 400 MissingMaxSizeBytes - MaxSizeBytes is required.   * 400 MissingSkuName - Sku name is required.   * 400 MissingSourceDatabaseId - Missing source database identifier.   * 400 DatabaseNameDoesNotMatchSourceDatabaseId - The database name specified doesn’t match the database name in sourceDatabaseId.   * 400 ElasticPoolNotSupportedForExternalBackupRestore - Elastic pool is not supported for external backup restore   * 400 InvalidRecoverableDatabaseId - Invalid recoverable database identifier.   * 400 InvalidRecoveryServicesRecoveryPointId - Invalid recovery services recovery point identifier.   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 MissingRecoverableDatabaseId - Missing recoverable database identifier.   * 400 MissingRecoveryServicesRecoveryPointId - Missing recovery services recovery point Id.   * 400 MissingRestorableDroppedDatabaseId - Missing restorableDroppedDatabaseId   * 400 MissingRestorePointInTime - Missing restore point in time   * 400 MissingSourceDatabaseDeletionDate - Missing source database deletion date   * 400 MissingStorageContainerSasToken - Missing storage container SAS token   * 400 MissingStorageContainerUri - Missing storage container URI   * 400 RestorableDroppedDatabaseIdGivenForRestoreWithSourceDatabaseId - Cannot specify restorableDroppedDatabaseId when sourceDatabaseId is already given in restore create mode   * 400 TierChangeUnsupportedDueToMemoryOptimizedObject - The database cannot update its sku because it has memory-optimized objects.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 400 ServerNotFound - The requested server was not found.   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 InvalidSku - The user specified an invalid sku.   * 400 InvalidTierSkuCombination - The specified tier does not support the specified sku.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OfferDisabledOnSubscription - Subscription offer type is restricted from provisioning the requested resource.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 CurrentDatabaseSizeExceedsMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 ElasticPoolSkuCombinationInvalid - Elastic pool and sku can be specified together only if sku is specified as &#39;ElasticPool&#39;.   * 400 ElasticPoolTierCombinationInvalid - The database tier is different than the elastic pool service tier.   * 400 TokenTooLong - The provided token is too long.   * 400 ElasticPoolDatabaseCountOverLimit - Attempting to create or add database to elastic pool when the database count limit of the elastic pool has been reached.   * 400 CannotChangeToOrFromDataWarehouseTier - User attempted to change the sku of a database from DataWarehouse tier to non DataWarehouse tiers or vice versa.   * 400 InvalidMaxSizeTierCombination - The specified tier does not support the specified database max size.   * 400 CannotUseTrailingWhitespacesInDatabaseName - The database name validation failed.   * 400 ElasticPoolDecreaseStorageLimitBelowUsage - Attempting to decrease the storage limit of the elastic pool below its storage usage.   * 400 UpdateNotAllowedOnPausedDatabase - User attempted to perform an update on a paused database.   * 400 InvalidTier - The user specified an invalid tier.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 InvalidServerName - Invalid server name specified.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 InvalidCollation - Collation is not recognized by the server.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 SourceDatabaseNotFound - The source database does not exist.   * 400 ChangeUnsupportedOnEntity - User attempted an unsupported create/update/delete operation on a given entity.   * 400 UpdateNotAllowedIfGeoDrOperationInProgress - The operation is disallowed because copy or failover operation for database &#39;{0}&#39; on server &#39;{1}&#39; is currently in progress.   * 400 UpdateNotAllowedInCurrentReplicationState - The operation is disallowed on the database in its current replication state.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 400 ReplicationSourceAndTargetMustHaveSameName - The replication source and target databases must have the same name.   * 400 ReplicationSourceAndTargetMustBeInDifferentServers - The replication source and target databases must be in different logical servers.   * 400 SourceServerNotFound - The server part of a source database id provided in a CreateDatabaseAsCopy API call doesn&#39;t map to an existing server.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CannotUpdateToFreeDatabase - Updating a database to the free sku is not supported.   * 400 CurrentDatabaseLogSizeExceedsMaxSize - User attempted to change the database to a sku with lower max log size than the current usage.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 SkuAssignmentInProgress - The current assignment request cannot be processed because a previous request has not completed.   * 409 CurrentMemoryUsageExceedsSkuQuota - User attempted an sku update operation that cannot be completed due to the higher resource consumption.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 ServerDtuQuotaExceeded - Could not perform the operation because server would exceed the allowed Database Throughput Unit quota.   * 409 UnableToAlterDatabaseInReplication - User altered edition on a database in a replication relationship.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 409 SimultaneousSkuChangeNotAllowed - Service objective change operations cannot run on both databases of a replication relationship at the same time.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidOperationForDatabaseInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

