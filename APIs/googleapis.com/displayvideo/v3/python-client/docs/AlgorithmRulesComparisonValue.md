# AlgorithmRulesComparisonValue

A value to compare the signal to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Boolean value. | [optional] 
**creative_dimension_value** | [**Dimensions**](Dimensions.md) |  | [optional] 
**day_and_time_value** | [**DayAndTime**](DayAndTime.md) |  | [optional] 
**device_type_value** | **str** | Device type value. | [optional] 
**double_value** | **float** | Double value. | [optional] 
**environment_value** | **str** | Environment value. | [optional] 
**exchange_value** | **str** | Exchange value. | [optional] 
**int64_value** | **str** | Integer value. | [optional] 
**on_screen_position_value** | **str** | Ad position value. | [optional] 
**string_value** | **str** | String value. | [optional] 

## Example

```python
from openapi_client.models.algorithm_rules_comparison_value import AlgorithmRulesComparisonValue

# TODO update the JSON string below
json = "{}"
# create an instance of AlgorithmRulesComparisonValue from a JSON string
algorithm_rules_comparison_value_instance = AlgorithmRulesComparisonValue.from_json(json)
# print the JSON string representation of the object
print(AlgorithmRulesComparisonValue.to_json())

# convert the object into a dict
algorithm_rules_comparison_value_dict = algorithm_rules_comparison_value_instance.to_dict()
# create an instance of AlgorithmRulesComparisonValue from a dict
algorithm_rules_comparison_value_from_dict = AlgorithmRulesComparisonValue.from_dict(algorithm_rules_comparison_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


