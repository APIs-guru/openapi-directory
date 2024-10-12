# GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAck

Attributes of the server's last ack.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAckIpv4**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAckIpv4.md) |  | [optional] 
**ts** | **datetime** | Last time the server was acked. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner_last_ack import GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAck

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAck from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_ack_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAck.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAck.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_ack_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_last_ack_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAck from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_last_ack_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAck.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_last_ack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


