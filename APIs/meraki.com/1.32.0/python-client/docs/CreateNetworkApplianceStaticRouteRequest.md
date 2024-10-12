# CreateNetworkApplianceStaticRouteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_ip** | **str** | The gateway IP (next hop) of the static route | 
**gateway_vlan_id** | **str** | The gateway IP (next hop) VLAN ID of the static route | [optional] 
**name** | **str** | The name of the new static route | 
**subnet** | **str** | The subnet of the static route | 

## Example

```python
from openapi_client.models.create_network_appliance_static_route_request import CreateNetworkApplianceStaticRouteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkApplianceStaticRouteRequest from a JSON string
create_network_appliance_static_route_request_instance = CreateNetworkApplianceStaticRouteRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkApplianceStaticRouteRequest.to_json())

# convert the object into a dict
create_network_appliance_static_route_request_dict = create_network_appliance_static_route_request_instance.to_dict()
# create an instance of CreateNetworkApplianceStaticRouteRequest from a dict
create_network_appliance_static_route_request_from_dict = CreateNetworkApplianceStaticRouteRequest.from_dict(create_network_appliance_static_route_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


