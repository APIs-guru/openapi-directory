# openapi_client.ManagedDatabasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_databases_complete_restore**](ManagedDatabasesApi.md#managed_databases_complete_restore) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/completeRestore | 
[**managed_databases_create_or_update**](ManagedDatabasesApi.md#managed_databases_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName} | 
[**managed_databases_delete**](ManagedDatabasesApi.md#managed_databases_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName} | 
[**managed_databases_get**](ManagedDatabasesApi.md#managed_databases_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName} | 
[**managed_databases_list_by_instance**](ManagedDatabasesApi.md#managed_databases_list_by_instance) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases | 
[**managed_databases_update**](ManagedDatabasesApi.md#managed_databases_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName} | 


# **managed_databases_complete_restore**
> managed_databases_complete_restore(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, parameters)



Completes the restore operation on a managed database.

### Example


```python
import openapi_client
from openapi_client.models.complete_database_restore_definition import CompleteDatabaseRestoreDefinition
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
    api_instance = openapi_client.ManagedDatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.CompleteDatabaseRestoreDefinition() # CompleteDatabaseRestoreDefinition | The definition for completing the restore of this managed database.

    try:
        api_instance.managed_databases_complete_restore(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, parameters)
    except Exception as e:
        print("Exception when calling ManagedDatabasesApi->managed_databases_complete_restore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**CompleteDatabaseRestoreDefinition**](CompleteDatabaseRestoreDefinition.md)| The definition for completing the restore of this managed database. | 

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
**200** | Successfully completed restore request. |  -  |
**202** | Completing restore request is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidDatabaseCompleteRestoreRequest - The complete database restore request is invalid   * 400 InvalidDatabaseCompleteRestoreRequestLastBackupName - The last backup name is invalid   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 SourceDatabaseNotFound - The source database does not exist.   * 400 TokenTooLong - The provided token is too long.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 MissingThumbprint - Can not find server certificate.   * 400 PartiallyContainedDatabaseUnsupported - \&quot;Backup for a partially contained database is not supported.\&quot;   * 400 RequiredBackupIsNotLastRestored - Migration cannot be completed because provided backup file name is not the name of the last backup file that is restored.   * 400 IncompatiblePhysicalLayoutTooFewDataFiles - Database backup contains incompatible physical layout. No data files are found in the backup.   * 400 IncompatiblePhysicalLayoutNonOnlineDataFilesExist - Database backup contains incompatible physical layout. Non-online data files exist.   * 400 IncompatiblePhysicalLayoutWrongNumberOfLogFiles - Database backup contains incompatible physical layout. Multiple log files are not supported.   * 400 IncompatiblePhysicalLayoutNonOnlineLogFilesExist - Database backup contains incompatible physical layout. Non-online log files exist.   * 400 IncompatiblePhysicalLayoutTooManyNonDataLogFiles - Database backup contains incompatible physical layout. Too many non-data/log files.   * 400 BackupSetNotFound - \&quot;No backups were found to restore the database. Please contact support to restore the database.   * 400 ExternalBackupAlreadySignaledToComplete - The restore request has already been signaled to complete.   * 400 FullBackupNotFound - Full backup can not be found.   * 400 ExternalBackupRestoreHasNotBeenStarted - The restore request can only be completed once the restore has started.   * 400 RestoreFromStripedBackupsNotEnabled - Restoring from striped backups is not supported.   * 400 BrokenRestorePlanNoFullBackup - The restore plan is broken because there is no full backup.   * 400 BrokenRestorePlanWrongLogBackupLSN - The restore plan is broken because firstLsn of current log backup is not &lt;&#x3D; lastLsn of next log backup.   * 400 BrokenRestorePlanWrongDiffBackupLSN - The restore plan is broken because firstLsn of diff backup is not &gt;&#x3D; firstLsn of full backup.   * 400 BrokenRestorePlanGapInLogBackups - The restore plan is broken because firstLsn of current log backup is not equal to lastLsn of prev log backup.   * 400 XtpInitializedDuringRestore - Memory-optimized filegroup must be empty in order to be restored on General Purpose tier of SQL Database Managed Instance.   * 400 ManagedInstanceStorageLimitHit - The managed instance has reached its storage limit. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_databases_create_or_update**
> ManagedDatabase managed_databases_create_or_update(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, parameters)



Creates a new database or updates an existing database.

### Example


```python
import openapi_client
from openapi_client.models.managed_database import ManagedDatabase
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
    api_instance = openapi_client.ManagedDatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedDatabase() # ManagedDatabase | The requested database resource state.

    try:
        api_response = api_instance.managed_databases_create_or_update(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, parameters)
        print("The response of ManagedDatabasesApi->managed_databases_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabasesApi->managed_databases_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedDatabase**](ManagedDatabase.md)| The requested database resource state. | 

### Return type

[**ManagedDatabase**](ManagedDatabase.md)

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
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 PitrPointInTimeInvalid - The point in time {0} is not valid. Valid point in time range from {1} days early to now and not before source server creation time.   * 400 CannotUseTrailingWhitespacesInDatabaseName - The database name validation failed.   * 400 InvalidBackupRetentionPeriod - The retention days of {0} is not a valid configuration. Valid backup retention in days must be between {1} and {2}   * 400 ManagedDatabaseNameInUse - Database &#39;{0}&#39; already exists. Choose a different database name.   * 400 NoMoreSpaceInManagedInstance - The managed instance has reached its storage limit. The storage usage for the managed instance cannot exceed (%d) MBs.   * 400 ManagedInstanceUpdateSloInProgress - \&quot;The operation could not be completed because a service tier change is in progress for managed instance &#39;{0}.&#39; Please wait for the operation in progress to complete and try again.\&quot;   * 400 SourceDatabaseNotFound - The source database does not exist.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 PasswordNotComplex - The provided password is not complex enough.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidServerName - Invalid server name specified.   * 400 SourceServerNotFound - The server part of a source database id provided in a CreateDatabaseAsCopy API call doesn&#39;t map to an existing server.   * 400 TokenTooLong - The provided token is too long.   * 400 CurrentDatabaseSizeExceedsMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 InvalidCollation - Collation is not recognized by the server.   * 400 ServerNotFound - The requested server was not found.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CurrentDatabaseLogSizeExceedsMaxSize - User attempted to change the database to a sku with lower max log size than the current usage.   * 400 DatabaseNumberLimitReached - Maximum number of databases for SQL Database Managed Instance reached.   * 400 InvalidDatabaseCreateOrUpdateRequest - The request body for the create or update database operation is invalid.   * 400 InvalidResourceId - Invalid resource identifier.   * 400 InvalidSourceDatabaseId - Invalid source database identifier.   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MissingCollation - Collation is required.   * 400 MissingSourceDatabaseId - Missing source database identifier.   * 400 MissingRestorePointInTime - Missing restore point in time   * 400 MissingStorageContainerSasToken - Missing storage container SAS token   * 400 MissingStorageContainerUri - Missing storage container URI   * 400 RestorableDroppedDatabaseIdGivenForRestoreWithSourceDatabaseId - Cannot specify restorableDroppedDatabaseId when sourceDatabaseId is already given in restore create mode   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found.   * 404 CannotFindServerCertificateWithThumbprint - Cannot find server certificate with thumbprint &#39;{0}&#39;. Please use PowerShell Cmdlet &#39;Add-AzureRmSqlManagedInstanceTransparentDataEncryptionCertificate&#39; to create the certificate.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 RestoreSourceDatabaseNotFound - Could not find database &#39;{0}&#39; at time &#39;{1}&#39; that can be restored.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ManagementServiceDatabaseBusy - Database &#39;{0}&#39; is busy with another operation. Please try your operation later.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows   * 503 DatabaseUnavailable - The operation failed because the database is unavailable.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_databases_delete**
> managed_databases_delete(resource_group_name, managed_instance_name, database_name, subscription_id, api_version)



Deletes a managed database.

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
    api_instance = openapi_client.ManagedDatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.managed_databases_delete(resource_group_name, managed_instance_name, database_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ManagedDatabasesApi->managed_databases_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
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
**200** | Successfully deleted the managed database. |  -  |
**202** | Deleting the managed database is in progress. |  -  |
**204** | The specified managed database does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 400 GeoReplicationDatabaseNotPrimary - The operation cannot be performed since the database &#39;{0}&#39; is a replication target.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 ManagedInstanceUpdateSloInProgress - \&quot;The operation could not be completed because a service tier change is in progress for managed instance &#39;{0}.&#39; Please wait for the operation in progress to complete and try again.\&quot;   * 400 DropDisallowedDuringFailover - Can not drop database because a failover operation is in progress on the failover group.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ServerDisabled - Server is disabled.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_databases_get**
> ManagedDatabase managed_databases_get(resource_group_name, managed_instance_name, database_name, subscription_id, api_version)



Gets a managed database.

### Example


```python
import openapi_client
from openapi_client.models.managed_database import ManagedDatabase
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
    api_instance = openapi_client.ManagedDatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_databases_get(resource_group_name, managed_instance_name, database_name, subscription_id, api_version)
        print("The response of ManagedDatabasesApi->managed_databases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabasesApi->managed_databases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedDatabase**](ManagedDatabase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified managed database. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_databases_list_by_instance**
> ManagedDatabaseListResult managed_databases_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)



Gets a list of managed databases.

### Example


```python
import openapi_client
from openapi_client.models.managed_database_list_result import ManagedDatabaseListResult
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
    api_instance = openapi_client.ManagedDatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_databases_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)
        print("The response of ManagedDatabasesApi->managed_databases_list_by_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabasesApi->managed_databases_list_by_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedDatabaseListResult**](ManagedDatabaseListResult.md)

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

# **managed_databases_update**
> ManagedDatabase managed_databases_update(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, parameters)



Updates an existing database.

### Example


```python
import openapi_client
from openapi_client.models.managed_database import ManagedDatabase
from openapi_client.models.managed_database_update import ManagedDatabaseUpdate
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
    api_instance = openapi_client.ManagedDatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedDatabaseUpdate() # ManagedDatabaseUpdate | The requested database resource state.

    try:
        api_response = api_instance.managed_databases_update(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, parameters)
        print("The response of ManagedDatabasesApi->managed_databases_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabasesApi->managed_databases_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedDatabaseUpdate**](ManagedDatabaseUpdate.md)| The requested database resource state. | 

### Return type

[**ManagedDatabase**](ManagedDatabase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the database. |  -  |
**202** | Updating the managed database is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 PitrPointInTimeInvalid - The point in time {0} is not valid. Valid point in time range from {1} days early to now and not before source server creation time.   * 400 CannotUseTrailingWhitespacesInDatabaseName - The database name validation failed.   * 400 InvalidBackupRetentionPeriod - The retention days of {0} is not a valid configuration. Valid backup retention in days must be between {1} and {2}   * 400 ManagedDatabaseNameInUse - Database &#39;{0}&#39; already exists. Choose a different database name.   * 400 NoMoreSpaceInManagedInstance - The managed instance has reached its storage limit. The storage usage for the managed instance cannot exceed (%d) MBs.   * 400 ManagedInstanceUpdateSloInProgress - \&quot;The operation could not be completed because a service tier change is in progress for managed instance &#39;{0}.&#39; Please wait for the operation in progress to complete and try again.\&quot;   * 400 SourceDatabaseNotFound - The source database does not exist.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 PasswordNotComplex - The provided password is not complex enough.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidServerName - Invalid server name specified.   * 400 SourceServerNotFound - The server part of a source database id provided in a CreateDatabaseAsCopy API call doesn&#39;t map to an existing server.   * 400 TokenTooLong - The provided token is too long.   * 400 CurrentDatabaseSizeExceedsMaxSize - User attempted to reduce the max size for a database to a size smaller than the current usage.   * 400 InvalidCollation - Collation is not recognized by the server.   * 400 ServerNotFound - The requested server was not found.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CurrentDatabaseLogSizeExceedsMaxSize - User attempted to change the database to a sku with lower max log size than the current usage.   * 400 DatabaseNumberLimitReached - Maximum number of databases for SQL Database Managed Instance reached.   * 400 InvalidDatabaseCreateOrUpdateRequest - The request body for the create or update database operation is invalid.   * 400 InvalidResourceId - Invalid resource identifier.   * 400 InvalidSourceDatabaseId - Invalid source database identifier.   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MissingCollation - Collation is required.   * 400 MissingSourceDatabaseId - Missing source database identifier.   * 400 MissingRestorePointInTime - Missing restore point in time   * 400 MissingStorageContainerSasToken - Missing storage container SAS token   * 400 MissingStorageContainerUri - Missing storage container URI   * 400 RestorableDroppedDatabaseIdGivenForRestoreWithSourceDatabaseId - Cannot specify restorableDroppedDatabaseId when sourceDatabaseId is already given in restore create mode   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found.   * 404 CannotFindServerCertificateWithThumbprint - Cannot find server certificate with thumbprint &#39;{0}&#39;. Please use PowerShell Cmdlet &#39;Add-AzureRmSqlManagedInstanceTransparentDataEncryptionCertificate&#39; to create the certificate.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 RestoreSourceDatabaseNotFound - Could not find database &#39;{0}&#39; at time &#39;{1}&#39; that can be restored.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ManagementServiceDatabaseBusy - Database &#39;{0}&#39; is busy with another operation. Please try your operation later.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 ActivateOrDeactivateWorkflowThrottling - Activation or deactivation workflow failed because there are too many concurrent workflows   * 503 DatabaseUnavailable - The operation failed because the database is unavailable.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

