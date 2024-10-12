# BackupProgressInfo

Describes the progress of a partition's backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_id** | **str** | Unique ID of the newly created backup. | [optional] 
**backup_location** | **str** | Location, relative to the backup store, of the newly created backup. | [optional] 
**backup_state** | [**BackupState**](BackupState.md) |  | [optional] 
**epoch_of_last_backup_record** | [**Epoch**](Epoch.md) |  | [optional] 
**failure_error** | [**FabricErrorError**](FabricErrorError.md) |  | [optional] 
**lsn_of_last_backup_record** | **str** | The LSN of last record included in backup. | [optional] 
**time_stamp_utc** | **datetime** | TimeStamp in UTC when operation succeeded or failed. | [optional] 

## Example

```python
from openapi_client.models.backup_progress_info import BackupProgressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BackupProgressInfo from a JSON string
backup_progress_info_instance = BackupProgressInfo.from_json(json)
# print the JSON string representation of the object
print(BackupProgressInfo.to_json())

# convert the object into a dict
backup_progress_info_dict = backup_progress_info_instance.to_dict()
# create an instance of BackupProgressInfo from a dict
backup_progress_info_from_dict = BackupProgressInfo.from_dict(backup_progress_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


