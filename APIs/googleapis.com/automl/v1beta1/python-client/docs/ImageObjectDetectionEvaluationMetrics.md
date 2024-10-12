# ImageObjectDetectionEvaluationMetrics

Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box_mean_average_precision** | **float** | Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. | [optional] 
**bounding_box_metrics_entries** | [**List[BoundingBoxMetricsEntry]**](BoundingBoxMetricsEntry.md) | Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair. | [optional] 
**evaluated_bounding_box_count** | **int** | Output only. The total number of bounding boxes (i.e. summed over all images) the ground truth used to create this evaluation had. | [optional] 

## Example

```python
from openapi_client.models.image_object_detection_evaluation_metrics import ImageObjectDetectionEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ImageObjectDetectionEvaluationMetrics from a JSON string
image_object_detection_evaluation_metrics_instance = ImageObjectDetectionEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(ImageObjectDetectionEvaluationMetrics.to_json())

# convert the object into a dict
image_object_detection_evaluation_metrics_dict = image_object_detection_evaluation_metrics_instance.to_dict()
# create an instance of ImageObjectDetectionEvaluationMetrics from a dict
image_object_detection_evaluation_metrics_from_dict = ImageObjectDetectionEvaluationMetrics.from_dict(image_object_detection_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


