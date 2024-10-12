# TimeSeriesOptimalParametersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** |  | [optional] 
**optimal_parameters** | [**ForecastOptimalParametersResponse**](ForecastOptimalParametersResponse.md) |  | [optional] 
**time_series_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.time_series_optimal_parameters_response import TimeSeriesOptimalParametersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesOptimalParametersResponse from a JSON string
time_series_optimal_parameters_response_instance = TimeSeriesOptimalParametersResponse.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesOptimalParametersResponse.to_json())

# convert the object into a dict
time_series_optimal_parameters_response_dict = time_series_optimal_parameters_response_instance.to_dict()
# create an instance of TimeSeriesOptimalParametersResponse from a dict
time_series_optimal_parameters_response_from_dict = TimeSeriesOptimalParametersResponse.from_dict(time_series_optimal_parameters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


