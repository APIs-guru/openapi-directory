# CircuitType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circuit_count** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.circuit_type import CircuitType

# TODO update the JSON string below
json = "{}"
# create an instance of CircuitType from a JSON string
circuit_type_instance = CircuitType.from_json(json)
# print the JSON string representation of the object
print(CircuitType.to_json())

# convert the object into a dict
circuit_type_dict = circuit_type_instance.to_dict()
# create an instance of CircuitType from a dict
circuit_type_from_dict = CircuitType.from_dict(circuit_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


