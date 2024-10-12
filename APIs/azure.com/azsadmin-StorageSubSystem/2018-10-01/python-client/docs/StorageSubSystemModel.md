# StorageSubSystemModel

All properties of a storage subsystem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_status** | **str** | Health status of the subsystem. | [optional] 
**operational_status** | **str** | Operational status of the subsystem. | [optional] 
**rebalance_status** | **str** | Rebalance status of the subsystem. | [optional] 
**remaining_capacity_gb** | **int** | Remaining capacity in GB of the subsystem. | [optional] 
**total_capacity_gb** | **int** | Total capacity in GB of the subsystem. | [optional] 

## Example

```python
from openapi_client.models.storage_sub_system_model import StorageSubSystemModel

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSubSystemModel from a JSON string
storage_sub_system_model_instance = StorageSubSystemModel.from_json(json)
# print the JSON string representation of the object
print(StorageSubSystemModel.to_json())

# convert the object into a dict
storage_sub_system_model_dict = storage_sub_system_model_instance.to_dict()
# create an instance of StorageSubSystemModel from a dict
storage_sub_system_model_from_dict = StorageSubSystemModel.from_dict(storage_sub_system_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


