# BackupModel

Properties for a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_info** | [**BackupInfo**](BackupInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.backup_model import BackupModel

# TODO update the JSON string below
json = "{}"
# create an instance of BackupModel from a JSON string
backup_model_instance = BackupModel.from_json(json)
# print the JSON string representation of the object
print(BackupModel.to_json())

# convert the object into a dict
backup_model_dict = backup_model_instance.to_dict()
# create an instance of BackupModel from a dict
backup_model_from_dict = BackupModel.from_dict(backup_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


