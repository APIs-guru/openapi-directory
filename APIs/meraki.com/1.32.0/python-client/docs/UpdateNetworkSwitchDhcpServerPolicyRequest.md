# UpdateNetworkSwitchDhcpServerPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | [**UpdateNetworkSwitchDhcpServerPolicyRequestAlerts**](UpdateNetworkSwitchDhcpServerPolicyRequestAlerts.md) |  | [optional] 
**allowed_servers** | **List[str]** | List the MAC addresses of DHCP servers to permit on the network when defaultPolicy is set to block. An empty array will clear the entries. | [optional] 
**arp_inspection** | [**UpdateNetworkSwitchDhcpServerPolicyRequestArpInspection**](UpdateNetworkSwitchDhcpServerPolicyRequestArpInspection.md) |  | [optional] 
**blocked_servers** | **List[str]** | List the MAC addresses of DHCP servers to block on the network when defaultPolicy is set to allow. An empty array will clear the entries. | [optional] 
**default_policy** | **str** | &#39;allow&#39; or &#39;block&#39; new DHCP servers. Default value is &#39;allow&#39;. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_dhcp_server_policy_request import UpdateNetworkSwitchDhcpServerPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchDhcpServerPolicyRequest from a JSON string
update_network_switch_dhcp_server_policy_request_instance = UpdateNetworkSwitchDhcpServerPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchDhcpServerPolicyRequest.to_json())

# convert the object into a dict
update_network_switch_dhcp_server_policy_request_dict = update_network_switch_dhcp_server_policy_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchDhcpServerPolicyRequest from a dict
update_network_switch_dhcp_server_policy_request_from_dict = UpdateNetworkSwitchDhcpServerPolicyRequest.from_dict(update_network_switch_dhcp_server_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


