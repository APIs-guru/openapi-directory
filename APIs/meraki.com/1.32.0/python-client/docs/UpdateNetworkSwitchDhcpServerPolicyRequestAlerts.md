# UpdateNetworkSwitchDhcpServerPolicyRequestAlerts

Alert settings for DHCP servers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | [**UpdateNetworkSwitchDhcpServerPolicyRequestAlertsEmail**](UpdateNetworkSwitchDhcpServerPolicyRequestAlertsEmail.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_dhcp_server_policy_request_alerts import UpdateNetworkSwitchDhcpServerPolicyRequestAlerts

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchDhcpServerPolicyRequestAlerts from a JSON string
update_network_switch_dhcp_server_policy_request_alerts_instance = UpdateNetworkSwitchDhcpServerPolicyRequestAlerts.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchDhcpServerPolicyRequestAlerts.to_json())

# convert the object into a dict
update_network_switch_dhcp_server_policy_request_alerts_dict = update_network_switch_dhcp_server_policy_request_alerts_instance.to_dict()
# create an instance of UpdateNetworkSwitchDhcpServerPolicyRequestAlerts from a dict
update_network_switch_dhcp_server_policy_request_alerts_from_dict = UpdateNetworkSwitchDhcpServerPolicyRequestAlerts.from_dict(update_network_switch_dhcp_server_policy_request_alerts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


