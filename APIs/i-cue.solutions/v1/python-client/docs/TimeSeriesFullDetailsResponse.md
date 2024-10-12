# TimeSeriesFullDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **float** |  | [optional] 
**forecast_data** | [**List[PlanningLevelForecastResultData]**](PlanningLevelForecastResultData.md) |  | [optional] 
**history_data** | [**List[PlanningLevelForecastResultData]**](PlanningLevelForecastResultData.md) |  | [optional] 
**method** | **str** |  | [optional] 
**optimal_parameters** | [**ForecastOptimalParametersResponse**](ForecastOptimalParametersResponse.md) |  | [optional] 
**outliers** | [**List[OutlierResponse]**](OutlierResponse.md) |  | [optional] 
**time_series_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.time_series_full_details_response import TimeSeriesFullDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesFullDetailsResponse from a JSON string
time_series_full_details_response_instance = TimeSeriesFullDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesFullDetailsResponse.to_json())

# convert the object into a dict
time_series_full_details_response_dict = time_series_full_details_response_instance.to_dict()
# create an instance of TimeSeriesFullDetailsResponse from a dict
time_series_full_details_response_from_dict = TimeSeriesFullDetailsResponse.from_dict(time_series_full_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


