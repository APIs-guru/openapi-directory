# RouteFilterPropertiesFormatIpv6PeeringsInner

Peering in an ExpressRouteCircuit resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerProperties**](RouteFilterPropertiesFormatIpv6PeeringsInnerProperties.md) |  | [optional] 
**type** | **str** | Type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.route_filter_properties_format_ipv6_peerings_inner import RouteFilterPropertiesFormatIpv6PeeringsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInner from a JSON string
route_filter_properties_format_ipv6_peerings_inner_instance = RouteFilterPropertiesFormatIpv6PeeringsInner.from_json(json)
# print the JSON string representation of the object
print(RouteFilterPropertiesFormatIpv6PeeringsInner.to_json())

# convert the object into a dict
route_filter_properties_format_ipv6_peerings_inner_dict = route_filter_properties_format_ipv6_peerings_inner_instance.to_dict()
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInner from a dict
route_filter_properties_format_ipv6_peerings_inner_from_dict = RouteFilterPropertiesFormatIpv6PeeringsInner.from_dict(route_filter_properties_format_ipv6_peerings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


