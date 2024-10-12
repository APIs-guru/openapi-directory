# RoutePropertiesFormat

Route resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | Gets or sets the destination CIDR to which the route applies. | [optional] 
**next_hop_ip_address** | **str** | Gets or sets the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | [optional] 
**next_hop_type** | **str** | Gets or sets the type of Azure hop the packet should be sent to. | 
**provisioning_state** | **str** | Gets or sets Provisioning state of the resource Updating/Deleting/Failed | [optional] 

## Example

```python
from openapi_client.models.route_properties_format import RoutePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of RoutePropertiesFormat from a JSON string
route_properties_format_instance = RoutePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(RoutePropertiesFormat.to_json())

# convert the object into a dict
route_properties_format_dict = route_properties_format_instance.to_dict()
# create an instance of RoutePropertiesFormat from a dict
route_properties_format_from_dict = RoutePropertiesFormat.from_dict(route_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


