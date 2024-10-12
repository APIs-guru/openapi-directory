# PercentileMetric

Percentile Metric data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | The end time for the metric (ISO-8601 format). | [optional] [readonly] 
**metric_values** | [**List[PercentileMetricValue]**](PercentileMetricValue.md) | The percentile metric values for the specified time window and timestep. | [optional] [readonly] 
**name** | [**MetricName**](MetricName.md) |  | [optional] 
**start_time** | **datetime** | The start time for the metric (ISO-8601 format). | [optional] [readonly] 
**time_grain** | **str** | The time grain to be used to summarize the metric values. | [optional] [readonly] 
**unit** | [**UnitType**](UnitType.md) |  | [optional] 

## Example

```python
from openapi_client.models.percentile_metric import PercentileMetric

# TODO update the JSON string below
json = "{}"
# create an instance of PercentileMetric from a JSON string
percentile_metric_instance = PercentileMetric.from_json(json)
# print the JSON string representation of the object
print(PercentileMetric.to_json())

# convert the object into a dict
percentile_metric_dict = percentile_metric_instance.to_dict()
# create an instance of PercentileMetric from a dict
percentile_metric_from_dict = PercentileMetric.from_dict(percentile_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


