# GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetrics

Metrics for forecasting evaluation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mean_absolute_error** | **float** | Mean Absolute Error (MAE). | [optional] 
**mean_absolute_percentage_error** | **float** | Mean absolute percentage error. Infinity when there are zeros in the ground truth. | [optional] 
**quantile_metrics** | [**List[GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetricsQuantileMetricsEntry]**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetricsQuantileMetricsEntry.md) | The quantile metrics entries for each quantile. | [optional] 
**r_squared** | **float** | Coefficient of determination as Pearson correlation coefficient. Undefined when ground truth or predictions are constant or near constant. | [optional] 
**root_mean_squared_error** | **float** | Root Mean Squared Error (RMSE). | [optional] 
**root_mean_squared_log_error** | **float** | Root mean squared log error. Undefined when there are negative ground truth values or predictions. | [optional] 
**root_mean_squared_percentage_error** | **float** | Root Mean Square Percentage Error. Square root of MSPE. Undefined/imaginary when MSPE is negative. | [optional] 
**weighted_absolute_percentage_error** | **float** | Weighted Absolute Percentage Error. Does not use weights, this is just what the metric is called. Undefined if actual values sum to zero. Will be very large if actual values sum to a very small number. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics import GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetrics from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetrics from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetrics.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


