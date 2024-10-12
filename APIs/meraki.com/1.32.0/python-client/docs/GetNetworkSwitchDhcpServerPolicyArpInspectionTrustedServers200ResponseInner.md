# GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4** | [**GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInnerIpv4**](GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInnerIpv4.md) |  | [optional] 
**mac** | **str** | Mac address of the trusted server. | [optional] 
**trusted_server_id** | **str** | ID of the trusted server. | [optional] 
**vlan** | **int** | Vlan ID of the trusted server. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner import GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner from a JSON string
get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner_instance = GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner.to_json())

# convert the object into a dict
get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner_dict = get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner from a dict
get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner_from_dict = GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner.from_dict(get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


