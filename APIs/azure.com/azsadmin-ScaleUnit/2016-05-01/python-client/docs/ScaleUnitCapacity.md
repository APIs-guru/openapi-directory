# ScaleUnitCapacity

The capacity information for a physical machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cores** | **int** | The number of CPU cores for the physical machine. | [optional] 
**memory_gb** | **float** | The memory for the physical machine. | [optional] 

## Example

```python
from openapi_client.models.scale_unit_capacity import ScaleUnitCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleUnitCapacity from a JSON string
scale_unit_capacity_instance = ScaleUnitCapacity.from_json(json)
# print the JSON string representation of the object
print(ScaleUnitCapacity.to_json())

# convert the object into a dict
scale_unit_capacity_dict = scale_unit_capacity_instance.to_dict()
# create an instance of ScaleUnitCapacity from a dict
scale_unit_capacity_from_dict = ScaleUnitCapacity.from_dict(scale_unit_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


