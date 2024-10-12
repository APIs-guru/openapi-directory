# NestedCircuit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cid** | **str** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_circuit import NestedCircuit

# TODO update the JSON string below
json = "{}"
# create an instance of NestedCircuit from a JSON string
nested_circuit_instance = NestedCircuit.from_json(json)
# print the JSON string representation of the object
print(NestedCircuit.to_json())

# convert the object into a dict
nested_circuit_dict = nested_circuit_instance.to_dict()
# create an instance of NestedCircuit from a dict
nested_circuit_from_dict = NestedCircuit.from_dict(nested_circuit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


