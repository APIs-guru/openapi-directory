# EnableBackupDescription

Specifies the parameters needed to enable periodic backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_policy_name** | **str** | Name of the backup policy to be used for enabling periodic backups. | 

## Example

```python
from openapi_client.models.enable_backup_description import EnableBackupDescription

# TODO update the JSON string below
json = "{}"
# create an instance of EnableBackupDescription from a JSON string
enable_backup_description_instance = EnableBackupDescription.from_json(json)
# print the JSON string representation of the object
print(EnableBackupDescription.to_json())

# convert the object into a dict
enable_backup_description_dict = enable_backup_description_instance.to_dict()
# create an instance of EnableBackupDescription from a dict
enable_backup_description_from_dict = EnableBackupDescription.from_dict(enable_backup_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


