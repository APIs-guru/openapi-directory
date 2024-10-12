# ForecastHyperparameterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discard_data** | **bool** |  | [optional] 
**error_type** | **str** |  | [optional] 
**hold_out_period** | **int** |  | [optional] 
**no_fcst** | **int** |  | [optional] 
**periodicity** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.forecast_hyperparameter_response import ForecastHyperparameterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastHyperparameterResponse from a JSON string
forecast_hyperparameter_response_instance = ForecastHyperparameterResponse.from_json(json)
# print the JSON string representation of the object
print(ForecastHyperparameterResponse.to_json())

# convert the object into a dict
forecast_hyperparameter_response_dict = forecast_hyperparameter_response_instance.to_dict()
# create an instance of ForecastHyperparameterResponse from a dict
forecast_hyperparameter_response_from_dict = ForecastHyperparameterResponse.from_dict(forecast_hyperparameter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


