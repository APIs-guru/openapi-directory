# CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping

    The firewall and traffic shaping rules and settings for your policy. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**l3_firewall_rules** | [**List[CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL3FirewallRulesInner]**](CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL3FirewallRulesInner.md) | An ordered array of the L3 firewall rules | [optional] 
**l7_firewall_rules** | [**List[CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL7FirewallRulesInner]**](CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL7FirewallRulesInner.md) | An ordered array of L7 firewall rules | [optional] 
**settings** | **str** | How firewall and traffic shaping rules are enforced. Can be &#39;network default&#39;, &#39;ignore&#39; or &#39;custom&#39;. | [optional] 
**traffic_shaping_rules** | [**List[CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingTrafficShapingRulesInner]**](CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingTrafficShapingRulesInner.md) |     An array of traffic shaping rules. Rules are applied in the order that     they are specified in. An empty list (or null) means no rules. Note that     you are allowed a maximum of 8 rules.  | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_firewall_and_traffic_shaping import CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping from a JSON string
create_network_group_policy_request_firewall_and_traffic_shaping_instance = CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping.to_json())

# convert the object into a dict
create_network_group_policy_request_firewall_and_traffic_shaping_dict = create_network_group_policy_request_firewall_and_traffic_shaping_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping from a dict
create_network_group_policy_request_firewall_and_traffic_shaping_from_dict = CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping.from_dict(create_network_group_policy_request_firewall_and_traffic_shaping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


