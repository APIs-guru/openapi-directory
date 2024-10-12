# UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4** | [**UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestIpv4**](UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestIpv4.md) |  | [optional] 
**mac** | **str** | The updated mac address of the trusted server | [optional] 
**vlan** | **int** | The updated VLAN of the trusted server. It must be between 1 and 4094 | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request import UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest from a JSON string
update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_instance = UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.to_json())

# convert the object into a dict
update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_dict = update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest from a dict
update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_from_dict = UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.from_dict(update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


