# GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIp

Additional IP attributes of the packet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dscp** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIpDscp**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIpDscp.md) |  | [optional] 
**header_length** | **int** | IP header length of the packet. | [optional] 
**id** | **str** | IP ID of the packet. | [optional] 
**length** | **int** | IP length of the packet. | [optional] 
**protocol** | **int** | IP protocol number of the packet. | [optional] 
**ttl** | **int** | Time to live of the packet. | [optional] 
**version** | **int** | IP version of the packet. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip import GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIp

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIp from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIp.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIp.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIp from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIp.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_ip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


