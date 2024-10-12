# RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInner

Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerProperties**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerProperties.md) |  | [optional] 
**type** | **str** | Type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner import RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInner from a JSON string
route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_instance = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInner.from_json(json)
# print the JSON string representation of the object
print(RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInner.to_json())

# convert the object into a dict
route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_dict = route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_instance.to_dict()
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInner from a dict
route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_from_dict = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInner.from_dict(route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


