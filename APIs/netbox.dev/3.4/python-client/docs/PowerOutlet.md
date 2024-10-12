# PowerOutlet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
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
**feed_leg** | [**FeedLeg**](FeedLeg.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**link_peers** | **List[Optional[str]]** |  Return the appropriate serializer for the link termination model.  | [optional] [readonly] 
**link_peers_type** | **str** |  | [optional] [readonly] 
**mark_connected** | **bool** | Treat as if a cable is connected | [optional] 
**module** | [**ComponentNestedModule**](ComponentNestedModule.md) |  | [optional] 
**name** | **str** |  | 
**power_port** | [**NestedPowerPort**](NestedPowerPort.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**type** | [**Type6**](Type6.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.power_outlet import PowerOutlet

# TODO update the JSON string below
json = "{}"
# create an instance of PowerOutlet from a JSON string
power_outlet_instance = PowerOutlet.from_json(json)
# print the JSON string representation of the object
print(PowerOutlet.to_json())

# convert the object into a dict
power_outlet_dict = power_outlet_instance.to_dict()
# create an instance of PowerOutlet from a dict
power_outlet_from_dict = PowerOutlet.from_dict(power_outlet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


