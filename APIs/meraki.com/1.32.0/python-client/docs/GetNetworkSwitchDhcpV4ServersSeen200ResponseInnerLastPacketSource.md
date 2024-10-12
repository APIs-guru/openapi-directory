# GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSource

Source of the packet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSourceIpv4**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSourceIpv4.md) |  | [optional] 
**mac** | **str** | Source mac address of the packet. | [optional] 
**port** | **int** | Source port of the packet. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_source import GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSource

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSource from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_source_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSource.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSource.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_source_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_source_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSource from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_source_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketSource.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


