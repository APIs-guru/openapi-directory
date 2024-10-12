# Metrics

Monitoring metric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[MetricDimension]**](MetricDimension.md) | The Metric dimension which indicates the source of the metric | 
**end_time** | **datetime** | The metric end time | 
**name** | [**MetricName**](MetricName.md) |  | 
**primary_aggregation** | **str** | The metric aggregation type | 
**resource_id** | **str** | The id of metric source | 
**start_time** | **datetime** | The metric start time | 
**time_grain** | **str** | The time grain, time grain indicates frequency of the metric data | 
**type** | **str** | The Type of the metric data | 
**unit** | **str** | The unit of the metric data | 
**values** | [**List[MetricData]**](MetricData.md) | The metric data | 

## Example

```python
from openapi_client.models.metrics import Metrics

# TODO update the JSON string below
json = "{}"
# create an instance of Metrics from a JSON string
metrics_instance = Metrics.from_json(json)
# print the JSON string representation of the object
print(Metrics.to_json())

# convert the object into a dict
metrics_dict = metrics_instance.to_dict()
# create an instance of Metrics from a dict
metrics_from_dict = Metrics.from_dict(metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


