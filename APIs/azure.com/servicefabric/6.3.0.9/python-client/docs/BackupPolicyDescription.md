# BackupPolicyDescription

Describes a backup policy for configuring periodic backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_restore_on_data_loss** | **bool** | Specifies whether to trigger restore automatically using the latest available backup in case the partition experiences a data loss event. | 
**max_incremental_backups** | **int** | Defines the maximum number of incremental backups to be taken between two full backups. This is just the upper limit. A full backup may be taken before specified number of incremental backups are completed in one of the following conditions - The replica has never taken a full backup since it has become primary, - Some of the log records since the last backup has been truncated, or - Replica passed the MaxAccumulatedBackupLogSizeInMB limit. | 
**name** | **str** | The unique name identifying this backup policy. | 
**schedule** | [**BackupScheduleDescription**](BackupScheduleDescription.md) |  | 
**storage** | [**BackupStorageDescription**](BackupStorageDescription.md) |  | 

## Example

```python
from openapi_client.models.backup_policy_description import BackupPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of BackupPolicyDescription from a JSON string
backup_policy_description_instance = BackupPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(BackupPolicyDescription.to_json())

# convert the object into a dict
backup_policy_description_dict = backup_policy_description_instance.to_dict()
# create an instance of BackupPolicyDescription from a dict
backup_policy_description_from_dict = BackupPolicyDescription.from_dict(backup_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


