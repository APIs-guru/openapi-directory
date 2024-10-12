# ForecastPerformanceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_of_error** | **float** |  | [optional] 
**data** | [**List[ForecastPerformanceDataRequest]**](ForecastPerformanceDataRequest.md) |  | [optional] 
**method** | **str** |  | 
**params** | [**PlanningLevelInfoRequest**](PlanningLevelInfoRequest.md) |  | [optional] 
**planning_level_id** | **str** |  | 
**rewind_time_frame** | **int** |  | 
**start_date** | **str** |  | 

## Example

```python
from openapi_client.models.forecast_performance_request import ForecastPerformanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastPerformanceRequest from a JSON string
forecast_performance_request_instance = ForecastPerformanceRequest.from_json(json)
# print the JSON string representation of the object
print(ForecastPerformanceRequest.to_json())

# convert the object into a dict
forecast_performance_request_dict = forecast_performance_request_instance.to_dict()
# create an instance of ForecastPerformanceRequest from a dict
forecast_performance_request_from_dict = ForecastPerformanceRequest.from_dict(forecast_performance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


