# ManagedRuleSetList

Defines the list of managed rule sets for the policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_rule_sets** | [**List[ManagedRuleSet]**](ManagedRuleSet.md) | List of rule sets. | [optional] 

## Example

```python
from openapi_client.models.managed_rule_set_list import ManagedRuleSetList

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleSetList from a JSON string
managed_rule_set_list_instance = ManagedRuleSetList.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleSetList.to_json())

# convert the object into a dict
managed_rule_set_list_dict = managed_rule_set_list_instance.to_dict()
# create an instance of ManagedRuleSetList from a dict
managed_rule_set_list_from_dict = ManagedRuleSetList.from_dict(managed_rule_set_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


