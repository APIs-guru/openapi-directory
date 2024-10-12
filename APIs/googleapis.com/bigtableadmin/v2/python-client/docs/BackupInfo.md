# BackupInfo

Information about a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | Output only. Name of the backup. | [optional] [readonly] 
**end_time** | **str** | Output only. This time that the backup was finished. Row data in the backup will be no newer than this timestamp. | [optional] [readonly] 
**source_backup** | **str** | Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//clusters//backups/ | [optional] [readonly] 
**source_table** | **str** | Output only. Name of the table the backup was created from. | [optional] [readonly] 
**start_time** | **str** | Output only. The time that the backup was started. Row data in the backup will be no older than this timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_info import BackupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BackupInfo from a JSON string
backup_info_instance = BackupInfo.from_json(json)
# print the JSON string representation of the object
print(BackupInfo.to_json())

# convert the object into a dict
backup_info_dict = backup_info_instance.to_dict()
# create an instance of BackupInfo from a dict
backup_info_from_dict = BackupInfo.from_dict(backup_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


