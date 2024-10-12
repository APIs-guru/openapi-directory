# StorageSystemModel

All properties of a storage system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_capacity_gb** | **int** | Total capacity of the system. | [optional] 

## Example

```python
from openapi_client.models.storage_system_model import StorageSystemModel

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSystemModel from a JSON string
storage_system_model_instance = StorageSystemModel.from_json(json)
# print the JSON string representation of the object
print(StorageSystemModel.to_json())

# convert the object into a dict
storage_system_model_dict = storage_system_model_instance.to_dict()
# create an instance of StorageSystemModel from a dict
storage_system_model_from_dict = StorageSystemModel.from_dict(storage_system_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


