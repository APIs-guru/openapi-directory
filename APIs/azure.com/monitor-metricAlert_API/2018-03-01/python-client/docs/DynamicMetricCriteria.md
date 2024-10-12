# DynamicMetricCriteria

Criterion for dynamic threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_sensitivity** | **str** | The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern. | 
**failing_periods** | [**DynamicThresholdFailingPeriods**](DynamicThresholdFailingPeriods.md) |  | 
**ignore_data_before** | **datetime** | Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format) | [optional] 
**operator** | **str** | The operator used to compare the metric value against the threshold. | 

## Example

```python
from openapi_client.models.dynamic_metric_criteria import DynamicMetricCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicMetricCriteria from a JSON string
dynamic_metric_criteria_instance = DynamicMetricCriteria.from_json(json)
# print the JSON string representation of the object
print(DynamicMetricCriteria.to_json())

# convert the object into a dict
dynamic_metric_criteria_dict = dynamic_metric_criteria_instance.to_dict()
# create an instance of DynamicMetricCriteria from a dict
dynamic_metric_criteria_from_dict = DynamicMetricCriteria.from_dict(dynamic_metric_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


