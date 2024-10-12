# AlgorithmRulesRuleCondition

Set of signal comparisons. Equivalent of an `if` statement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_value** | [**AlgorithmRulesSignalValue**](AlgorithmRulesSignalValue.md) |  | [optional] 
**signal_comparisons** | [**List[AlgorithmRulesSignalComparison]**](AlgorithmRulesSignalComparison.md) | List of comparisons that build &#x60;if&#x60; statement condition. The comparisons are combined into a single condition with &#x60;AND&#x60; logical operators. | [optional] 

## Example

```python
from openapi_client.models.algorithm_rules_rule_condition import AlgorithmRulesRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of AlgorithmRulesRuleCondition from a JSON string
algorithm_rules_rule_condition_instance = AlgorithmRulesRuleCondition.from_json(json)
# print the JSON string representation of the object
print(AlgorithmRulesRuleCondition.to_json())

# convert the object into a dict
algorithm_rules_rule_condition_dict = algorithm_rules_rule_condition_instance.to_dict()
# create an instance of AlgorithmRulesRuleCondition from a dict
algorithm_rules_rule_condition_from_dict = AlgorithmRulesRuleCondition.from_dict(algorithm_rules_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


