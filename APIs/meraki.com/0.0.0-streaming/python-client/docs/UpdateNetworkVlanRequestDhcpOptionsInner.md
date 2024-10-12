# UpdateNetworkVlanRequestDhcpOptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code for the DHCP option. This should be an integer between 2 and 254. | 
**type** | **str** | The type for the DHCP option. One of: &#39;text&#39;, &#39;ip&#39;, &#39;hex&#39; or &#39;integer&#39; | 
**value** | **str** | The value for the DHCP option | 

## Example

```python
from openapi_client.models.update_network_vlan_request_dhcp_options_inner import UpdateNetworkVlanRequestDhcpOptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkVlanRequestDhcpOptionsInner from a JSON string
update_network_vlan_request_dhcp_options_inner_instance = UpdateNetworkVlanRequestDhcpOptionsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkVlanRequestDhcpOptionsInner.to_json())

# convert the object into a dict
update_network_vlan_request_dhcp_options_inner_dict = update_network_vlan_request_dhcp_options_inner_instance.to_dict()
# create an instance of UpdateNetworkVlanRequestDhcpOptionsInner from a dict
update_network_vlan_request_dhcp_options_inner_from_dict = UpdateNetworkVlanRequestDhcpOptionsInner.from_dict(update_network_vlan_request_dhcp_options_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


