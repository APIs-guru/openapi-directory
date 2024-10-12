# XPSRegressionEvaluationMetrics

Model evaluation metrics for regression problems. It can be used for Tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mean_absolute_error** | **float** | Mean Absolute Error (MAE). | [optional] 
**mean_absolute_percentage_error** | **float** | Mean absolute percentage error. Only set if all ground truth values are positive. | [optional] 
**r_squared** | **float** | R squared. | [optional] 
**regression_metrics_entries** | [**List[XPSRegressionMetricsEntry]**](XPSRegressionMetricsEntry.md) | A list of actual versus predicted points for the model being evaluated. | [optional] 
**root_mean_squared_error** | **float** | Root Mean Squared Error (RMSE). | [optional] 
**root_mean_squared_log_error** | **float** | Root mean squared log error. | [optional] 

## Example

```python
from openapi_client.models.xps_regression_evaluation_metrics import XPSRegressionEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSRegressionEvaluationMetrics from a JSON string
xps_regression_evaluation_metrics_instance = XPSRegressionEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSRegressionEvaluationMetrics.to_json())

# convert the object into a dict
xps_regression_evaluation_metrics_dict = xps_regression_evaluation_metrics_instance.to_dict()
# create an instance of XPSRegressionEvaluationMetrics from a dict
xps_regression_evaluation_metrics_from_dict = XPSRegressionEvaluationMetrics.from_dict(xps_regression_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


