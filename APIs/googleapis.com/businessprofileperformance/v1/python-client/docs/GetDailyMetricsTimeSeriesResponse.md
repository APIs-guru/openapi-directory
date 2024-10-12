# GetDailyMetricsTimeSeriesResponse

Represents the response for GetDailyMetricsTimeSeries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_series** | [**TimeSeries**](TimeSeries.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_daily_metrics_time_series_response import GetDailyMetricsTimeSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetDailyMetricsTimeSeriesResponse from a JSON string
get_daily_metrics_time_series_response_instance = GetDailyMetricsTimeSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(GetDailyMetricsTimeSeriesResponse.to_json())

# convert the object into a dict
get_daily_metrics_time_series_response_dict = get_daily_metrics_time_series_response_instance.to_dict()
# create an instance of GetDailyMetricsTimeSeriesResponse from a dict
get_daily_metrics_time_series_response_from_dict = GetDailyMetricsTimeSeriesResponse.from_dict(get_daily_metrics_time_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


