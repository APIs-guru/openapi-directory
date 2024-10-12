# FrontPort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**cable** | [**NestedCable**](NestedCable.md) |  | [optional] 
**cable_end** | **str** |  | [optional] [readonly] 
**color** | **str** |  | [optional] 
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
**module** | [**ComponentNestedModule**](ComponentNestedModule.md) |  | [optional] 
**name** | **str** |  | 
**rear_port** | [**FrontPortRearPort**](FrontPortRearPort.md) |  | 
**rear_port_position** | **int** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**type** | [**Type2**](Type2.md) |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.front_port import FrontPort

# TODO update the JSON string below
json = "{}"
# create an instance of FrontPort from a JSON string
front_port_instance = FrontPort.from_json(json)
# print the JSON string representation of the object
print(FrontPort.to_json())

# convert the object into a dict
front_port_dict = front_port_instance.to_dict()
# create an instance of FrontPort from a dict
front_port_from_dict = FrontPort.from_dict(front_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


