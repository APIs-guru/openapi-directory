# GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacket

Last packet the server received.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestination**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestination.md) |  | [optional] 
**ethernet** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketEthernet**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketEthernet.md) |  | [optional] 
**fields** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFields**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFields.md) |  | [optional] 
**ip** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIp**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketIp.md) |  | [optional] 
**source** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSource**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSource.md) |  | [optional] 
**type** | **str** | Packet type. | [optional] 
**udp** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketUdp**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketUdp.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet import GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacket

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacket from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacket.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacket.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacket from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacket.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


