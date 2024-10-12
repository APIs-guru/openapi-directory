# GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageObjectDetectionEvaluationMetrics

Metrics for image object detection evaluation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box_mean_average_precision** | **float** | The single metric for bounding boxes evaluation: the &#x60;meanAveragePrecision&#x60; averaged over all &#x60;boundingBoxMetricsEntries&#x60;. | [optional] 
**bounding_box_metrics** | [**List[GoogleCloudAiplatformV1SchemaModelevaluationMetricsBoundingBoxMetrics]**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsBoundingBoxMetrics.md) | The bounding boxes match metrics for each intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair. | [optional] 
**evaluated_bounding_box_count** | **int** | The total number of bounding boxes (i.e. summed over all images) the ground truth used to create this evaluation had. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_object_detection_evaluation_metrics import GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageObjectDetectionEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageObjectDetectionEvaluationMetrics from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_object_detection_evaluation_metrics_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageObjectDetectionEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageObjectDetectionEvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_object_detection_evaluation_metrics_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_object_detection_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageObjectDetectionEvaluationMetrics from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_object_detection_evaluation_metrics_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageObjectDetectionEvaluationMetrics.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_object_detection_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


