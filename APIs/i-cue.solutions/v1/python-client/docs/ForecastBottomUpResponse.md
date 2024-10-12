# ForecastBottomUpResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forecast_data** | [**List[PlanningLevelForecastResultData]**](PlanningLevelForecastResultData.md) |  | [optional] 
**hyperparameters** | [**ForecastHyperparameterResponse**](ForecastHyperparameterResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.forecast_bottom_up_response import ForecastBottomUpResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastBottomUpResponse from a JSON string
forecast_bottom_up_response_instance = ForecastBottomUpResponse.from_json(json)
# print the JSON string representation of the object
print(ForecastBottomUpResponse.to_json())

# convert the object into a dict
forecast_bottom_up_response_dict = forecast_bottom_up_response_instance.to_dict()
# create an instance of ForecastBottomUpResponse from a dict
forecast_bottom_up_response_from_dict = ForecastBottomUpResponse.from_dict(forecast_bottom_up_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


