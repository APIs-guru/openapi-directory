# DynamicThresholdFailingPeriods

The minimum number of violations required within the selected lookback time window required to raise an alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_failing_periods_to_alert** | **float** | The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. | 
**number_of_evaluation_periods** | **float** | The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. | 

## Example

```python
from openapi_client.models.dynamic_threshold_failing_periods import DynamicThresholdFailingPeriods

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicThresholdFailingPeriods from a JSON string
dynamic_threshold_failing_periods_instance = DynamicThresholdFailingPeriods.from_json(json)
# print the JSON string representation of the object
print(DynamicThresholdFailingPeriods.to_json())

# convert the object into a dict
dynamic_threshold_failing_periods_dict = dynamic_threshold_failing_periods_instance.to_dict()
# create an instance of DynamicThresholdFailingPeriods from a dict
dynamic_threshold_failing_periods_from_dict = DynamicThresholdFailingPeriods.from_dict(dynamic_threshold_failing_periods_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


