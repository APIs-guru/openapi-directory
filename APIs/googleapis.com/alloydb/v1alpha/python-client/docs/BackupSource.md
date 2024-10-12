# BackupSource

Message describing a BackupSource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_name** | **str** | Required. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id} | [optional] 
**backup_uid** | **str** | Output only. The system-generated UID of the backup which was used to create this resource. The UID is generated when the backup is created, and it is retained until the backup is deleted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_source import BackupSource

# TODO update the JSON string below
json = "{}"
# create an instance of BackupSource from a JSON string
backup_source_instance = BackupSource.from_json(json)
# print the JSON string representation of the object
print(BackupSource.to_json())

# convert the object into a dict
backup_source_dict = backup_source_instance.to_dict()
# create an instance of BackupSource from a dict
backup_source_from_dict = BackupSource.from_dict(backup_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


