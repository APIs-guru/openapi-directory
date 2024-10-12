# ForecastResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hyperparameters** | [**ForecastHyperparameterResponse**](ForecastHyperparameterResponse.md) |  | [optional] 
**time_series** | [**List[TimeSeriesForecastResponse]**](TimeSeriesForecastResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.forecast_response import ForecastResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastResponse from a JSON string
forecast_response_instance = ForecastResponse.from_json(json)
# print the JSON string representation of the object
print(ForecastResponse.to_json())

# convert the object into a dict
forecast_response_dict = forecast_response_instance.to_dict()
# create an instance of ForecastResponse from a dict
forecast_response_from_dict = ForecastResponse.from_dict(forecast_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


