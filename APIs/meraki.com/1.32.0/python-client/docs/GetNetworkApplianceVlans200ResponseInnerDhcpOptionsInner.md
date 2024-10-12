# GetNetworkApplianceVlans200ResponseInnerDhcpOptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code for the DHCP option. This should be an integer between 2 and 254. | 
**type** | **str** | The type for the DHCP option. One of: &#39;text&#39;, &#39;ip&#39;, &#39;hex&#39; or &#39;integer&#39; | 
**value** | **str** | The value for the DHCP option | 

## Example

```python
from openapi_client.models.get_network_appliance_vlans200_response_inner_dhcp_options_inner import GetNetworkApplianceVlans200ResponseInnerDhcpOptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceVlans200ResponseInnerDhcpOptionsInner from a JSON string
get_network_appliance_vlans200_response_inner_dhcp_options_inner_instance = GetNetworkApplianceVlans200ResponseInnerDhcpOptionsInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceVlans200ResponseInnerDhcpOptionsInner.to_json())

# convert the object into a dict
get_network_appliance_vlans200_response_inner_dhcp_options_inner_dict = get_network_appliance_vlans200_response_inner_dhcp_options_inner_instance.to_dict()
# create an instance of GetNetworkApplianceVlans200ResponseInnerDhcpOptionsInner from a dict
get_network_appliance_vlans200_response_inner_dhcp_options_inner_from_dict = GetNetworkApplianceVlans200ResponseInnerDhcpOptionsInner.from_dict(get_network_appliance_vlans200_response_inner_dhcp_options_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


