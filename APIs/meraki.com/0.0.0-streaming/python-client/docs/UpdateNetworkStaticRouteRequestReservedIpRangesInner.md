# UpdateNetworkStaticRouteRequestReservedIpRangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | A text comment for the reserved range | 
**end** | **str** | The last IP in the reserved range | 
**start** | **str** | The first IP in the reserved range | 

## Example

```python
from openapi_client.models.update_network_static_route_request_reserved_ip_ranges_inner import UpdateNetworkStaticRouteRequestReservedIpRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkStaticRouteRequestReservedIpRangesInner from a JSON string
update_network_static_route_request_reserved_ip_ranges_inner_instance = UpdateNetworkStaticRouteRequestReservedIpRangesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkStaticRouteRequestReservedIpRangesInner.to_json())

# convert the object into a dict
update_network_static_route_request_reserved_ip_ranges_inner_dict = update_network_static_route_request_reserved_ip_ranges_inner_instance.to_dict()
# create an instance of UpdateNetworkStaticRouteRequestReservedIpRangesInner from a dict
update_network_static_route_request_reserved_ip_ranges_inner_from_dict = UpdateNetworkStaticRouteRequestReservedIpRangesInner.from_dict(update_network_static_route_request_reserved_ip_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


