# CreateDeviceSwitchRoutingStaticRouteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertise_via_ospf_enabled** | **bool** | Option to advertise static route via OSPF | [optional] 
**name** | **str** | Name or description for layer 3 static route | [optional] 
**next_hop_ip** | **str** | IP address of the next hop device to which the device sends its traffic for the subnet | 
**prefer_over_ospf_routes_enabled** | **bool** | Option to prefer static route over OSPF routes | [optional] 
**subnet** | **str** | The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24) | 

## Example

```python
from openapi_client.models.create_device_switch_routing_static_route_request import CreateDeviceSwitchRoutingStaticRouteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceSwitchRoutingStaticRouteRequest from a JSON string
create_device_switch_routing_static_route_request_instance = CreateDeviceSwitchRoutingStaticRouteRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceSwitchRoutingStaticRouteRequest.to_json())

# convert the object into a dict
create_device_switch_routing_static_route_request_dict = create_device_switch_routing_static_route_request_instance.to_dict()
# create an instance of CreateDeviceSwitchRoutingStaticRouteRequest from a dict
create_device_switch_routing_static_route_request_from_dict = CreateDeviceSwitchRoutingStaticRouteRequest.from_dict(create_device_switch_routing_static_route_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


