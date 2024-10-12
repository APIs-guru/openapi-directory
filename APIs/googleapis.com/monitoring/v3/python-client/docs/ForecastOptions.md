# ForecastOptions

Options used when forecasting the time series and testing the predicted value against the threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forecast_horizon** | **str** | Required. The length of time into the future to forecast whether a time series will violate the threshold. If the predicted value is found to violate the threshold, and the violation is observed in all forecasts made for the configured duration, then the time series is considered to be failing. The forecast horizon can range from 1 hour to 60 hours. | [optional] 

## Example

```python
from openapi_client.models.forecast_options import ForecastOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastOptions from a JSON string
forecast_options_instance = ForecastOptions.from_json(json)
# print the JSON string representation of the object
print(ForecastOptions.to_json())

# convert the object into a dict
forecast_options_dict = forecast_options_instance.to_dict()
# create an instance of ForecastOptions from a dict
forecast_options_from_dict = ForecastOptions.from_dict(forecast_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


