# FetchMultiDailyMetricsTimeSeriesResponse

Represents the response for FetchMultiDailyMetricsTimeSeries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multi_daily_metric_time_series** | [**List[MultiDailyMetricTimeSeries]**](MultiDailyMetricTimeSeries.md) | DailyMetrics and their corresponding time series. | [optional] 

## Example

```python
from openapi_client.models.fetch_multi_daily_metrics_time_series_response import FetchMultiDailyMetricsTimeSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchMultiDailyMetricsTimeSeriesResponse from a JSON string
fetch_multi_daily_metrics_time_series_response_instance = FetchMultiDailyMetricsTimeSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(FetchMultiDailyMetricsTimeSeriesResponse.to_json())

# convert the object into a dict
fetch_multi_daily_metrics_time_series_response_dict = fetch_multi_daily_metrics_time_series_response_instance.to_dict()
# create an instance of FetchMultiDailyMetricsTimeSeriesResponse from a dict
fetch_multi_daily_metrics_time_series_response_from_dict = FetchMultiDailyMetricsTimeSeriesResponse.from_dict(fetch_multi_daily_metrics_time_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


