# CreateBackupMetadata

Metadata type for the operation returned by CreateBackup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_time** | **str** | The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to &#x60;Code.CANCELLED&#x60;. | [optional] 
**database** | **str** | The name of the database the backup is created from. | [optional] 
**name** | **str** | The name of the backup being created. | [optional] 
**progress** | [**OperationProgress**](OperationProgress.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_backup_metadata import CreateBackupMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBackupMetadata from a JSON string
create_backup_metadata_instance = CreateBackupMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateBackupMetadata.to_json())

# convert the object into a dict
create_backup_metadata_dict = create_backup_metadata_instance.to_dict()
# create an instance of CreateBackupMetadata from a dict
create_backup_metadata_from_dict = CreateBackupMetadata.from_dict(create_backup_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


