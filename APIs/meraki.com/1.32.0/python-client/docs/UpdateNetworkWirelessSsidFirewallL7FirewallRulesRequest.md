# UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestRulesInner]**](UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestRulesInner.md) | An array of L7 firewall rules for this SSID. Rules will get applied in the same order user has specified in request. Empty array will clear the L7 firewall rule configuration. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_firewall_l7_firewall_rules_request import UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest from a JSON string
update_network_wireless_ssid_firewall_l7_firewall_rules_request_instance = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest.to_json())

# convert the object into a dict
update_network_wireless_ssid_firewall_l7_firewall_rules_request_dict = update_network_wireless_ssid_firewall_l7_firewall_rules_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest from a dict
update_network_wireless_ssid_firewall_l7_firewall_rules_request_from_dict = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest.from_dict(update_network_wireless_ssid_firewall_l7_firewall_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


