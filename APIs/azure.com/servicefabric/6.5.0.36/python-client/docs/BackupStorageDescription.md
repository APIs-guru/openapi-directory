# BackupStorageDescription

Describes the parameters for the backup storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | Friendly name for this backup storage. | [optional] 
**storage_kind** | [**BackupStorageKind**](BackupStorageKind.md) |  | 

## Example

```python
from openapi_client.models.backup_storage_description import BackupStorageDescription

# TODO update the JSON string below
json = "{}"
# create an instance of BackupStorageDescription from a JSON string
backup_storage_description_instance = BackupStorageDescription.from_json(json)
# print the JSON string representation of the object
print(BackupStorageDescription.to_json())

# convert the object into a dict
backup_storage_description_dict = backup_storage_description_instance.to_dict()
# create an instance of BackupStorageDescription from a dict
backup_storage_description_from_dict = BackupStorageDescription.from_dict(backup_storage_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


