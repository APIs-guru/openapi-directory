# Metric

Database metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | The end time for the metric (ISO-8601 format). | [optional] [readonly] 
**metric_values** | [**List[MetricValue]**](MetricValue.md) | The metric values for the specified time window and timestep. | [optional] [readonly] 
**name** | [**MetricName**](MetricName.md) |  | [optional] 
**start_time** | **datetime** | The start time for the metric (ISO-8601 format). | [optional] [readonly] 
**time_grain** | **str** | The time step to be used to summarize the metric values. | [optional] [readonly] 
**unit** | **str** | The unit of the metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.metric import Metric

# TODO update the JSON string below
json = "{}"
# create an instance of Metric from a JSON string
metric_instance = Metric.from_json(json)
# print the JSON string representation of the object
print(Metric.to_json())

# convert the object into a dict
metric_dict = metric_instance.to_dict()
# create an instance of Metric from a dict
metric_from_dict = Metric.from_dict(metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


