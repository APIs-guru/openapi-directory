# CreateOrUpdateFirewallRuleParameters

The parameters used to create a new firewall rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreateOrUpdateFirewallRuleProperties**](CreateOrUpdateFirewallRuleProperties.md) |  | 

## Example

```python
from openapi_client.models.create_or_update_firewall_rule_parameters import CreateOrUpdateFirewallRuleParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateFirewallRuleParameters from a JSON string
create_or_update_firewall_rule_parameters_instance = CreateOrUpdateFirewallRuleParameters.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateFirewallRuleParameters.to_json())

# convert the object into a dict
create_or_update_firewall_rule_parameters_dict = create_or_update_firewall_rule_parameters_instance.to_dict()
# create an instance of CreateOrUpdateFirewallRuleParameters from a dict
create_or_update_firewall_rule_parameters_from_dict = CreateOrUpdateFirewallRuleParameters.from_dict(create_or_update_firewall_rule_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


