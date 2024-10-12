# GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFields

DHCP-specific fields of the packet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaddr** | **str** | Client hardware address of the packet. | [optional] 
**ciaddr** | **str** | Client IP address of the packet. | [optional] 
**flags** | **str** | Packet flags. | [optional] 
**giaddr** | **str** | Gateway IP address of the packet. | [optional] 
**hlen** | **int** | Hardware length of the packet. | [optional] 
**hops** | **int** | Number of hops the packet took. | [optional] 
**htype** | **int** | Hardware type code of the packet. | [optional] 
**magic_cookie** | **str** | Magic cookie of the packet. | [optional] 
**op** | **int** | Operation code of the packet. | [optional] 
**options** | [**List[GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFieldsOptionsInner]**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFieldsOptionsInner.md) | Additional DHCP options of the packet. | [optional] 
**secs** | **int** | Number of seconds since receiving the packet. | [optional] 
**siaddr** | **str** | Server IP address of the packet. | [optional] 
**sname** | **str** | Server identifier address of the packet. | [optional] 
**xid** | **str** | Transaction id of the packet. | [optional] 
**yiaddr** | **str** | Assigned IP address of the packet. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_fields import GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFields

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFields from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_fields_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFields.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFields.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_fields_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_fields_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFields from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_fields_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacketFields.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_last_packet_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


