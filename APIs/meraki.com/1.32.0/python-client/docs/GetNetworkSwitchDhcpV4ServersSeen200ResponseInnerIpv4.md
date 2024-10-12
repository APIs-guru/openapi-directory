# GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerIpv4

IPv4 attributes of the server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IPv4 address of the server. | [optional] 
**gateway** | **str** | IPv4 gateway address of the server. | [optional] 
**subnet** | **str** | Subnet of the server. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner_ipv4 import GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerIpv4

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerIpv4 from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_ipv4_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerIpv4.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerIpv4.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_ipv4_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_ipv4_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerIpv4 from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_ipv4_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerIpv4.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_ipv4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


