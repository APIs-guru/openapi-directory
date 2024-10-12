# TimeSeriesHistoryAndForecastResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **float** |  | [optional] 
**forecast_data** | [**List[PlanningLevelForecastResultData]**](PlanningLevelForecastResultData.md) |  | [optional] 
**history_data** | [**List[PlanningLevelForecastResultData]**](PlanningLevelForecastResultData.md) |  | [optional] 
**method** | **str** |  | [optional] 
**time_series_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.time_series_history_and_forecast_response import TimeSeriesHistoryAndForecastResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesHistoryAndForecastResponse from a JSON string
time_series_history_and_forecast_response_instance = TimeSeriesHistoryAndForecastResponse.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesHistoryAndForecastResponse.to_json())

# convert the object into a dict
time_series_history_and_forecast_response_dict = time_series_history_and_forecast_response_instance.to_dict()
# create an instance of TimeSeriesHistoryAndForecastResponse from a dict
time_series_history_and_forecast_response_from_dict = TimeSeriesHistoryAndForecastResponse.from_dict(time_series_history_and_forecast_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


