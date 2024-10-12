# WeekDayMetrics

Metrics for a week day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **str** | Day of the week. Allowed values are Sunday - Saturday. | [optional] 
**missed_calls_count** | **int** | Total count of missed calls for this hour. | [optional] 

## Example

```python
from openapi_client.models.week_day_metrics import WeekDayMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of WeekDayMetrics from a JSON string
week_day_metrics_instance = WeekDayMetrics.from_json(json)
# print the JSON string representation of the object
print(WeekDayMetrics.to_json())

# convert the object into a dict
week_day_metrics_dict = week_day_metrics_instance.to_dict()
# create an instance of WeekDayMetrics from a dict
week_day_metrics_from_dict = WeekDayMetrics.from_dict(week_day_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


