# AlgorithmRulesSignalComparison

A single comparison. The comparison compares the `signal` to the `comparisonValue`. The comparison of `siteId==123` is represented with the following field values: * `signal` has an `impressionSignal` of `SITE_ID`. * `comparisonOperator` is set to `EQUAL`. * `comparisonValue` is set to 123.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_operator** | **str** | Operator used to compare the two values. In the resulting experession, the &#x60;signal&#x60; will be the first value and the &#x60;comparisonValue will be the second. | [optional] 
**comparison_value** | [**AlgorithmRulesComparisonValue**](AlgorithmRulesComparisonValue.md) |  | [optional] 
**signal** | [**AlgorithmRulesSignal**](AlgorithmRulesSignal.md) |  | [optional] 

## Example

```python
from openapi_client.models.algorithm_rules_signal_comparison import AlgorithmRulesSignalComparison

# TODO update the JSON string below
json = "{}"
# create an instance of AlgorithmRulesSignalComparison from a JSON string
algorithm_rules_signal_comparison_instance = AlgorithmRulesSignalComparison.from_json(json)
# print the JSON string representation of the object
print(AlgorithmRulesSignalComparison.to_json())

# convert the object into a dict
algorithm_rules_signal_comparison_dict = algorithm_rules_signal_comparison_instance.to_dict()
# create an instance of AlgorithmRulesSignalComparison from a dict
algorithm_rules_signal_comparison_from_dict = AlgorithmRulesSignalComparison.from_dict(algorithm_rules_signal_comparison_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


