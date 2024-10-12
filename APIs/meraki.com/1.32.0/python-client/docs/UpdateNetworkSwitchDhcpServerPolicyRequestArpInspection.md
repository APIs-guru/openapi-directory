# UpdateNetworkSwitchDhcpServerPolicyRequestArpInspection

Dynamic ARP Inspection settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable or disable Dynamic ARP Inspection on the network. Default value is false. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_dhcp_server_policy_request_arp_inspection import UpdateNetworkSwitchDhcpServerPolicyRequestArpInspection

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchDhcpServerPolicyRequestArpInspection from a JSON string
update_network_switch_dhcp_server_policy_request_arp_inspection_instance = UpdateNetworkSwitchDhcpServerPolicyRequestArpInspection.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchDhcpServerPolicyRequestArpInspection.to_json())

# convert the object into a dict
update_network_switch_dhcp_server_policy_request_arp_inspection_dict = update_network_switch_dhcp_server_policy_request_arp_inspection_instance.to_dict()
# create an instance of UpdateNetworkSwitchDhcpServerPolicyRequestArpInspection from a dict
update_network_switch_dhcp_server_policy_request_arp_inspection_from_dict = UpdateNetworkSwitchDhcpServerPolicyRequestArpInspection.from_dict(update_network_switch_dhcp_server_policy_request_arp_inspection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


