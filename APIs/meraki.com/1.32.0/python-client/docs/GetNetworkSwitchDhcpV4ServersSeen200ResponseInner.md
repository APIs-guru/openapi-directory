# GetNetworkSwitchDhcpV4ServersSeen200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client id of the server if available. | [optional] 
**device** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDevice**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDevice.md) |  | [optional] 
**ipv4** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerIpv4**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerIpv4.md) |  | [optional] 
**is_allowed** | **bool** | Whether the server is allowed or blocked. Always true for configured servers. | [optional] 
**is_configured** | **bool** | Whether the server is configured. | [optional] 
**last_ack** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAck**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastAck.md) |  | [optional] 
**last_packet** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacket**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerLastPacket.md) |  | [optional] 
**last_seen_at** | **datetime** | Last time the server was seen. | [optional] 
**mac** | **str** | Mac address of the server. | [optional] 
**seen_by** | [**List[GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerSeenByInner]**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerSeenByInner.md) | Devices that saw the server. | [optional] 
**type** | **str** | server type. Can be a &#39;device&#39;, &#39;stack&#39;, or &#39;discovered&#39; (i.e client). | [optional] 
**vlan** | **int** | Vlan id of the server. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner import GetNetworkSwitchDhcpV4ServersSeen200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInner from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInner.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInner from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInner.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


