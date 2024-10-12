# CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL7FirewallRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **str** | The policy applied to matching traffic. Must be &#39;deny&#39;. | [optional] 
**type** | **str** | Type of the L7 Rule. Must be &#39;application&#39;, &#39;applicationCategory&#39;, &#39;host&#39;, &#39;port&#39; or &#39;ipRange&#39; | [optional] 
**value** | **str** | The &#39;value&#39; of what you want to block. If &#39;type&#39; is &#39;host&#39;, &#39;port&#39; or &#39;ipRange&#39;, &#39;value&#39; must be a string matching either a hostname (e.g. somewhere.com), a port (e.g. 8080), or an IP range (e.g. 192.1.0.0/16). If &#39;type&#39; is &#39;application&#39; or &#39;applicationCategory&#39;, then &#39;value&#39; must be an object with an ID for the application. | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_firewall_and_traffic_shaping_l7_firewall_rules_inner import CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL7FirewallRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL7FirewallRulesInner from a JSON string
create_network_group_policy_request_firewall_and_traffic_shaping_l7_firewall_rules_inner_instance = CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL7FirewallRulesInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL7FirewallRulesInner.to_json())

# convert the object into a dict
create_network_group_policy_request_firewall_and_traffic_shaping_l7_firewall_rules_inner_dict = create_network_group_policy_request_firewall_and_traffic_shaping_l7_firewall_rules_inner_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL7FirewallRulesInner from a dict
create_network_group_policy_request_firewall_and_traffic_shaping_l7_firewall_rules_inner_from_dict = CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL7FirewallRulesInner.from_dict(create_network_group_policy_request_firewall_and_traffic_shaping_l7_firewall_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


