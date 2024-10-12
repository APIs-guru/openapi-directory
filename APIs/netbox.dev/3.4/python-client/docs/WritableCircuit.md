# WritableCircuit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cid** | **str** |  | 
**comments** | **str** |  | [optional] 
**commit_rate** | **int** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**install_date** | **date** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**provider** | **int** |  | 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**termination_a** | **int** |  | [optional] [readonly] 
**termination_date** | **date** |  | [optional] 
**termination_z** | **int** |  | [optional] [readonly] 
**type** | **int** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_circuit import WritableCircuit

# TODO update the JSON string below
json = "{}"
# create an instance of WritableCircuit from a JSON string
writable_circuit_instance = WritableCircuit.from_json(json)
# print the JSON string representation of the object
print(WritableCircuit.to_json())

# convert the object into a dict
writable_circuit_dict = writable_circuit_instance.to_dict()
# create an instance of WritableCircuit from a dict
writable_circuit_from_dict = WritableCircuit.from_dict(writable_circuit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


