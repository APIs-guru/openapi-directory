# GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIpDscp

DSCP attributes of the packet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ecn** | **int** | ECN number of the packet. | [optional] 
**tag** | **int** | DSCP tag number of the packet. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_dscp import GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIpDscp

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIpDscp from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_dscp_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIpDscp.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIpDscp.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_dscp_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_dscp_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIpDscp from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_dscp_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIpDscp.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_dscp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


