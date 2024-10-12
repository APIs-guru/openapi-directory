# BackupKeyResult

The backup key result, containing the backup blob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The backup blob containing the backed up key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_key_result import BackupKeyResult

# TODO update the JSON string below
json = "{}"
# create an instance of BackupKeyResult from a JSON string
backup_key_result_instance = BackupKeyResult.from_json(json)
# print the JSON string representation of the object
print(BackupKeyResult.to_json())

# convert the object into a dict
backup_key_result_dict = backup_key_result_instance.to_dict()
# create an instance of BackupKeyResult from a dict
backup_key_result_from_dict = BackupKeyResult.from_dict(backup_key_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


