# RegressionEvaluationMetrics

Metrics for regression problems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mean_absolute_error** | **float** | Output only. Mean Absolute Error (MAE). | [optional] 
**mean_absolute_percentage_error** | **float** | Output only. Mean absolute percentage error. Only set if all ground truth values are are positive. | [optional] 
**r_squared** | **float** | Output only. R squared. | [optional] 
**root_mean_squared_error** | **float** | Output only. Root Mean Squared Error (RMSE). | [optional] 
**root_mean_squared_log_error** | **float** | Output only. Root mean squared log error. | [optional] 

## Example

```python
from openapi_client.models.regression_evaluation_metrics import RegressionEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of RegressionEvaluationMetrics from a JSON string
regression_evaluation_metrics_instance = RegressionEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(RegressionEvaluationMetrics.to_json())

# convert the object into a dict
regression_evaluation_metrics_dict = regression_evaluation_metrics_instance.to_dict()
# create an instance of RegressionEvaluationMetrics from a dict
regression_evaluation_metrics_from_dict = RegressionEvaluationMetrics.from_dict(regression_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


