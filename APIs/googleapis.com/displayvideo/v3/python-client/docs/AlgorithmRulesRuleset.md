# AlgorithmRulesRuleset

A ruleset consisting of a list of rules and how to aggregate the resulting values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | How to aggregate values of evaluated rules. | [optional] 
**max_value** | **float** | Maximum value the ruleset can evaluate to. | [optional] 
**rules** | [**List[AlgorithmRulesRule]**](AlgorithmRulesRule.md) | List of rules to generate the impression value. | [optional] 

## Example

```python
from openapi_client.models.algorithm_rules_ruleset import AlgorithmRulesRuleset

# TODO update the JSON string below
json = "{}"
# create an instance of AlgorithmRulesRuleset from a JSON string
algorithm_rules_ruleset_instance = AlgorithmRulesRuleset.from_json(json)
# print the JSON string representation of the object
print(AlgorithmRulesRuleset.to_json())

# convert the object into a dict
algorithm_rules_ruleset_dict = algorithm_rules_ruleset_instance.to_dict()
# create an instance of AlgorithmRulesRuleset from a dict
algorithm_rules_ruleset_from_dict = AlgorithmRulesRuleset.from_dict(algorithm_rules_ruleset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


