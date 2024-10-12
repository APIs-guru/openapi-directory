# PowerPort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**allocated_draw** | **int** | Allocated power draw (watts) | [optional] 
**cable** | [**NestedCable**](NestedCable.md) |  | [optional] 
**cable_end** | **str** |  | [optional] [readonly] 
**connected_endpoints** | **List[Optional[str]]** |  Return the appropriate serializer for the type of connected object.  | [optional] [readonly] 
**connected_endpoints_reachable** | **bool** |  | [optional] [readonly] 
**connected_endpoints_type** | **str** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | [**NestedDevice**](NestedDevice.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**link_peers** | **List[Optional[str]]** |  Return the appropriate serializer for the link termination model.  | [optional] [readonly] 
**link_peers_type** | **str** |  | [optional] [readonly] 
**mark_connected** | **bool** | Treat as if a cable is connected | [optional] 
**maximum_draw** | **int** | Maximum power draw (watts) | [optional] 
**module** | [**ComponentNestedModule**](ComponentNestedModule.md) |  | [optional] 
**name** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**type** | [**Type7**](Type7.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.power_port import PowerPort

# TODO update the JSON string below
json = "{}"
# create an instance of PowerPort from a JSON string
power_port_instance = PowerPort.from_json(json)
# print the JSON string representation of the object
print(PowerPort.to_json())

# convert the object into a dict
power_port_dict = power_port_instance.to_dict()
# create an instance of PowerPort from a dict
power_port_from_dict = PowerPort.from_dict(power_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


