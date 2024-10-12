# UpdateNetworkSwitchDhcpServerPolicyRequestAlertsEmail

Email alert settings for DHCP servers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | When enabled, send an email if a new DHCP server is seen. Default value is false. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_dhcp_server_policy_request_alerts_email import UpdateNetworkSwitchDhcpServerPolicyRequestAlertsEmail

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchDhcpServerPolicyRequestAlertsEmail from a JSON string
update_network_switch_dhcp_server_policy_request_alerts_email_instance = UpdateNetworkSwitchDhcpServerPolicyRequestAlertsEmail.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchDhcpServerPolicyRequestAlertsEmail.to_json())

# convert the object into a dict
update_network_switch_dhcp_server_policy_request_alerts_email_dict = update_network_switch_dhcp_server_policy_request_alerts_email_instance.to_dict()
# create an instance of UpdateNetworkSwitchDhcpServerPolicyRequestAlertsEmail from a dict
update_network_switch_dhcp_server_policy_request_alerts_email_from_dict = UpdateNetworkSwitchDhcpServerPolicyRequestAlertsEmail.from_dict(update_network_switch_dhcp_server_policy_request_alerts_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


