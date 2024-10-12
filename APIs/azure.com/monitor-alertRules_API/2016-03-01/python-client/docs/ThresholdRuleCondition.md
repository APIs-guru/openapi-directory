# ThresholdRuleCondition

A rule condition based on a metric crossing a threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | [**ConditionOperator**](ConditionOperator.md) |  | 
**threshold** | **float** | the threshold value that activates the alert. | 
**time_aggregation** | [**TimeAggregationOperator**](TimeAggregationOperator.md) |  | [optional] 
**window_size** | **str** | the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. | [optional] 

## Example

```python
from openapi_client.models.threshold_rule_condition import ThresholdRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ThresholdRuleCondition from a JSON string
threshold_rule_condition_instance = ThresholdRuleCondition.from_json(json)
# print the JSON string representation of the object
print(ThresholdRuleCondition.to_json())

# convert the object into a dict
threshold_rule_condition_dict = threshold_rule_condition_instance.to_dict()
# create an instance of ThresholdRuleCondition from a dict
threshold_rule_condition_from_dict = ThresholdRuleCondition.from_dict(threshold_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


