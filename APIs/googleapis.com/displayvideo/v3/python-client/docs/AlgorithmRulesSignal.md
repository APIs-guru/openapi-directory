# AlgorithmRulesSignal

Signal used to evaluate rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impression_signal** | **str** | Signal based on impressions. | [optional] 

## Example

```python
from openapi_client.models.algorithm_rules_signal import AlgorithmRulesSignal

# TODO update the JSON string below
json = "{}"
# create an instance of AlgorithmRulesSignal from a JSON string
algorithm_rules_signal_instance = AlgorithmRulesSignal.from_json(json)
# print the JSON string representation of the object
print(AlgorithmRulesSignal.to_json())

# convert the object into a dict
algorithm_rules_signal_dict = algorithm_rules_signal_instance.to_dict()
# create an instance of AlgorithmRulesSignal from a dict
algorithm_rules_signal_from_dict = AlgorithmRulesSignal.from_dict(algorithm_rules_signal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


