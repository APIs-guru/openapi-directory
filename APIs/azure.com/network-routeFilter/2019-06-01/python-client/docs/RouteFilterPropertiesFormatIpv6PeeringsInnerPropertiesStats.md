# RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesStats

Contains stats associated with the peering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primarybytes_in** | **int** | Gets BytesIn of the peering. | [optional] 
**primarybytes_out** | **int** | Gets BytesOut of the peering. | [optional] 
**secondarybytes_in** | **int** | Gets BytesIn of the peering. | [optional] 
**secondarybytes_out** | **int** | Gets BytesOut of the peering. | [optional] 

## Example

```python
from openapi_client.models.route_filter_properties_format_ipv6_peerings_inner_properties_stats import RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesStats

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesStats from a JSON string
route_filter_properties_format_ipv6_peerings_inner_properties_stats_instance = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesStats.from_json(json)
# print the JSON string representation of the object
print(RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesStats.to_json())

# convert the object into a dict
route_filter_properties_format_ipv6_peerings_inner_properties_stats_dict = route_filter_properties_format_ipv6_peerings_inner_properties_stats_instance.to_dict()
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesStats from a dict
route_filter_properties_format_ipv6_peerings_inner_properties_stats_from_dict = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesStats.from_dict(route_filter_properties_format_ipv6_peerings_inner_properties_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


