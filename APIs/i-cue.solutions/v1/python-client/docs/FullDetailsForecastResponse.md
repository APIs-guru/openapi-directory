# FullDetailsForecastResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hyperparameters** | [**ForecastHyperparameterResponse**](ForecastHyperparameterResponse.md) |  | [optional] 
**time_series** | [**List[TimeSeriesFullDetailsResponse]**](TimeSeriesFullDetailsResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.full_details_forecast_response import FullDetailsForecastResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FullDetailsForecastResponse from a JSON string
full_details_forecast_response_instance = FullDetailsForecastResponse.from_json(json)
# print the JSON string representation of the object
print(FullDetailsForecastResponse.to_json())

# convert the object into a dict
full_details_forecast_response_dict = full_details_forecast_response_instance.to_dict()
# create an instance of FullDetailsForecastResponse from a dict
full_details_forecast_response_from_dict = FullDetailsForecastResponse.from_dict(full_details_forecast_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


