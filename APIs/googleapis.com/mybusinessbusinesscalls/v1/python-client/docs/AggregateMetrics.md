# AggregateMetrics

Metrics aggregated over the input time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answered_calls_count** | **int** | Total count of answered calls. | [optional] 
**end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**hourly_metrics** | [**List[HourlyMetrics]**](HourlyMetrics.md) | A list of metrics by hour of day. | [optional] 
**missed_calls_count** | **int** | Total count of missed calls. | [optional] 
**start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**weekday_metrics** | [**List[WeekDayMetrics]**](WeekDayMetrics.md) | A list of metrics by day of week. | [optional] 

## Example

```python
from openapi_client.models.aggregate_metrics import AggregateMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateMetrics from a JSON string
aggregate_metrics_instance = AggregateMetrics.from_json(json)
# print the JSON string representation of the object
print(AggregateMetrics.to_json())

# convert the object into a dict
aggregate_metrics_dict = aggregate_metrics_instance.to_dict()
# create an instance of AggregateMetrics from a dict
aggregate_metrics_from_dict = AggregateMetrics.from_dict(aggregate_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


