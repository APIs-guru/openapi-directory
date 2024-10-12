# ManagedRuleSet

Base class for all types of ManagedRuleSet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **int** | Describes priority of the rule | [optional] 
**rule_set_type** | **str** | RuleSetType - AzureManagedRuleSet or OWASP RuleSets. | 
**version** | **int** | defines version of the rule set | [optional] 

## Example

```python
from openapi_client.models.managed_rule_set import ManagedRuleSet

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleSet from a JSON string
managed_rule_set_instance = ManagedRuleSet.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleSet.to_json())

# convert the object into a dict
managed_rule_set_dict = managed_rule_set_instance.to_dict()
# create an instance of ManagedRuleSet from a dict
managed_rule_set_from_dict = ManagedRuleSet.from_dict(managed_rule_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


