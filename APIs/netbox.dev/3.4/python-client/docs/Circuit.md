# Circuit


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
**provider** | [**NestedProvider**](NestedProvider.md) |  | 
**status** | [**Status1**](Status1.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**termination_a** | [**CircuitCircuitTermination**](CircuitCircuitTermination.md) |  | [optional] 
**termination_date** | **date** |  | [optional] 
**termination_z** | [**CircuitCircuitTermination**](CircuitCircuitTermination.md) |  | [optional] 
**type** | [**NestedCircuitType**](NestedCircuitType.md) |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.circuit import Circuit

# TODO update the JSON string below
json = "{}"
# create an instance of Circuit from a JSON string
circuit_instance = Circuit.from_json(json)
# print the JSON string representation of the object
print(Circuit.to_json())

# convert the object into a dict
circuit_dict = circuit_instance.to_dict()
# create an instance of Circuit from a dict
circuit_from_dict = Circuit.from_dict(circuit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


