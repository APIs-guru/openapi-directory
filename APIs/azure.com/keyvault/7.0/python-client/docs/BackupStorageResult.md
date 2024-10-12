# BackupStorageResult

The backup storage result, containing the backup blob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The backup blob containing the backed up storage account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_storage_result import BackupStorageResult

# TODO update the JSON string below
json = "{}"
# create an instance of BackupStorageResult from a JSON string
backup_storage_result_instance = BackupStorageResult.from_json(json)
# print the JSON string representation of the object
print(BackupStorageResult.to_json())

# convert the object into a dict
backup_storage_result_dict = backup_storage_result_instance.to_dict()
# create an instance of BackupStorageResult from a dict
backup_storage_result_from_dict = BackupStorageResult.from_dict(backup_storage_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


