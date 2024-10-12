# FileShareBackupStorageDescription

Describes the parameters for file share storage used for storing or enumerating backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | UNC path of the file share where to store or enumerate backups from. | 
**primary_password** | **str** | Primary password to access the share location. | [optional] 
**primary_user_name** | **str** | Primary user name to access the file share. | [optional] 
**secondary_password** | **str** | Secondary password to access the share location | [optional] 
**secondary_user_name** | **str** | Secondary user name to access the file share. | [optional] 

## Example

```python
from openapi_client.models.file_share_backup_storage_description import FileShareBackupStorageDescription

# TODO update the JSON string below
json = "{}"
# create an instance of FileShareBackupStorageDescription from a JSON string
file_share_backup_storage_description_instance = FileShareBackupStorageDescription.from_json(json)
# print the JSON string representation of the object
print(FileShareBackupStorageDescription.to_json())

# convert the object into a dict
file_share_backup_storage_description_dict = file_share_backup_storage_description_instance.to_dict()
# create an instance of FileShareBackupStorageDescription from a dict
file_share_backup_storage_description_from_dict = FileShareBackupStorageDescription.from_dict(file_share_backup_storage_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


