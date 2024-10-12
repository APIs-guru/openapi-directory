# GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsBoundingBoxMetrics

Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics** | [**List[GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsBoundingBoxMetricsConfidenceMetrics]**](GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsBoundingBoxMetricsConfidenceMetrics.md) | Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them. | [optional] 
**iou_threshold** | **float** | The intersection-over-union threshold value used to compute this metrics entry. | [optional] 
**mean_average_precision** | **float** | The mean average precision, most often close to &#x60;auPrc&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_bounding_box_metrics import GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsBoundingBoxMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsBoundingBoxMetrics from a JSON string
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_bounding_box_metrics_instance = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsBoundingBoxMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsBoundingBoxMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_bounding_box_metrics_dict = google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_bounding_box_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsBoundingBoxMetrics from a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_bounding_box_metrics_from_dict = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsBoundingBoxMetrics.from_dict(google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_bounding_box_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


