# GoogleCloudAiplatformV1SchemaPredictPredictionImageObjectDetectionPredictionResult

Prediction output format for Image Object Detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bboxes** | **List[List[object]]** | Bounding boxes, i.e. the rectangles over the image, that pinpoint the found AnnotationSpecs. Given in order that matches the IDs. Each bounding box is an array of 4 numbers &#x60;xMin&#x60;, &#x60;xMax&#x60;, &#x60;yMin&#x60;, and &#x60;yMax&#x60;, which represent the extremal coordinates of the box. They are relative to the image size, and the point 0,0 is in the top left of the image. | [optional] 
**confidences** | **List[float]** | The Model&#39;s confidences in correctness of the predicted IDs, higher value means higher confidence. Order matches the Ids. | [optional] 
**display_names** | **List[str]** | The display names of the AnnotationSpecs that had been identified, order matches the IDs. | [optional] 
**ids** | **List[str]** | The resource IDs of the AnnotationSpecs that had been identified, ordered by the confidence score descendingly. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_prediction_image_object_detection_prediction_result import GoogleCloudAiplatformV1SchemaPredictPredictionImageObjectDetectionPredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionImageObjectDetectionPredictionResult from a JSON string
google_cloud_aiplatform_v1_schema_predict_prediction_image_object_detection_prediction_result_instance = GoogleCloudAiplatformV1SchemaPredictPredictionImageObjectDetectionPredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictPredictionImageObjectDetectionPredictionResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_prediction_image_object_detection_prediction_result_dict = google_cloud_aiplatform_v1_schema_predict_prediction_image_object_detection_prediction_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionImageObjectDetectionPredictionResult from a dict
google_cloud_aiplatform_v1_schema_predict_prediction_image_object_detection_prediction_result_from_dict = GoogleCloudAiplatformV1SchemaPredictPredictionImageObjectDetectionPredictionResult.from_dict(google_cloud_aiplatform_v1_schema_predict_prediction_image_object_detection_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


