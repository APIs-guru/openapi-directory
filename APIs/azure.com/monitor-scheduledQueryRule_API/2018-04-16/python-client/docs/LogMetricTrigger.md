# LogMetricTrigger

A log metrics trigger descriptor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_column** | **str** | Evaluation of metric on a particular column | [optional] 
**metric_trigger_type** | [**MetricTriggerType**](MetricTriggerType.md) |  | [optional] 
**threshold** | **float** | The threshold of the metric trigger. | [optional] 
**threshold_operator** | [**ConditionalOperator**](ConditionalOperator.md) |  | [optional] 

## Example

```python
from openapi_client.models.log_metric_trigger import LogMetricTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of LogMetricTrigger from a JSON string
log_metric_trigger_instance = LogMetricTrigger.from_json(json)
# print the JSON string representation of the object
print(LogMetricTrigger.to_json())

# convert the object into a dict
log_metric_trigger_dict = log_metric_trigger_instance.to_dict()
# create an instance of LogMetricTrigger from a dict
log_metric_trigger_from_dict = LogMetricTrigger.from_dict(log_metric_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


