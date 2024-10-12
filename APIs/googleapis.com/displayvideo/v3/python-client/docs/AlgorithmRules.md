# AlgorithmRules

Rule-based algorithm.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impression_signal_ruleset** | [**AlgorithmRulesRuleset**](AlgorithmRulesRuleset.md) |  | [optional] 

## Example

```python
from openapi_client.models.algorithm_rules import AlgorithmRules

# TODO update the JSON string below
json = "{}"
# create an instance of AlgorithmRules from a JSON string
algorithm_rules_instance = AlgorithmRules.from_json(json)
# print the JSON string representation of the object
print(AlgorithmRules.to_json())

# convert the object into a dict
algorithm_rules_dict = algorithm_rules_instance.to_dict()
# create an instance of AlgorithmRules from a dict
algorithm_rules_from_dict = AlgorithmRules.from_dict(algorithm_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


