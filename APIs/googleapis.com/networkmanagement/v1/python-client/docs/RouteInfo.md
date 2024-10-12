# RouteInfo

For display only. Metadata associated with a Compute Engine route.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_ip_range** | **str** | Destination IP range of the route. | [optional] 
**dest_port_ranges** | **List[str]** | Destination port ranges of the route. Policy based routes only. | [optional] 
**display_name** | **str** | Name of a route. | [optional] 
**instance_tags** | **List[str]** | Instance tags of the route. | [optional] 
**ncc_hub_uri** | **str** | URI of a NCC Hub. NCC_HUB routes only. | [optional] 
**ncc_spoke_uri** | **str** | URI of a NCC Spoke. NCC_HUB routes only. | [optional] 
**network_uri** | **str** | URI of a Compute Engine network. NETWORK routes only. | [optional] 
**next_hop** | **str** | Next hop of the route. | [optional] 
**next_hop_type** | **str** | Type of next hop. | [optional] 
**priority** | **int** | Priority of the route. | [optional] 
**protocols** | **List[str]** | Protocols of the route. Policy based routes only. | [optional] 
**route_scope** | **str** | Indicates where route is applicable. | [optional] 
**route_type** | **str** | Type of route. | [optional] 
**src_ip_range** | **str** | Source IP address range of the route. Policy based routes only. | [optional] 
**src_port_ranges** | **List[str]** | Source port ranges of the route. Policy based routes only. | [optional] 
**uri** | **str** | URI of a route. Dynamic, peering static and peering dynamic routes do not have an URI. Advertised route from Google Cloud VPC to on-premises network also does not have an URI. | [optional] 

## Example

```python
from openapi_client.models.route_info import RouteInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RouteInfo from a JSON string
route_info_instance = RouteInfo.from_json(json)
# print the JSON string representation of the object
print(RouteInfo.to_json())

# convert the object into a dict
route_info_dict = route_info_instance.to_dict()
# create an instance of RouteInfo from a dict
route_info_from_dict = RouteInfo.from_dict(route_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


