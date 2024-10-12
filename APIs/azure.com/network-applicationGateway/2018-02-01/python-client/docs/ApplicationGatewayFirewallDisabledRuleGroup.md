# ApplicationGatewayFirewallDisabledRuleGroup

Allows to disable rules within a rule group or an entire rule group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_group_name** | **str** | The name of the rule group that will be disabled. | 
**rules** | **List[int]** | The list of rules that will be disabled. If null, all rules of the rule group will be disabled. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_firewall_disabled_rule_group import ApplicationGatewayFirewallDisabledRuleGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayFirewallDisabledRuleGroup from a JSON string
application_gateway_firewall_disabled_rule_group_instance = ApplicationGatewayFirewallDisabledRuleGroup.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayFirewallDisabledRuleGroup.to_json())

# convert the object into a dict
application_gateway_firewall_disabled_rule_group_dict = application_gateway_firewall_disabled_rule_group_instance.to_dict()
# create an instance of ApplicationGatewayFirewallDisabledRuleGroup from a dict
application_gateway_firewall_disabled_rule_group_from_dict = ApplicationGatewayFirewallDisabledRuleGroup.from_dict(application_gateway_firewall_disabled_rule_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


