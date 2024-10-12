# BackupLocationModel

Properties of a backup location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_store_default** | [**ExternalStore**](ExternalStore.md) |  | [optional] 

## Example

```python
from openapi_client.models.backup_location_model import BackupLocationModel

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLocationModel from a JSON string
backup_location_model_instance = BackupLocationModel.from_json(json)
# print the JSON string representation of the object
print(BackupLocationModel.to_json())

# convert the object into a dict
backup_location_model_dict = backup_location_model_instance.to_dict()
# create an instance of BackupLocationModel from a dict
backup_location_model_from_dict = BackupLocationModel.from_dict(backup_location_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


