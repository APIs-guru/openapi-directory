# MetricTrigger

The trigger that results in a scaling action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | the name of the metric that defines what the rule monitors. | 
**metric_resource_uri** | **str** | the resource identifier of the resource the rule monitors. | 
**operator** | **str** | the operator that is used to compare the metric data and the threshold. | 
**statistic** | **str** | the metric statistic type. How the metrics from multiple instances are combined. | 
**threshold** | **float** | the threshold of the metric that triggers the scale action. | 
**time_aggregation** | **str** | time aggregation type. How the data that is collected should be combined over time. The default value is Average. | 
**time_grain** | **str** | the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute. | 
**time_window** | **str** | the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes. | 

## Example

```python
from openapi_client.models.metric_trigger import MetricTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of MetricTrigger from a JSON string
metric_trigger_instance = MetricTrigger.from_json(json)
# print the JSON string representation of the object
print(MetricTrigger.to_json())

# convert the object into a dict
metric_trigger_dict = metric_trigger_instance.to_dict()
# create an instance of MetricTrigger from a dict
metric_trigger_from_dict = MetricTrigger.from_dict(metric_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


