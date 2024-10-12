# NestedCircuitType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circuit_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_circuit_type import NestedCircuitType

# TODO update the JSON string below
json = "{}"
# create an instance of NestedCircuitType from a JSON string
nested_circuit_type_instance = NestedCircuitType.from_json(json)
# print the JSON string representation of the object
print(NestedCircuitType.to_json())

# convert the object into a dict
nested_circuit_type_dict = nested_circuit_type_instance.to_dict()
# create an instance of NestedCircuitType from a dict
nested_circuit_type_from_dict = NestedCircuitType.from_dict(nested_circuit_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


