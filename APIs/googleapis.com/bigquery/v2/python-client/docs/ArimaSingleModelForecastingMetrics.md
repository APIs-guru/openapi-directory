# ArimaSingleModelForecastingMetrics

Model evaluation metrics for a single ARIMA forecasting model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arima_fitting_metrics** | [**ArimaFittingMetrics**](ArimaFittingMetrics.md) |  | [optional] 
**has_drift** | **bool** | Is arima model fitted with drift or not. It is always false when d is not 1. | [optional] 
**has_holiday_effect** | **bool** | If true, holiday_effect is a part of time series decomposition result. | [optional] 
**has_spikes_and_dips** | **bool** | If true, spikes_and_dips is a part of time series decomposition result. | [optional] 
**has_step_changes** | **bool** | If true, step_changes is a part of time series decomposition result. | [optional] 
**non_seasonal_order** | [**ArimaOrder**](ArimaOrder.md) |  | [optional] 
**seasonal_periods** | **List[str]** | Seasonal periods. Repeated because multiple periods are supported for one time series. | [optional] 
**time_series_id** | **str** | The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used. | [optional] 
**time_series_ids** | **List[str]** | The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns. | [optional] 

## Example

```python
from openapi_client.models.arima_single_model_forecasting_metrics import ArimaSingleModelForecastingMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ArimaSingleModelForecastingMetrics from a JSON string
arima_single_model_forecasting_metrics_instance = ArimaSingleModelForecastingMetrics.from_json(json)
# print the JSON string representation of the object
print(ArimaSingleModelForecastingMetrics.to_json())

# convert the object into a dict
arima_single_model_forecasting_metrics_dict = arima_single_model_forecasting_metrics_instance.to_dict()
# create an instance of ArimaSingleModelForecastingMetrics from a dict
arima_single_model_forecasting_metrics_from_dict = ArimaSingleModelForecastingMetrics.from_dict(arima_single_model_forecasting_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


