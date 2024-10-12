# openapi_client.DatabasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**databases_create_or_update**](DatabasesApi.md#databases_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName} | 
[**databases_delete**](DatabasesApi.md#databases_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName} | 
[**databases_get**](DatabasesApi.md#databases_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName} | 
[**databases_list_by_elastic_pool**](DatabasesApi.md#databases_list_by_elastic_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/databases | 
[**databases_list_by_server**](DatabasesApi.md#databases_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases | 
[**databases_pause**](DatabasesApi.md#databases_pause) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/pause | 
[**databases_rename**](DatabasesApi.md#databases_rename) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/move | 
[**databases_resume**](DatabasesApi.md#databases_resume) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/resume | 
[**databases_update**](DatabasesApi.md#databases_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName} | 
[**databases_upgrade_data_warehouse**](DatabasesApi.md#databases_upgrade_data_warehouse) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/upgradeDataWarehouse | 


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
**0** | *** Error Responses: ***   * 400 InvalidDatabaseCreateOrUpdateRequest - The request body for the create or update database operation is invalid.   * 400 InvalidResourceId - Invalid resource identifier.   * 400 InvalidSourceDatabaseId - Invalid source database identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MissingCollation - Collation is required.   * 400 MissingMaxSizeBytes - MaxSizeBytes is required.   * 400 MissingSkuName - Sku name is required.   * 400 MissingSourceDatabaseId - Missing source database identifier.   * 400 InvalidSkuName - Invalid SKU name.   * 400 MismatchedSkuNameAndCapacity - Mismatch between SKU name and capacity.   * 400 MismatchedSkuNameAndTier - Mismatch between SKU name and tier.   * 400 MismatchedSkuNameAndFamily - Mismatch between SKU name and family.   * 400 DatabaseNameDoesNotMatchSourceDatabaseId - The database name specified doesn’t match the database name in sourceDatabaseId.   * 400 ElasticPoolNotSupportedForExternalBackupRestore - Elastic pool is not supported for external backup restore   * 400 InvalidRecoverableDatabaseId - Invalid recoverable database identifier.   * 400 InvalidRecoveryServicesRecoveryPointId - Invalid recovery services recovery point identifier.   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 MissingRecoverableDatabaseId - Missing recoverable database identifier.   * 400 MissingRecoveryServicesRecoveryPointId - Missing recovery services recovery point Id.   * 400 MissingRestorableDroppedDatabaseId - Missing restorableDroppedDatabaseId   * 400 MissingRestorePointInTime - Missing restore point in time   * 400 MissingSourceDatabaseDeletionDate - Missing source database deletion date   * 400 MissingStorageContainerSasToken - Missing storage container SAS token   * 400 MissingStorageContainerUri - Missing storage container URI   * 400 RestorableDroppedDatabaseIdGivenForRestoreWithSourceDatabaseId - Cannot specify restorableDroppedDatabaseId when sourceDatabaseId is already given in restore create mode   * 400 InvalidCollation - Collation is not recognized by the server.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 SourceDatabaseNotFound - The source database does not exist.   * 400 UpdateNotAllowedInCurrentReplicationState - The operation is disallowed on the database in its current replication state.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 400 ReplicationSourceAndTargetMustHaveSameName - The replication source and target databases must have the same name.   * 400 ReplicationSourceAndTargetMustBeInDifferentServers - The replication source and target databases must be in different logical servers.   * 400 ChangeUnsupportedOnEntity - User attempted an unsupported create/update/delete operation on a given entity.   * 400 TierChangeUnsupportedDueToMemoryOptimizedObject - The database cannot update its sku because it has memory-optimized objects.   * 400 SourceServerNotFound - The server part of a source database id provided in a CreateDatabaseAsCopy API call doesn&#39;t map to an existing server.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CurrentDatabaseLogSizeExceedsMaxSize - User attempted to change the database to a sku with lower max log size than the current usage.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidSku - The user specified an invalid sku.   * 400 InvalidTierSkuCombination - The specified tier does not support the specified sku.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OfferDisabledOnSubscription - Subscription offer type is restricted from provisioning the requested resource.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 TargetElasticPoolDoesNotExist - The elastic pool does not exist on a server.   * 400 CurrentDatabaseSizeExceedsMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 ElasticPoolSkuCombinationInvalid - Elastic pool and sku can be specified together only if sku is specified as &#39;ElasticPool&#39;.   * 400 ElasticPoolTierCombinationInvalid - The database tier is different than the elastic pool service tier.   * 400 AzureKeyVaultInvalidExpirationDate - The operation could not be completed because the Azure Key Vault key expiration date is invalid.   * 400 SecurityAzureKeyVaultUrlNullOrEmpty - The operation could not be completed because the Azure Key Vault Uri is null or empty.   * 400 AzureKeyVaultInvalidUri - An invalid response from Azure Key Vault. Please use a valid Azure Key Vault URI.   * 400 InvalidReadScaleEdition - User attempted to enable read scale on a database type that does not support it.   * 400 InvalidReadScaleUnits - User attempted to provide a read scale value that is not supported.   * 400 SecurityAzureKeyVaultInvalidKeyName - The operation could not be completed because of an invalid Server Key name.   * 400 ElasticPoolDatabaseCountOverLimit - Attempting to create or add database to elastic pool when the database count limit of the elastic pool has been reached.   * 400 CannotChangeToOrFromDataWarehouseTier - User attempted to change the sku of a database from DataWarehouse tier to non DataWarehouse tiers or vice versa.   * 400 AzureKeyVaultMalformedVaultUri - The provided Key Vault uri is not valid.   * 400 ElasticPoolDecreaseStorageLimitBelowUsage - Attempting to decrease the storage limit of the elastic pool below its storage usage.   * 400 UpdateNotAllowedOnPausedDatabase - User attempted to perform an update on a paused database.   * 400 RequestedDatabaseSizeRequiresShrink - User attempted to ALTER DATABASE MODIFY MAXSIZE to modify the MAXSIZE for a database to a smaller size then the current size.   * 400 CurrentDatabaseSizeExceedsDbMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 CannotUseTrailingWhitespacesInDatabaseName - The database name validation failed.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 SecurityAdalPrincipalCertExpiredError - The operation could not be completed because the Azure Key Vault principal certificate has expired.   * 400 SecurityInvalidAzureKeyVaultRecoveryLevel - The provided Key Vault uri is not valid.   * 400 KeyMaterialNotFoundOnRemoteServer - Remote server does not have access to key material used as a TDE protector.   * 400 AzureKeyVaultMismatchError - Unexpected Key Vault region found in the http response.   * 400 SourceDatabaseEditionCouldNotBeUpgraded - The source database cannot have higher edition than the target database.   * 400 AzureKeyVaultRsaKeyNotSupported - The provided key vault uses unsupported RSA Key Size or Key Type. The supported RSA key size is 2048 and Key Type is RSA.   * 400 TargetDatabaseEditionCouldNotBeDowngraded - The target database cannot have lower edition than the source database.   * 400 UpdateNotAllowedIfGeoDrOperationInProgress - The operation is disallowed because copy or failover operation for database &#39;{0}&#39; on server &#39;{1}&#39; is currently in progress.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 SecurityAzureKeyVaultGeoChainError - Creating secondary of secondary (a process known as chaining) is not supported when enabling Transparent Data Encryption using Azure Key Vault (BYOK).   * 400 InvalidLicenseType - User tried to create or update a database or elastic pool with unsupported license type.   * 400 UnsupportedCapacity - User tried to create or update database with capacity which is not supported.   * 400 RestoreToFreeEditionNotSupported - Restore and GeoRestore target cannot be free database.   * 400 RestoreNotSupportedForFreeEdition - Restore and GeoRestore are not supported for free database.   * 400 InvalidDroppedDatabase - Source database dropped does not exist on server within the supported recovery period.   * 400 InvalidLiveDatabase - Source database does not exist on server within the supported recovery period. If restoring a dropped database, please specify its deletion date.   * 400 InvalidVldbRecoverySlo - The Hyperscale edition recovery requires both source and target databases to use Hyperscale service level objective.   * 400 InvalidVldbRestoreSlo - The Hyperscale edition Point-In-Time restore requires both source and target databases to use Hyperscale service level objective.   * 400 CannotSpecifyPoolOrSlo - Specifying an elastic pool and/or changing the service level objective or edition is not supported for edition.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 400 JobAgentDatabaseEditionUnsupported - The specified database&#39;s service level objective is not supported for use as a job agent database.   * 400 CannotUpdateToFreeDatabase - Updating a database to the free sku is not supported.   * 400 ServerNotFound - The requested server was not found.   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 InvalidMaxSizeTierCombination - The specified tier does not support the specified database max size.   * 400 InvalidTier - The user specified an invalid tier.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidServerName - Invalid server name specified.   * 401 AzureKeyVaultKeyDisabled - The operation could not be completed on the server because the Azure Key Vault key is disabled.   * 401 AzureKeyVaultNoServerIdentity - The server identity is not correctly configured.   * 401 AzureKeyVaultMissingPermissions - The server is missing required permissions on the Azure Key Vault.    * 401 AdalGenericError - The operation could not be completed because an Azure Active Directory error was encountered.   * 401 AdalServicePrincipalNotFound - The operation could not be completed because an Azure Active Directory library Service Principal not found error was encountered.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidOperationForDatabaseInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 FreeDbAlreadyExists - Only one free database can exist for a subscription per region.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 SkuAssignmentInProgress - The current assignment request cannot be processed because a previous request has not completed.   * 409 CurrentMemoryUsageExceedsSkuQuota - User attempted an sku update operation that cannot be completed due to the higher resource consumption.   * 409 ServerDtuQuotaExceeded - Could not perform the operation because server would exceed the allowed Database Throughput Unit quota.   * 409 ServerKeyNameAlreadyExists - The server key already exists on the server.   * 409 ServerKeyUriAlreadyExists - The server key URI already exists on the server.   * 409 UnableToAlterDatabaseInReplication - User altered edition on a database in a replication relationship.   * 409 ServerKeyDoesNotExists - The server key does not exist.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 AzureKeyVaultKeyNameNotFound - The operation could not be completed because the Azure Key Vault Key name does not exist.   * 409 AzureKeyVaultKeyInUse - The key is currently being used by the server.   * 409 SimultaneousSkuChangeNotAllowed - Service objective change operations cannot run on both databases of a replication relationship at the same time.   * 409 TargetElasticPoolBeingUpdated - The update of elastic pool cannot be started because there is copy operation in progress for one of the databases in this elastic pool   * 409 DatabaseCopyLimitPerReplicaReached - User reached the limit of concurrent database copies.   * 409 ServerDisabled - Server is disabled.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows   * 503 AzureKeyVaultConnectionFailed - The operation could not be completed on the server because attempts to connect to Azure Key Vault have failed   * 503 AzureKeyVaultGenericConnectionError - The operation could not be completed because an error was encountered when attempting to retrieve Key Vault information .   * 503 DatabaseUnavailable - The operation failed because the database is unavailable.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

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
**0** | *** Error Responses: ***   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ServerDisabled - Server is disabled.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources. |  -  |

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
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found. |  -  |

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
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

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
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription. |  -  |

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

# **databases_rename**
> databases_rename(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)



Renames a database.

### Example


```python
import openapi_client
from openapi_client.models.resource_move_definition import ResourceMoveDefinition
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
    database_name = 'database_name_example' # str | The name of the database to rename.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ResourceMoveDefinition() # ResourceMoveDefinition | The resource move definition for renaming this database.

    try:
        api_instance.databases_rename(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_rename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to rename. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ResourceMoveDefinition**](ResourceMoveDefinition.md)| The resource move definition for renaming this database. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully renamed the database. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceMoveRequest - The resource move request is invalid.   * 400 InvalidMoveTargetResourceId - The target resource identifier in move request is invalid.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 DatabaseNameInUse - Database already exists. Choose a different database name.   * 400 TokenTooLong - The provided token is too long.   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 409 InvalidOperationForDatabaseInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship. |  -  |

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
**0** | *** Error Responses: ***   * 400 InvalidDatabaseCreateOrUpdateRequest - The request body for the create or update database operation is invalid.   * 400 InvalidResourceId - Invalid resource identifier.   * 400 InvalidSourceDatabaseId - Invalid source database identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MissingCollation - Collation is required.   * 400 MissingMaxSizeBytes - MaxSizeBytes is required.   * 400 MissingSkuName - Sku name is required.   * 400 MissingSourceDatabaseId - Missing source database identifier.   * 400 InvalidSkuName - Invalid SKU name.   * 400 MismatchedSkuNameAndCapacity - Mismatch between SKU name and capacity.   * 400 MismatchedSkuNameAndTier - Mismatch between SKU name and tier.   * 400 MismatchedSkuNameAndFamily - Mismatch between SKU name and family.   * 400 DatabaseNameDoesNotMatchSourceDatabaseId - The database name specified doesn’t match the database name in sourceDatabaseId.   * 400 ElasticPoolNotSupportedForExternalBackupRestore - Elastic pool is not supported for external backup restore   * 400 InvalidRecoverableDatabaseId - Invalid recoverable database identifier.   * 400 InvalidRecoveryServicesRecoveryPointId - Invalid recovery services recovery point identifier.   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 MissingRecoverableDatabaseId - Missing recoverable database identifier.   * 400 MissingRecoveryServicesRecoveryPointId - Missing recovery services recovery point Id.   * 400 MissingRestorableDroppedDatabaseId - Missing restorableDroppedDatabaseId   * 400 MissingRestorePointInTime - Missing restore point in time   * 400 MissingSourceDatabaseDeletionDate - Missing source database deletion date   * 400 MissingStorageContainerSasToken - Missing storage container SAS token   * 400 MissingStorageContainerUri - Missing storage container URI   * 400 RestorableDroppedDatabaseIdGivenForRestoreWithSourceDatabaseId - Cannot specify restorableDroppedDatabaseId when sourceDatabaseId is already given in restore create mode   * 400 InvalidCollation - Collation is not recognized by the server.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 SourceDatabaseNotFound - The source database does not exist.   * 400 UpdateNotAllowedInCurrentReplicationState - The operation is disallowed on the database in its current replication state.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 400 ReplicationSourceAndTargetMustHaveSameName - The replication source and target databases must have the same name.   * 400 ReplicationSourceAndTargetMustBeInDifferentServers - The replication source and target databases must be in different logical servers.   * 400 ChangeUnsupportedOnEntity - User attempted an unsupported create/update/delete operation on a given entity.   * 400 TierChangeUnsupportedDueToMemoryOptimizedObject - The database cannot update its sku because it has memory-optimized objects.   * 400 SourceServerNotFound - The server part of a source database id provided in a CreateDatabaseAsCopy API call doesn&#39;t map to an existing server.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CurrentDatabaseLogSizeExceedsMaxSize - User attempted to change the database to a sku with lower max log size than the current usage.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidSku - The user specified an invalid sku.   * 400 InvalidTierSkuCombination - The specified tier does not support the specified sku.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OfferDisabledOnSubscription - Subscription offer type is restricted from provisioning the requested resource.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 TargetElasticPoolDoesNotExist - The elastic pool does not exist on a server.   * 400 CurrentDatabaseSizeExceedsMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 ElasticPoolSkuCombinationInvalid - Elastic pool and sku can be specified together only if sku is specified as &#39;ElasticPool&#39;.   * 400 ElasticPoolTierCombinationInvalid - The database tier is different than the elastic pool service tier.   * 400 AzureKeyVaultInvalidExpirationDate - The operation could not be completed because the Azure Key Vault key expiration date is invalid.   * 400 SecurityAzureKeyVaultUrlNullOrEmpty - The operation could not be completed because the Azure Key Vault Uri is null or empty.   * 400 AzureKeyVaultInvalidUri - An invalid response from Azure Key Vault. Please use a valid Azure Key Vault URI.   * 400 InvalidReadScaleEdition - User attempted to enable read scale on a database type that does not support it.   * 400 InvalidReadScaleUnits - User attempted to provide a read scale value that is not supported.   * 400 SecurityAzureKeyVaultInvalidKeyName - The operation could not be completed because of an invalid Server Key name.   * 400 ElasticPoolDatabaseCountOverLimit - Attempting to create or add database to elastic pool when the database count limit of the elastic pool has been reached.   * 400 CannotChangeToOrFromDataWarehouseTier - User attempted to change the sku of a database from DataWarehouse tier to non DataWarehouse tiers or vice versa.   * 400 AzureKeyVaultMalformedVaultUri - The provided Key Vault uri is not valid.   * 400 ElasticPoolDecreaseStorageLimitBelowUsage - Attempting to decrease the storage limit of the elastic pool below its storage usage.   * 400 UpdateNotAllowedOnPausedDatabase - User attempted to perform an update on a paused database.   * 400 RequestedDatabaseSizeRequiresShrink - User attempted to ALTER DATABASE MODIFY MAXSIZE to modify the MAXSIZE for a database to a smaller size then the current size.   * 400 CurrentDatabaseSizeExceedsDbMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 CannotUseTrailingWhitespacesInDatabaseName - The database name validation failed.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 SecurityAdalPrincipalCertExpiredError - The operation could not be completed because the Azure Key Vault principal certificate has expired.   * 400 SecurityInvalidAzureKeyVaultRecoveryLevel - The provided Key Vault uri is not valid.   * 400 KeyMaterialNotFoundOnRemoteServer - Remote server does not have access to key material used as a TDE protector.   * 400 AzureKeyVaultMismatchError - Unexpected Key Vault region found in the http response.   * 400 SourceDatabaseEditionCouldNotBeUpgraded - The source database cannot have higher edition than the target database.   * 400 AzureKeyVaultRsaKeyNotSupported - The provided key vault uses unsupported RSA Key Size or Key Type. The supported RSA key size is 2048 and Key Type is RSA.   * 400 TargetDatabaseEditionCouldNotBeDowngraded - The target database cannot have lower edition than the source database.   * 400 UpdateNotAllowedIfGeoDrOperationInProgress - The operation is disallowed because copy or failover operation for database &#39;{0}&#39; on server &#39;{1}&#39; is currently in progress.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 SecurityAzureKeyVaultGeoChainError - Creating secondary of secondary (a process known as chaining) is not supported when enabling Transparent Data Encryption using Azure Key Vault (BYOK).   * 400 InvalidLicenseType - User tried to create or update a database or elastic pool with unsupported license type.   * 400 UnsupportedCapacity - User tried to create or update database with capacity which is not supported.   * 400 RestoreToFreeEditionNotSupported - Restore and GeoRestore target cannot be free database.   * 400 RestoreNotSupportedForFreeEdition - Restore and GeoRestore are not supported for free database.   * 400 InvalidDroppedDatabase - Source database dropped does not exist on server within the supported recovery period.   * 400 InvalidLiveDatabase - Source database does not exist on server within the supported recovery period. If restoring a dropped database, please specify its deletion date.   * 400 InvalidVldbRecoverySlo - The Hyperscale edition recovery requires both source and target databases to use Hyperscale service level objective.   * 400 InvalidVldbRestoreSlo - The Hyperscale edition Point-In-Time restore requires both source and target databases to use Hyperscale service level objective.   * 400 CannotSpecifyPoolOrSlo - Specifying an elastic pool and/or changing the service level objective or edition is not supported for edition.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 400 JobAgentDatabaseEditionUnsupported - The specified database&#39;s service level objective is not supported for use as a job agent database.   * 400 CannotUpdateToFreeDatabase - Updating a database to the free sku is not supported.   * 400 ServerNotFound - The requested server was not found.   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 InvalidMaxSizeTierCombination - The specified tier does not support the specified database max size.   * 400 InvalidTier - The user specified an invalid tier.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidServerName - Invalid server name specified.   * 401 AzureKeyVaultKeyDisabled - The operation could not be completed on the server because the Azure Key Vault key is disabled.   * 401 AzureKeyVaultNoServerIdentity - The server identity is not correctly configured.   * 401 AzureKeyVaultMissingPermissions - The server is missing required permissions on the Azure Key Vault.    * 401 AdalGenericError - The operation could not be completed because an Azure Active Directory error was encountered.   * 401 AdalServicePrincipalNotFound - The operation could not be completed because an Azure Active Directory library Service Principal not found error was encountered.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidOperationForDatabaseInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 FreeDbAlreadyExists - Only one free database can exist for a subscription per region.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 SkuAssignmentInProgress - The current assignment request cannot be processed because a previous request has not completed.   * 409 CurrentMemoryUsageExceedsSkuQuota - User attempted an sku update operation that cannot be completed due to the higher resource consumption.   * 409 ServerDtuQuotaExceeded - Could not perform the operation because server would exceed the allowed Database Throughput Unit quota.   * 409 ServerKeyNameAlreadyExists - The server key already exists on the server.   * 409 ServerKeyUriAlreadyExists - The server key URI already exists on the server.   * 409 UnableToAlterDatabaseInReplication - User altered edition on a database in a replication relationship.   * 409 ServerKeyDoesNotExists - The server key does not exist.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 AzureKeyVaultKeyNameNotFound - The operation could not be completed because the Azure Key Vault Key name does not exist.   * 409 AzureKeyVaultKeyInUse - The key is currently being used by the server.   * 409 SimultaneousSkuChangeNotAllowed - Service objective change operations cannot run on both databases of a replication relationship at the same time.   * 409 TargetElasticPoolBeingUpdated - The update of elastic pool cannot be started because there is copy operation in progress for one of the databases in this elastic pool   * 409 DatabaseCopyLimitPerReplicaReached - User reached the limit of concurrent database copies.   * 409 ServerDisabled - Server is disabled.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows   * 503 AzureKeyVaultConnectionFailed - The operation could not be completed on the server because attempts to connect to Azure Key Vault have failed   * 503 AzureKeyVaultGenericConnectionError - The operation could not be completed because an error was encountered when attempting to retrieve Key Vault information .   * 503 DatabaseUnavailable - The operation failed because the database is unavailable.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_upgrade_data_warehouse**
> databases_upgrade_data_warehouse(resource_group_name, server_name, database_name, subscription_id, api_version)



Upgrades a data warehouse.

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
    database_name = 'database_name_example' # str | The name of the database to be upgraded.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.databases_upgrade_data_warehouse(resource_group_name, server_name, database_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_upgrade_data_warehouse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to be upgraded. | 
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
**200** | Successfully upgraded the data warehouse. |  -  |
**202** | Upgrading the data warehouse is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidCollation - Collation is not recognized by the server.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 SourceDatabaseNotFound - The source database does not exist.   * 400 UpdateNotAllowedInCurrentReplicationState - The operation is disallowed on the database in its current replication state.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 400 ReplicationSourceAndTargetMustHaveSameName - The replication source and target databases must have the same name.   * 400 ReplicationSourceAndTargetMustBeInDifferentServers - The replication source and target databases must be in different logical servers.   * 400 ChangeUnsupportedOnEntity - User attempted an unsupported create/update/delete operation on a given entity.   * 400 TierChangeUnsupportedDueToMemoryOptimizedObject - The database cannot update its sku because it has memory-optimized objects.   * 400 SourceServerNotFound - The server part of a source database id provided in a CreateDatabaseAsCopy API call doesn&#39;t map to an existing server.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CurrentDatabaseLogSizeExceedsMaxSize - User attempted to change the database to a sku with lower max log size than the current usage.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidSku - The user specified an invalid sku.   * 400 InvalidTierSkuCombination - The specified tier does not support the specified sku.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OfferDisabledOnSubscription - Subscription offer type is restricted from provisioning the requested resource.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 TargetElasticPoolDoesNotExist - The elastic pool does not exist on a server.   * 400 CurrentDatabaseSizeExceedsMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 ElasticPoolSkuCombinationInvalid - Elastic pool and sku can be specified together only if sku is specified as &#39;ElasticPool&#39;.   * 400 ElasticPoolTierCombinationInvalid - The database tier is different than the elastic pool service tier.   * 400 AzureKeyVaultInvalidExpirationDate - The operation could not be completed because the Azure Key Vault key expiration date is invalid.   * 400 SecurityAzureKeyVaultUrlNullOrEmpty - The operation could not be completed because the Azure Key Vault Uri is null or empty.   * 400 AzureKeyVaultInvalidUri - An invalid response from Azure Key Vault. Please use a valid Azure Key Vault URI.   * 400 InvalidReadScaleEdition - User attempted to enable read scale on a database type that does not support it.   * 400 InvalidReadScaleUnits - User attempted to provide a read scale value that is not supported.   * 400 SecurityAzureKeyVaultInvalidKeyName - The operation could not be completed because of an invalid Server Key name.   * 400 ElasticPoolDatabaseCountOverLimit - Attempting to create or add database to elastic pool when the database count limit of the elastic pool has been reached.   * 400 CannotChangeToOrFromDataWarehouseTier - User attempted to change the sku of a database from DataWarehouse tier to non DataWarehouse tiers or vice versa.   * 400 AzureKeyVaultMalformedVaultUri - The provided Key Vault uri is not valid.   * 400 ElasticPoolDecreaseStorageLimitBelowUsage - Attempting to decrease the storage limit of the elastic pool below its storage usage.   * 400 UpdateNotAllowedOnPausedDatabase - User attempted to perform an update on a paused database.   * 400 RequestedDatabaseSizeRequiresShrink - User attempted to ALTER DATABASE MODIFY MAXSIZE to modify the MAXSIZE for a database to a smaller size then the current size.   * 400 CurrentDatabaseSizeExceedsDbMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 CannotUseTrailingWhitespacesInDatabaseName - The database name validation failed.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 SecurityAdalPrincipalCertExpiredError - The operation could not be completed because the Azure Key Vault principal certificate has expired.   * 400 SecurityInvalidAzureKeyVaultRecoveryLevel - The provided Key Vault uri is not valid.   * 400 KeyMaterialNotFoundOnRemoteServer - Remote server does not have access to key material used as a TDE protector.   * 400 AzureKeyVaultMismatchError - Unexpected Key Vault region found in the http response.   * 400 SourceDatabaseEditionCouldNotBeUpgraded - The source database cannot have higher edition than the target database.   * 400 AzureKeyVaultRsaKeyNotSupported - The provided key vault uses unsupported RSA Key Size or Key Type. The supported RSA key size is 2048 and Key Type is RSA.   * 400 TargetDatabaseEditionCouldNotBeDowngraded - The target database cannot have lower edition than the source database.   * 400 UpdateNotAllowedIfGeoDrOperationInProgress - The operation is disallowed because copy or failover operation for database &#39;{0}&#39; on server &#39;{1}&#39; is currently in progress.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 SecurityAzureKeyVaultGeoChainError - Creating secondary of secondary (a process known as chaining) is not supported when enabling Transparent Data Encryption using Azure Key Vault (BYOK).   * 400 InvalidLicenseType - User tried to create or update a database or elastic pool with unsupported license type.   * 400 UnsupportedCapacity - User tried to create or update database with capacity which is not supported.   * 400 RestoreToFreeEditionNotSupported - Restore and GeoRestore target cannot be free database.   * 400 RestoreNotSupportedForFreeEdition - Restore and GeoRestore are not supported for free database.   * 400 InvalidDroppedDatabase - Source database dropped does not exist on server within the supported recovery period.   * 400 InvalidLiveDatabase - Source database does not exist on server within the supported recovery period. If restoring a dropped database, please specify its deletion date.   * 400 InvalidVldbRecoverySlo - The Hyperscale edition recovery requires both source and target databases to use Hyperscale service level objective.   * 400 InvalidVldbRestoreSlo - The Hyperscale edition Point-In-Time restore requires both source and target databases to use Hyperscale service level objective.   * 400 CannotSpecifyPoolOrSlo - Specifying an elastic pool and/or changing the service level objective or edition is not supported for edition.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 400 JobAgentDatabaseEditionUnsupported - The specified database&#39;s service level objective is not supported for use as a job agent database.   * 400 CannotUpdateToFreeDatabase - Updating a database to the free sku is not supported.   * 400 ServerNotFound - The requested server was not found.   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 InvalidMaxSizeTierCombination - The specified tier does not support the specified database max size.   * 400 InvalidTier - The user specified an invalid tier.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidServerName - Invalid server name specified.   * 400 UpgradeOnlyAllowedOnDataWarehouseInstances - User attempted to upgrade non-datawarehouse instance.   * 401 AzureKeyVaultKeyDisabled - The operation could not be completed on the server because the Azure Key Vault key is disabled.   * 401 AzureKeyVaultNoServerIdentity - The server identity is not correctly configured.   * 401 AzureKeyVaultMissingPermissions - The server is missing required permissions on the Azure Key Vault.    * 401 AdalGenericError - The operation could not be completed because an Azure Active Directory error was encountered.   * 401 AdalServicePrincipalNotFound - The operation could not be completed because an Azure Active Directory library Service Principal not found error was encountered.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidOperationForDatabaseInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 FreeDbAlreadyExists - Only one free database can exist for a subscription per region.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 SkuAssignmentInProgress - The current assignment request cannot be processed because a previous request has not completed.   * 409 CurrentMemoryUsageExceedsSkuQuota - User attempted an sku update operation that cannot be completed due to the higher resource consumption.   * 409 ServerDtuQuotaExceeded - Could not perform the operation because server would exceed the allowed Database Throughput Unit quota.   * 409 ServerKeyNameAlreadyExists - The server key already exists on the server.   * 409 ServerKeyUriAlreadyExists - The server key URI already exists on the server.   * 409 UnableToAlterDatabaseInReplication - User altered edition on a database in a replication relationship.   * 409 ServerKeyDoesNotExists - The server key does not exist.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 AzureKeyVaultKeyNameNotFound - The operation could not be completed because the Azure Key Vault Key name does not exist.   * 409 AzureKeyVaultKeyInUse - The key is currently being used by the server.   * 409 SimultaneousSkuChangeNotAllowed - Service objective change operations cannot run on both databases of a replication relationship at the same time.   * 409 TargetElasticPoolBeingUpdated - The update of elastic pool cannot be started because there is copy operation in progress for one of the databases in this elastic pool   * 409 DatabaseCopyLimitPerReplicaReached - User reached the limit of concurrent database copies.   * 409 ServerDisabled - Server is disabled.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows   * 503 AzureKeyVaultConnectionFailed - The operation could not be completed on the server because attempts to connect to Azure Key Vault have failed   * 503 AzureKeyVaultGenericConnectionError - The operation could not be completed because an error was encountered when attempting to retrieve Key Vault information .   * 503 DatabaseUnavailable - The operation failed because the database is unavailable.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

