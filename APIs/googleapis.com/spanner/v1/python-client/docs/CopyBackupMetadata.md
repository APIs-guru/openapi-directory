# CopyBackupMetadata

Metadata type for the operation returned by CopyBackup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_time** | **str** | The time at which cancellation of CopyBackup operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to &#x60;Code.CANCELLED&#x60;. | [optional] 
**name** | **str** | The name of the backup being created through the copy operation. Values are of the form &#x60;projects//instances//backups/&#x60;. | [optional] 
**progress** | [**OperationProgress**](OperationProgress.md) |  | [optional] 
**source_backup** | **str** | The name of the source backup that is being copied. Values are of the form &#x60;projects//instances//backups/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.copy_backup_metadata import CopyBackupMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CopyBackupMetadata from a JSON string
copy_backup_metadata_instance = CopyBackupMetadata.from_json(json)
# print the JSON string representation of the object
print(CopyBackupMetadata.to_json())

# convert the object into a dict
copy_backup_metadata_dict = copy_backup_metadata_instance.to_dict()
# create an instance of CopyBackupMetadata from a dict
copy_backup_metadata_from_dict = CopyBackupMetadata.from_dict(copy_backup_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


