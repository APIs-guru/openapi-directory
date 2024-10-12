# GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsRegressionEvaluationMetrics

Metrics for regression evaluation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mean_absolute_error** | **float** | Mean Absolute Error (MAE). | [optional] 
**mean_absolute_percentage_error** | **float** | Mean absolute percentage error. Infinity when there are zeros in the ground truth. | [optional] 
**r_squared** | **float** | Coefficient of determination as Pearson correlation coefficient. Undefined when ground truth or predictions are constant or near constant. | [optional] 
**root_mean_squared_error** | **float** | Root Mean Squared Error (RMSE). | [optional] 
**root_mean_squared_log_error** | **float** | Root mean squared log error. Undefined when there are negative ground truth values or predictions. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_regression_evaluation_metrics import GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsRegressionEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsRegressionEvaluationMetrics from a JSON string
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_regression_evaluation_metrics_instance = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsRegressionEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsRegressionEvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_regression_evaluation_metrics_dict = google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_regression_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsRegressionEvaluationMetrics from a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_regression_evaluation_metrics_from_dict = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsRegressionEvaluationMetrics.from_dict(google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_regression_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


