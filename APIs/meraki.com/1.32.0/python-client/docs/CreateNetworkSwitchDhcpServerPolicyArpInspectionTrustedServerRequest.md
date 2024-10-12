# CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4** | [**CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestIpv4**](CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestIpv4.md) |  | 
**mac** | **str** | The mac address of the trusted server being added | 
**vlan** | **int** | The VLAN of the trusted server being added. It must be between 1 and 4094 | 

## Example

```python
from openapi_client.models.create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request import CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest from a JSON string
create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_instance = CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.to_json())

# convert the object into a dict
create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_dict = create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_instance.to_dict()
# create an instance of CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest from a dict
create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_from_dict = CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.from_dict(create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


