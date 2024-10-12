# SecurityRuleAssociationsEffectiveSecurityRulesInner

Effective network security rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Whether network traffic is allowed or denied. Possible values are: &#39;Allow&#39; and &#39;Deny&#39;. | [optional] 
**destination_address_prefix** | **str** | The destination address prefix. | [optional] 
**destination_port_range** | **str** | The destination port or range. | [optional] 
**direction** | **str** | The direction of the rule. Possible values are: &#39;Inbound and Outbound&#39;. | [optional] 
**expanded_destination_address_prefix** | **List[str]** | Expanded destination address prefix. | [optional] 
**expanded_source_address_prefix** | **List[str]** | The expanded source address prefix. | [optional] 
**name** | **str** | The name of the security rule specified by the user (if created by the user). | [optional] 
**priority** | **int** | The priority of the rule. | [optional] 
**protocol** | **str** | The network protocol this rule applies to. Possible values are: &#39;Tcp&#39;, &#39;Udp&#39;, and &#39;*&#39;. | [optional] 
**source_address_prefix** | **str** | The source address prefix. | [optional] 
**source_port_range** | **str** | The source port or range. | [optional] 

## Example

```python
from openapi_client.models.security_rule_associations_effective_security_rules_inner import SecurityRuleAssociationsEffectiveSecurityRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityRuleAssociationsEffectiveSecurityRulesInner from a JSON string
security_rule_associations_effective_security_rules_inner_instance = SecurityRuleAssociationsEffectiveSecurityRulesInner.from_json(json)
# print the JSON string representation of the object
print(SecurityRuleAssociationsEffectiveSecurityRulesInner.to_json())

# convert the object into a dict
security_rule_associations_effective_security_rules_inner_dict = security_rule_associations_effective_security_rules_inner_instance.to_dict()
# create an instance of SecurityRuleAssociationsEffectiveSecurityRulesInner from a dict
security_rule_associations_effective_security_rules_inner_from_dict = SecurityRuleAssociationsEffectiveSecurityRulesInner.from_dict(security_rule_associations_effective_security_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


