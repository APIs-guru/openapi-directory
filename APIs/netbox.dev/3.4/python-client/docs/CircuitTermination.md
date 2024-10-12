# CircuitTermination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**cable** | [**NestedCable**](NestedCable.md) |  | [optional] 
**cable_end** | **str** |  | [optional] [readonly] 
**circuit** | [**NestedCircuit**](NestedCircuit.md) |  | 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**link_peers** | **List[Optional[str]]** |  Return the appropriate serializer for the link termination model.  | [optional] [readonly] 
**link_peers_type** | **str** |  | [optional] [readonly] 
**mark_connected** | **bool** | Treat as if a cable is connected | [optional] 
**port_speed** | **int** |  | [optional] 
**pp_info** | **str** |  | [optional] 
**provider_network** | [**NestedProviderNetwork**](NestedProviderNetwork.md) |  | [optional] 
**site** | [**NestedSite**](NestedSite.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**term_side** | **str** |  | 
**upstream_speed** | **int** | Upstream speed, if different from port speed | [optional] 
**url** | **str** |  | [optional] [readonly] 
**xconnect_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.circuit_termination import CircuitTermination

# TODO update the JSON string below
json = "{}"
# create an instance of CircuitTermination from a JSON string
circuit_termination_instance = CircuitTermination.from_json(json)
# print the JSON string representation of the object
print(CircuitTermination.to_json())

# convert the object into a dict
circuit_termination_dict = circuit_termination_instance.to_dict()
# create an instance of CircuitTermination from a dict
circuit_termination_from_dict = CircuitTermination.from_dict(circuit_termination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


