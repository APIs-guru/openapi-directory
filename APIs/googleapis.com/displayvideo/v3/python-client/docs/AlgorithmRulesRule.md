# AlgorithmRulesRule

Set of conditions. The return value of the rule is either: * The return value for single met condition or * The defined default return value if no conditions are met.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[AlgorithmRulesRuleCondition]**](AlgorithmRulesRuleCondition.md) | List of conditions in this rule. The criteria among conditions should be mutually exclusive. | [optional] 
**default_return_value** | [**AlgorithmRulesSignalValue**](AlgorithmRulesSignalValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.algorithm_rules_rule import AlgorithmRulesRule

# TODO update the JSON string below
json = "{}"
# create an instance of AlgorithmRulesRule from a JSON string
algorithm_rules_rule_instance = AlgorithmRulesRule.from_json(json)
# print the JSON string representation of the object
print(AlgorithmRulesRule.to_json())

# convert the object into a dict
algorithm_rules_rule_dict = algorithm_rules_rule_instance.to_dict()
# create an instance of AlgorithmRulesRule from a dict
algorithm_rules_rule_from_dict = AlgorithmRulesRule.from_dict(algorithm_rules_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


