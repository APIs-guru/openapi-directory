# GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsImageSegmentationEvaluationMetrics

Metrics for image segmentation evaluation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics_entries** | [**List[GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsImageSegmentationEvaluationMetricsConfidenceMetricsEntry]**](GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsImageSegmentationEvaluationMetricsConfidenceMetricsEntry.md) | Metrics for each confidenceThreshold in 0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 Precision-recall curve can be derived from it. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics import GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsImageSegmentationEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsImageSegmentationEvaluationMetrics from a JSON string
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_instance = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsImageSegmentationEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsImageSegmentationEvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_dict = google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsImageSegmentationEvaluationMetrics from a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_from_dict = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsImageSegmentationEvaluationMetrics.from_dict(google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


