# OptimalParameterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hyperparameters** | [**ForecastHyperparameterResponse**](ForecastHyperparameterResponse.md) |  | [optional] 
**time_series** | [**List[TimeSeriesOptimalParametersResponse]**](TimeSeriesOptimalParametersResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.optimal_parameter_response import OptimalParameterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OptimalParameterResponse from a JSON string
optimal_parameter_response_instance = OptimalParameterResponse.from_json(json)
# print the JSON string representation of the object
print(OptimalParameterResponse.to_json())

# convert the object into a dict
optimal_parameter_response_dict = optimal_parameter_response_instance.to_dict()
# create an instance of OptimalParameterResponse from a dict
optimal_parameter_response_from_dict = OptimalParameterResponse.from_dict(optimal_parameter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


