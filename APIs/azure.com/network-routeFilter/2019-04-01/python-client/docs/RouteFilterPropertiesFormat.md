# RouteFilterPropertiesFormat

Route Filter Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv6_peerings** | [**List[RouteFilterPropertiesFormatIpv6PeeringsInner]**](RouteFilterPropertiesFormatIpv6PeeringsInner.md) | A collection of references to express route circuit ipv6 peerings. | [optional] 
**peerings** | [**List[RouteFilterPropertiesFormatIpv6PeeringsInner]**](RouteFilterPropertiesFormatIpv6PeeringsInner.md) | A collection of references to express route circuit peerings. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, &#39;Succeeded&#39; and &#39;Failed&#39;. | [optional] [readonly] 
**rules** | [**List[RouteFilterRule]**](RouteFilterRule.md) | Collection of RouteFilterRules contained within a route filter. | [optional] 

## Example

```python
from openapi_client.models.route_filter_properties_format import RouteFilterPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterPropertiesFormat from a JSON string
route_filter_properties_format_instance = RouteFilterPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(RouteFilterPropertiesFormat.to_json())

# convert the object into a dict
route_filter_properties_format_dict = route_filter_properties_format_instance.to_dict()
# create an instance of RouteFilterPropertiesFormat from a dict
route_filter_properties_format_from_dict = RouteFilterPropertiesFormat.from_dict(route_filter_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


