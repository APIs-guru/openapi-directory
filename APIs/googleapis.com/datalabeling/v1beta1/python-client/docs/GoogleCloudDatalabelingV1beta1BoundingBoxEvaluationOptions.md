# GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions

Options regarding evaluation between bounding boxes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iou_threshold** | **float** | Minimum [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) required for 2 bounding boxes to be considered a match. This must be a number between 0 and 1. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_bounding_box_evaluation_options import GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions from a JSON string
google_cloud_datalabeling_v1beta1_bounding_box_evaluation_options_instance = GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_bounding_box_evaluation_options_dict = google_cloud_datalabeling_v1beta1_bounding_box_evaluation_options_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions from a dict
google_cloud_datalabeling_v1beta1_bounding_box_evaluation_options_from_dict = GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions.from_dict(google_cloud_datalabeling_v1beta1_bounding_box_evaluation_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


