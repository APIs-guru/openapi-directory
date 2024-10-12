# HistoryAndForecastResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hyperparameters** | [**ForecastHyperparameterResponse**](ForecastHyperparameterResponse.md) |  | [optional] 
**time_series** | [**List[TimeSeriesHistoryAndForecastResponse]**](TimeSeriesHistoryAndForecastResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.history_and_forecast_response import HistoryAndForecastResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryAndForecastResponse from a JSON string
history_and_forecast_response_instance = HistoryAndForecastResponse.from_json(json)
# print the JSON string representation of the object
print(HistoryAndForecastResponse.to_json())

# convert the object into a dict
history_and_forecast_response_dict = history_and_forecast_response_instance.to_dict()
# create an instance of HistoryAndForecastResponse from a dict
history_and_forecast_response_from_dict = HistoryAndForecastResponse.from_dict(history_and_forecast_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


