# MultiDailyMetricTimeSeries

Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_metric_time_series** | [**List[DailyMetricTimeSeries]**](DailyMetricTimeSeries.md) | List of DailyMetric-TimeSeries pairs. | [optional] 

## Example

```python
from openapi_client.models.multi_daily_metric_time_series import MultiDailyMetricTimeSeries

# TODO update the JSON string below
json = "{}"
# create an instance of MultiDailyMetricTimeSeries from a JSON string
multi_daily_metric_time_series_instance = MultiDailyMetricTimeSeries.from_json(json)
# print the JSON string representation of the object
print(MultiDailyMetricTimeSeries.to_json())

# convert the object into a dict
multi_daily_metric_time_series_dict = multi_daily_metric_time_series_instance.to_dict()
# create an instance of MultiDailyMetricTimeSeries from a dict
multi_daily_metric_time_series_from_dict = MultiDailyMetricTimeSeries.from_dict(multi_daily_metric_time_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


