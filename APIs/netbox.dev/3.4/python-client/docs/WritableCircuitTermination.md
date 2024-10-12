# WritableCircuitTermination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**cable** | [**NestedCable**](NestedCable.md) |  | [optional] 
**cable_end** | **str** |  | [optional] [readonly] 
**circuit** | **int** |  | 
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
**provider_network** | **int** |  | [optional] 
**site** | **int** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**term_side** | **str** |  | 
**upstream_speed** | **int** | Upstream speed, if different from port speed | [optional] 
**url** | **str** |  | [optional] [readonly] 
**xconnect_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.writable_circuit_termination import WritableCircuitTermination

# TODO update the JSON string below
json = "{}"
# create an instance of WritableCircuitTermination from a JSON string
writable_circuit_termination_instance = WritableCircuitTermination.from_json(json)
# print the JSON string representation of the object
print(WritableCircuitTermination.to_json())

# convert the object into a dict
writable_circuit_termination_dict = writable_circuit_termination_instance.to_dict()
# create an instance of WritableCircuitTermination from a dict
writable_circuit_termination_from_dict = WritableCircuitTermination.from_dict(writable_circuit_termination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


