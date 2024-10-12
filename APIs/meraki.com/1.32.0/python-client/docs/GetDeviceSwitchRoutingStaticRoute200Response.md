# GetDeviceSwitchRoutingStaticRoute200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertise_via_ospf_enabled** | **bool** | Option to advertise static routes via OSPF | [optional] 
**name** | **str** | The name or description of the layer 3 static route | [optional] 
**next_hop_ip** | **str** |  The IP address of the router to which traffic for this destination network should be sent | 
**prefer_over_ospf_routes_enabled** | **bool** | Option to prefer static routes over OSPF routes | [optional] 
**static_route_id** | **str** | The identifier of a layer 3 static route | [optional] 
**subnet** | **str** | The IP address of the subnetwork specified in CIDR notation (ex. 1.2.3.0/24) | 

## Example

```python
from openapi_client.models.get_device_switch_routing_static_route200_response import GetDeviceSwitchRoutingStaticRoute200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchRoutingStaticRoute200Response from a JSON string
get_device_switch_routing_static_route200_response_instance = GetDeviceSwitchRoutingStaticRoute200Response.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchRoutingStaticRoute200Response.to_json())

# convert the object into a dict
get_device_switch_routing_static_route200_response_dict = get_device_switch_routing_static_route200_response_instance.to_dict()
# create an instance of GetDeviceSwitchRoutingStaticRoute200Response from a dict
get_device_switch_routing_static_route200_response_from_dict = GetDeviceSwitchRoutingStaticRoute200Response.from_dict(get_device_switch_routing_static_route200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


