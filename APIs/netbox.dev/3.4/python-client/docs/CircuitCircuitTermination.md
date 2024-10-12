# CircuitCircuitTermination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**port_speed** | **int** |  | [optional] 
**provider_network** | [**NestedProviderNetwork**](NestedProviderNetwork.md) |  | 
**site** | [**NestedSite**](NestedSite.md) |  | 
**upstream_speed** | **int** | Upstream speed, if different from port speed | [optional] 
**url** | **str** |  | [optional] [readonly] 
**xconnect_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.circuit_circuit_termination import CircuitCircuitTermination

# TODO update the JSON string below
json = "{}"
# create an instance of CircuitCircuitTermination from a JSON string
circuit_circuit_termination_instance = CircuitCircuitTermination.from_json(json)
# print the JSON string representation of the object
print(CircuitCircuitTermination.to_json())

# convert the object into a dict
circuit_circuit_termination_dict = circuit_circuit_termination_instance.to_dict()
# create an instance of CircuitCircuitTermination from a dict
circuit_circuit_termination_from_dict = CircuitCircuitTermination.from_dict(circuit_circuit_termination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


