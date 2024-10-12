# GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetricsQuantileMetricsEntry

Entry for the Quantiles loss type optimization objective.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**observed_quantile** | **float** | This is a custom metric that calculates the percentage of true values that were less than the predicted value for that quantile. Only populated when optimization_objective is minimize-quantile-loss and each entry corresponds to an entry in quantiles The percent value can be used to compare with the quantile value, which is the target value. | [optional] 
**quantile** | **float** | The quantile for this entry. | [optional] 
**scaled_pinball_loss** | **float** | The scaled pinball loss of this quantile. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_quantile_metrics_entry import GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetricsQuantileMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetricsQuantileMetricsEntry from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_quantile_metrics_entry_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetricsQuantileMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetricsQuantileMetricsEntry.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_quantile_metrics_entry_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_quantile_metrics_entry_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetricsQuantileMetricsEntry from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_quantile_metrics_entry_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsForecastingEvaluationMetricsQuantileMetricsEntry.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_forecasting_evaluation_metrics_quantile_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


