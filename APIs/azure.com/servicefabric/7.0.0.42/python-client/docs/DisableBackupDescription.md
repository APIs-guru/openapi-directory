# DisableBackupDescription

It describes the body parameters while disabling backup of a backup entity(Application/Service/Partition).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clean_backup** | **bool** | Boolean flag to delete backups. It can be set to true for deleting all the backups which were created for the backup entity that is getting disabled for backup. | 

## Example

```python
from openapi_client.models.disable_backup_description import DisableBackupDescription

# TODO update the JSON string below
json = "{}"
# create an instance of DisableBackupDescription from a JSON string
disable_backup_description_instance = DisableBackupDescription.from_json(json)
# print the JSON string representation of the object
print(DisableBackupDescription.to_json())

# convert the object into a dict
disable_backup_description_dict = disable_backup_description_instance.to_dict()
# create an instance of DisableBackupDescription from a dict
disable_backup_description_from_dict = DisableBackupDescription.from_dict(disable_backup_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


