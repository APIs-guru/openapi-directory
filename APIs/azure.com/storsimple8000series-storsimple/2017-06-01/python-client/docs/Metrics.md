# Metrics

The monitoring metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[MetricDimension]**](MetricDimension.md) | The metric dimensions. | [optional] 
**end_time** | **datetime** | The end time of the metric data. | [optional] 
**name** | [**MetricName**](MetricName.md) |  | [optional] 
**primary_aggregation** | **str** | The metric aggregation type. | [optional] 
**resource_id** | **str** | The ID of metric source. | [optional] 
**start_time** | **datetime** | The start time of the metric data. | [optional] 
**time_grain** | **str** | The time granularity of the metric data. | [optional] 
**type** | **str** | The type of the metric data. | [optional] 
**unit** | **str** | The unit of the metric data. | [optional] 
**values** | [**List[MetricData]**](MetricData.md) | The list of the metric data. | [optional] 

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


