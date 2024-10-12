# ArimaFittingMetrics

ARIMA model fitting metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aic** | **float** | AIC. | [optional] 
**log_likelihood** | **float** | Log-likelihood. | [optional] 
**variance** | **float** | Variance. | [optional] 

## Example

```python
from openapi_client.models.arima_fitting_metrics import ArimaFittingMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ArimaFittingMetrics from a JSON string
arima_fitting_metrics_instance = ArimaFittingMetrics.from_json(json)
# print the JSON string representation of the object
print(ArimaFittingMetrics.to_json())

# convert the object into a dict
arima_fitting_metrics_dict = arima_fitting_metrics_instance.to_dict()
# create an instance of ArimaFittingMetrics from a dict
arima_fitting_metrics_from_dict = ArimaFittingMetrics.from_dict(arima_fitting_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


