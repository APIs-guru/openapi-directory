# GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageSegmentationEvaluationMetricsConfidenceMetricsEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Metrics are computed with an assumption that the model never returns predictions with score lower than this value. | [optional] 
**confusion_matrix** | [**GoogleCloudAiplatformV1SchemaModelevaluationMetricsConfusionMatrix**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsConfusionMatrix.md) |  | [optional] 
**dice_score_coefficient** | **float** | DSC or the F1 score, The harmonic mean of recall and precision. | [optional] 
**iou_score** | **float** | The intersection-over-union score. The measure of overlap of the annotation&#39;s category mask with ground truth category mask on the DataItem. | [optional] 
**precision** | **float** | Precision for the given confidence threshold. | [optional] 
**recall** | **float** | Recall (True Positive Rate) for the given confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_confidence_metrics_entry import GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageSegmentationEvaluationMetricsConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageSegmentationEvaluationMetricsConfidenceMetricsEntry from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_confidence_metrics_entry_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageSegmentationEvaluationMetricsConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageSegmentationEvaluationMetricsConfidenceMetricsEntry.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_confidence_metrics_entry_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_confidence_metrics_entry_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageSegmentationEvaluationMetricsConfidenceMetricsEntry from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_confidence_metrics_entry_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsImageSegmentationEvaluationMetricsConfidenceMetricsEntry.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_image_segmentation_evaluation_metrics_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


