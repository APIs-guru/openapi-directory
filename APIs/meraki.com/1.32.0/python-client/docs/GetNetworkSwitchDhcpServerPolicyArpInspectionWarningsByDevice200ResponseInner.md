# GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_trusted_port** | **bool** | Whether this switch has a trusted DAI port. Always false if supportsInspection is false. | [optional] 
**name** | **str** | Switch name. | [optional] 
**serial** | **str** | Switch serial. | [optional] 
**supports_inspection** | **bool** | Whether this switch supports Dynamic ARP Inspection. | [optional] 
**url** | **str** | Url link to switch. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device200_response_inner import GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner from a JSON string
get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device200_response_inner_instance = GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner.to_json())

# convert the object into a dict
get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device200_response_inner_dict = get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device200_response_inner_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner from a dict
get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device200_response_inner_from_dict = GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner.from_dict(get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


