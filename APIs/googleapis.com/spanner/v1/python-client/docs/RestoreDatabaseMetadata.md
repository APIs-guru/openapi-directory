# RestoreDatabaseMetadata

Metadata type for the long-running operation returned by RestoreDatabase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_info** | [**BackupInfo**](BackupInfo.md) |  | [optional] 
**cancel_time** | **str** | The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to &#x60;Code.CANCELLED&#x60;. | [optional] 
**name** | **str** | Name of the database being created and restored to. | [optional] 
**optimize_database_operation_name** | **str** | If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored database, and remove the dependency on the restore source. The name is of the form &#x60;projects//instances//databases//operations/&#x60; where the is the name of database being created and restored to. The metadata type of the long-running operation is OptimizeRestoredDatabaseMetadata. This long-running operation will be automatically created by the system after the RestoreDatabase long-running operation completes successfully. This operation will not be created if the restore was not successful. | [optional] 
**progress** | [**OperationProgress**](OperationProgress.md) |  | [optional] 
**source_type** | **str** | The type of the restore source. | [optional] 

## Example

```python
from openapi_client.models.restore_database_metadata import RestoreDatabaseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreDatabaseMetadata from a JSON string
restore_database_metadata_instance = RestoreDatabaseMetadata.from_json(json)
# print the JSON string representation of the object
print(RestoreDatabaseMetadata.to_json())

# convert the object into a dict
restore_database_metadata_dict = restore_database_metadata_instance.to_dict()
# create an instance of RestoreDatabaseMetadata from a dict
restore_database_metadata_from_dict = RestoreDatabaseMetadata.from_dict(restore_database_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


