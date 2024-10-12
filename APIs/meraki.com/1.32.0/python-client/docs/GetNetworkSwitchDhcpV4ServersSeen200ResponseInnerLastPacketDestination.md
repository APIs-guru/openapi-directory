# GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestination

Destination of the packet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestinationIpv4**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestinationIpv4.md) |  | [optional] 
**mac** | **str** | Destination mac address of the packet. | [optional] 
**port** | **int** | Destination port of the packet. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_destination import GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestination from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_destination_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestination.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestination.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_destination_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_destination_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestination from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_destination_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketDestination.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


