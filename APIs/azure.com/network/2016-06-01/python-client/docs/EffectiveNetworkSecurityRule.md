# EffectiveNetworkSecurityRule

Effective NetworkSecurityRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Gets network traffic is allowed or denied | [optional] 
**destination_address_prefix** | **str** | Gets destination address prefix | [optional] 
**destination_port_range** | **str** | Gets destination port or range | [optional] 
**direction** | **str** | Gets the direction of the rule | [optional] 
**expanded_destination_address_prefix** | **List[str]** | Gets expanded destination address prefix | [optional] 
**expanded_source_address_prefix** | **List[str]** | Gets expanded source address prefix | [optional] 
**name** | **str** | Gets the name of the security rule specified by the user (if created by the user) | [optional] 
**priority** | **int** | Gets the priority of the rule | [optional] 
**protocol** | **str** | Gets Network protocol this rule applies to | [optional] 
**source_address_prefix** | **str** | Gets source address prefix | [optional] 
**source_port_range** | **str** | Gets source port or range | [optional] 

## Example

```python
from openapi_client.models.effective_network_security_rule import EffectiveNetworkSecurityRule

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveNetworkSecurityRule from a JSON string
effective_network_security_rule_instance = EffectiveNetworkSecurityRule.from_json(json)
# print the JSON string representation of the object
print(EffectiveNetworkSecurityRule.to_json())

# convert the object into a dict
effective_network_security_rule_dict = effective_network_security_rule_instance.to_dict()
# create an instance of EffectiveNetworkSecurityRule from a dict
effective_network_security_rule_from_dict = EffectiveNetworkSecurityRule.from_dict(effective_network_security_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


