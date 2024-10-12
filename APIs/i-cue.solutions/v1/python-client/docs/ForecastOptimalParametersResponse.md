# ForecastOptimalParametersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alpha** | **float** |  | [optional] 
**beta** | **float** |  | [optional] 
**gamma** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.forecast_optimal_parameters_response import ForecastOptimalParametersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastOptimalParametersResponse from a JSON string
forecast_optimal_parameters_response_instance = ForecastOptimalParametersResponse.from_json(json)
# print the JSON string representation of the object
print(ForecastOptimalParametersResponse.to_json())

# convert the object into a dict
forecast_optimal_parameters_response_dict = forecast_optimal_parameters_response_instance.to_dict()
# create an instance of ForecastOptimalParametersResponse from a dict
forecast_optimal_parameters_response_from_dict = ForecastOptimalParametersResponse.from_dict(forecast_optimal_parameters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


