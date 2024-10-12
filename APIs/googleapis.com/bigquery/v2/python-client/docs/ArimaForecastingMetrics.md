# ArimaForecastingMetrics

Model evaluation metrics for ARIMA forecasting models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arima_fitting_metrics** | [**List[ArimaFittingMetrics]**](ArimaFittingMetrics.md) | Arima model fitting metrics. | [optional] 
**arima_single_model_forecasting_metrics** | [**List[ArimaSingleModelForecastingMetrics]**](ArimaSingleModelForecastingMetrics.md) | Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case. | [optional] 
**has_drift** | **List[bool]** | Whether Arima model fitted with drift or not. It is always false when d is not 1. | [optional] 
**non_seasonal_order** | [**List[ArimaOrder]**](ArimaOrder.md) | Non-seasonal order. | [optional] 
**seasonal_periods** | **List[str]** | Seasonal periods. Repeated because multiple periods are supported for one time series. | [optional] 
**time_series_id** | **List[str]** | Id to differentiate different time series for the large-scale case. | [optional] 

## Example

```python
from openapi_client.models.arima_forecasting_metrics import ArimaForecastingMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ArimaForecastingMetrics from a JSON string
arima_forecasting_metrics_instance = ArimaForecastingMetrics.from_json(json)
# print the JSON string representation of the object
print(ArimaForecastingMetrics.to_json())

# convert the object into a dict
arima_forecasting_metrics_dict = arima_forecasting_metrics_instance.to_dict()
# create an instance of ArimaForecastingMetrics from a dict
arima_forecasting_metrics_from_dict = ArimaForecastingMetrics.from_dict(arima_forecasting_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


