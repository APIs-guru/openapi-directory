# ForecastPerformanceDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forecast_values** | **List[float]** |  | [optional] 
**history_values** | **List[float]** |  | [optional] 
**time_series_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.forecast_performance_data_request import ForecastPerformanceDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastPerformanceDataRequest from a JSON string
forecast_performance_data_request_instance = ForecastPerformanceDataRequest.from_json(json)
# print the JSON string representation of the object
print(ForecastPerformanceDataRequest.to_json())

# convert the object into a dict
forecast_performance_data_request_dict = forecast_performance_data_request_instance.to_dict()
# create an instance of ForecastPerformanceDataRequest from a dict
forecast_performance_data_request_from_dict = ForecastPerformanceDataRequest.from_dict(forecast_performance_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


