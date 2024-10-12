# ManagedRuleSets

Defines ManagedRuleSets - array of managedRuleSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_sets** | [**List[ManagedRuleSet]**](ManagedRuleSet.md) | List of rules | [optional] 

## Example

```python
from openapi_client.models.managed_rule_sets import ManagedRuleSets

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleSets from a JSON string
managed_rule_sets_instance = ManagedRuleSets.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleSets.to_json())

# convert the object into a dict
managed_rule_sets_dict = managed_rule_sets_instance.to_dict()
# create an instance of ManagedRuleSets from a dict
managed_rule_sets_from_dict = ManagedRuleSets.from_dict(managed_rule_sets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


