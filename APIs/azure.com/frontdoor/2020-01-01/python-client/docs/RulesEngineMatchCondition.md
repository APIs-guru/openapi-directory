# RulesEngineMatchCondition

Define a match condition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negate_condition** | **bool** | Describes if this is negate condition or not | [optional] 
**rules_engine_match_value** | **List[str]** | Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match. | 
**rules_engine_match_variable** | **str** | Match Variable | 
**rules_engine_operator** | **str** | Describes operator to apply to the match condition. | 
**selector** | **str** | Name of selector in RequestHeader or RequestBody to be matched | [optional] 
**transforms** | [**List[Transform]**](Transform.md) | List of transforms | [optional] 

## Example

```python
from openapi_client.models.rules_engine_match_condition import RulesEngineMatchCondition

# TODO update the JSON string below
json = "{}"
# create an instance of RulesEngineMatchCondition from a JSON string
rules_engine_match_condition_instance = RulesEngineMatchCondition.from_json(json)
# print the JSON string representation of the object
print(RulesEngineMatchCondition.to_json())

# convert the object into a dict
rules_engine_match_condition_dict = rules_engine_match_condition_instance.to_dict()
# create an instance of RulesEngineMatchCondition from a dict
rules_engine_match_condition_from_dict = RulesEngineMatchCondition.from_dict(rules_engine_match_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


