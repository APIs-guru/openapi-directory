# UpdateNetworkApplianceFirewallL7FirewallRulesRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **str** | &#39;Deny&#39; traffic specified by this rule | [optional] 
**type** | **str** | Type of the L7 rule. One of: &#39;application&#39;, &#39;applicationCategory&#39;, &#39;host&#39;, &#39;port&#39;, &#39;ipRange&#39; | [optional] 
**value** | **str** | The &#39;value&#39; of what you want to block. Format of &#39;value&#39; varies depending on type of the rule. The application categories and application ids can be retrieved from the the &#39;MX L7 application categories&#39; endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_firewall_l7_firewall_rules_request_rules_inner import UpdateNetworkApplianceFirewallL7FirewallRulesRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceFirewallL7FirewallRulesRequestRulesInner from a JSON string
update_network_appliance_firewall_l7_firewall_rules_request_rules_inner_instance = UpdateNetworkApplianceFirewallL7FirewallRulesRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceFirewallL7FirewallRulesRequestRulesInner.to_json())

# convert the object into a dict
update_network_appliance_firewall_l7_firewall_rules_request_rules_inner_dict = update_network_appliance_firewall_l7_firewall_rules_request_rules_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceFirewallL7FirewallRulesRequestRulesInner from a dict
update_network_appliance_firewall_l7_firewall_rules_request_rules_inner_from_dict = UpdateNetworkApplianceFirewallL7FirewallRulesRequestRulesInner.from_dict(update_network_appliance_firewall_l7_firewall_rules_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


