# ManagedRuleExclusion

Exclude variables from managed rule evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_variable** | **str** | The variable type to be excluded. | 
**selector** | **str** | Selector value for which elements in the collection this exclusion applies to. | 
**selector_match_operator** | **str** | Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to. | 

## Example

```python
from openapi_client.models.managed_rule_exclusion import ManagedRuleExclusion

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleExclusion from a JSON string
managed_rule_exclusion_instance = ManagedRuleExclusion.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleExclusion.to_json())

# convert the object into a dict
managed_rule_exclusion_dict = managed_rule_exclusion_instance.to_dict()
# create an instance of ManagedRuleExclusion from a dict
managed_rule_exclusion_from_dict = ManagedRuleExclusion.from_dict(managed_rule_exclusion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


