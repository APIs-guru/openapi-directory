# UpdateNetworkStaticRouteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | The enabled state of the static route | [optional] 
**fixed_ip_assignments** | **object** | The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \&quot;ip\&quot; and \&quot;name\&quot; string fields. See the sample request/response for more details. | [optional] 
**gateway_ip** | **str** | The gateway IP (next hop) of the static route | [optional] 
**name** | **str** | The name of the static route | [optional] 
**reserved_ip_ranges** | [**List[UpdateNetworkStaticRouteRequestReservedIpRangesInner]**](UpdateNetworkStaticRouteRequestReservedIpRangesInner.md) | The DHCP reserved IP ranges on the static route | [optional] 
**subnet** | **str** | The subnet of the static route | [optional] 

## Example

```python
from openapi_client.models.update_network_static_route_request import UpdateNetworkStaticRouteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkStaticRouteRequest from a JSON string
update_network_static_route_request_instance = UpdateNetworkStaticRouteRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkStaticRouteRequest.to_json())

# convert the object into a dict
update_network_static_route_request_dict = update_network_static_route_request_instance.to_dict()
# create an instance of UpdateNetworkStaticRouteRequest from a dict
update_network_static_route_request_from_dict = UpdateNetworkStaticRouteRequest.from_dict(update_network_static_route_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


