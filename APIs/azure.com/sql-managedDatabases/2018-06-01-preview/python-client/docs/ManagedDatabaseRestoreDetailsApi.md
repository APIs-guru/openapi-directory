# openapi_client.ManagedDatabaseRestoreDetailsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_database_restore_details_get**](ManagedDatabaseRestoreDetailsApi.md#managed_database_restore_details_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/restoreDetails/{restoreDetailsName} | 


# **managed_database_restore_details_get**
> ManagedDatabaseRestoreDetailsResult managed_database_restore_details_get(resource_group_name, managed_instance_name, database_name, restore_details_name, subscription_id, api_version)



Gets managed database restore details.

### Example


```python
import openapi_client
from openapi_client.models.managed_database_restore_details_result import ManagedDatabaseRestoreDetailsResult
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
    api_instance = openapi_client.ManagedDatabaseRestoreDetailsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    restore_details_name = 'restore_details_name_example' # str | The name of the restore details to retrieve.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_database_restore_details_get(resource_group_name, managed_instance_name, database_name, restore_details_name, subscription_id, api_version)
        print("The response of ManagedDatabaseRestoreDetailsApi->managed_database_restore_details_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseRestoreDetailsApi->managed_database_restore_details_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **restore_details_name** | **str**| The name of the restore details to retrieve. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedDatabaseRestoreDetailsResult**](ManagedDatabaseRestoreDetailsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved restore details. |  -  |
**0** | *** Error Responses: ***   * 400 MissingThumbprint - Can not find server certificate.   * 400 PartiallyContainedDatabaseUnsupported - \&quot;Backup for a partially contained database is not supported.\&quot;   * 400 RequiredBackupIsNotLastRestored - Migration cannot be completed because provided backup file name is not the name of the last backup file that is restored.   * 400 IncompatiblePhysicalLayoutTooFewDataFiles - Database backup contains incompatible physical layout. No data files are found in the backup.   * 400 IncompatiblePhysicalLayoutNonOnlineDataFilesExist - Database backup contains incompatible physical layout. Non-online data files exist.   * 400 IncompatiblePhysicalLayoutWrongNumberOfLogFiles - Database backup contains incompatible physical layout. Multiple log files are not supported.   * 400 IncompatiblePhysicalLayoutNonOnlineLogFilesExist - Database backup contains incompatible physical layout. Non-online log files exist.   * 400 IncompatiblePhysicalLayoutTooManyNonDataLogFiles - Database backup contains incompatible physical layout. Too many non-data/log files.   * 400 BackupSetNotFound - \&quot;No backups were found to restore the database. Please contact support to restore the database.   * 400 ExternalBackupAlreadySignaledToComplete - The restore request has already been signaled to complete.   * 400 FullBackupNotFound - Full backup can not be found.   * 400 ExternalBackupRestoreHasNotBeenStarted - The restore request can only be completed once the restore has started.   * 400 RestoreFromStripedBackupsNotEnabled - Restoring from striped backups is not supported.   * 400 BrokenRestorePlanNoFullBackup - The restore plan is broken because there is no full backup.   * 400 BrokenRestorePlanWrongLogBackupLSN - The restore plan is broken because firstLsn of current log backup is not &lt;&#x3D; lastLsn of next log backup.   * 400 BrokenRestorePlanWrongDiffBackupLSN - The restore plan is broken because firstLsn of diff backup is not &gt;&#x3D; firstLsn of full backup.   * 400 BrokenRestorePlanGapInLogBackups - The restore plan is broken because firstLsn of current log backup is not equal to lastLsn of prev log backup.   * 400 XtpInitializedDuringRestore - Memory-optimized filegroup must be empty in order to be restored on General Purpose tier of SQL Database Managed Instance.   * 400 ManagedInstanceStorageLimitHit - The managed instance has reached its storage limit.   * 400 ManagedDatabaseNotInRestoringState - Managed database is not in Restoring state. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

