# RulesEngineRule

Contains a list of match conditions, and an action on how to modify the request/response. If multiple rules match, the actions from one rule that conflict with a previous rule overwrite for a singular action, or append in the case of headers manipulation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**RulesEngineAction**](RulesEngineAction.md) |  | 
**match_conditions** | [**List[RulesEngineMatchCondition]**](RulesEngineMatchCondition.md) | A list of match conditions that must meet in order for the actions of this rule to run. Having no match conditions means the actions will always run. | [optional] 
**match_processing_behavior** | **str** | If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue. | [optional] 
**name** | **str** | A name to refer to this specific rule. | 
**priority** | **int** | A priority assigned to this rule.  | 

## Example

```python
from openapi_client.models.rules_engine_rule import RulesEngineRule

# TODO update the JSON string below
json = "{}"
# create an instance of RulesEngineRule from a JSON string
rules_engine_rule_instance = RulesEngineRule.from_json(json)
# print the JSON string representation of the object
print(RulesEngineRule.to_json())

# convert the object into a dict
rules_engine_rule_dict = rules_engine_rule_instance.to_dict()
# create an instance of RulesEngineRule from a dict
rules_engine_rule_from_dict = RulesEngineRule.from_dict(rules_engine_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


