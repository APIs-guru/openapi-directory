# UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **str** | &#39;Deny&#39; traffic specified by this rule | [optional] 
**type** | **str** | Type of the L7 firewall rule. One of: &#39;application&#39;, &#39;applicationCategory&#39;, &#39;host&#39;, &#39;port&#39;, &#39;ipRange&#39; | [optional] 
**value** | **str** | The value of what needs to get blocked. Format of the value varies depending on type of the firewall rule selected. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_firewall_l7_firewall_rules_request_rules_inner import UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestRulesInner from a JSON string
update_network_wireless_ssid_firewall_l7_firewall_rules_request_rules_inner_instance = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestRulesInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_firewall_l7_firewall_rules_request_rules_inner_dict = update_network_wireless_ssid_firewall_l7_firewall_rules_request_rules_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestRulesInner from a dict
update_network_wireless_ssid_firewall_l7_firewall_rules_request_rules_inner_from_dict = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestRulesInner.from_dict(update_network_wireless_ssid_firewall_l7_firewall_rules_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


