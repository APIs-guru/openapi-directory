# BackupSecretResult

The backup secret result, containing the backup blob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The backup blob containing the backed up secret. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_secret_result import BackupSecretResult

# TODO update the JSON string below
json = "{}"
# create an instance of BackupSecretResult from a JSON string
backup_secret_result_instance = BackupSecretResult.from_json(json)
# print the JSON string representation of the object
print(BackupSecretResult.to_json())

# convert the object into a dict
backup_secret_result_dict = backup_secret_result_instance.to_dict()
# create an instance of BackupSecretResult from a dict
backup_secret_result_from_dict = BackupSecretResult.from_dict(backup_secret_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


