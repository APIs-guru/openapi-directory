# RegressionMetrics

Evaluation metrics for regression and explicit feedback type matrix factorization models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mean_absolute_error** | **float** | Mean absolute error. | [optional] 
**mean_squared_error** | **float** | Mean squared error. | [optional] 
**mean_squared_log_error** | **float** | Mean squared log error. | [optional] 
**median_absolute_error** | **float** | Median absolute error. | [optional] 
**r_squared** | **float** | R^2 score. This corresponds to r2_score in ML.EVALUATE. | [optional] 

## Example

```python
from openapi_client.models.regression_metrics import RegressionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of RegressionMetrics from a JSON string
regression_metrics_instance = RegressionMetrics.from_json(json)
# print the JSON string representation of the object
print(RegressionMetrics.to_json())

# convert the object into a dict
regression_metrics_dict = regression_metrics_instance.to_dict()
# create an instance of RegressionMetrics from a dict
regression_metrics_from_dict = RegressionMetrics.from_dict(regression_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


