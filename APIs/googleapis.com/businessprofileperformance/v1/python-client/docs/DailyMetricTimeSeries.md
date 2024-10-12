# DailyMetricTimeSeries

Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_metric** | **str** | The DailyMetric that the TimeSeries represents. | [optional] 
**daily_sub_entity_type** | [**DailySubEntityType**](DailySubEntityType.md) |  | [optional] 
**time_series** | [**TimeSeries**](TimeSeries.md) |  | [optional] 

## Example

```python
from openapi_client.models.daily_metric_time_series import DailyMetricTimeSeries

# TODO update the JSON string below
json = "{}"
# create an instance of DailyMetricTimeSeries from a JSON string
daily_metric_time_series_instance = DailyMetricTimeSeries.from_json(json)
# print the JSON string representation of the object
print(DailyMetricTimeSeries.to_json())

# convert the object into a dict
daily_metric_time_series_dict = daily_metric_time_series_instance.to_dict()
# create an instance of DailyMetricTimeSeries from a dict
daily_metric_time_series_from_dict = DailyMetricTimeSeries.from_dict(daily_metric_time_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


