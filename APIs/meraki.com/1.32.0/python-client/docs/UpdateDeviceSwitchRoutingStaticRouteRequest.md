# UpdateDeviceSwitchRoutingStaticRouteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertise_via_ospf_enabled** | **bool** | Option to advertise static route via OSPF | [optional] 
**name** | **str** | Name or description for layer 3 static route | [optional] 
**next_hop_ip** | **str** | IP address of the next hop device to which the device sends its traffic for the subnet | [optional] 
**prefer_over_ospf_routes_enabled** | **bool** | Option to prefer static route over OSPF routes | [optional] 
**subnet** | **str** | The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24) | [optional] 

## Example

```python
from openapi_client.models.update_device_switch_routing_static_route_request import UpdateDeviceSwitchRoutingStaticRouteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceSwitchRoutingStaticRouteRequest from a JSON string
update_device_switch_routing_static_route_request_instance = UpdateDeviceSwitchRoutingStaticRouteRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceSwitchRoutingStaticRouteRequest.to_json())

# convert the object into a dict
update_device_switch_routing_static_route_request_dict = update_device_switch_routing_static_route_request_instance.to_dict()
# create an instance of UpdateDeviceSwitchRoutingStaticRouteRequest from a dict
update_device_switch_routing_static_route_request_from_dict = UpdateDeviceSwitchRoutingStaticRouteRequest.from_dict(update_device_switch_routing_static_route_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


