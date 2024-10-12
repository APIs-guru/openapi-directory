# GoogleCloudAiplatformV1SchemaPredictPredictionImageSegmentationPredictionResult

Prediction output format for Image Segmentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_mask** | **str** | A PNG image where each pixel in the mask represents the category in which the pixel in the original image was predicted to belong to. The size of this image will be the same as the original image. The mapping between the AnntoationSpec and the color can be found in model&#39;s metadata. The model will choose the most likely category and if none of the categories reach the confidence threshold, the pixel will be marked as background. | [optional] 
**confidence_mask** | **str** | A one channel image which is encoded as an 8bit lossless PNG. The size of the image will be the same as the original image. For a specific pixel, darker color means less confidence in correctness of the cateogry in the categoryMask for the corresponding pixel. Black means no confidence and white means complete confidence. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_prediction_image_segmentation_prediction_result import GoogleCloudAiplatformV1SchemaPredictPredictionImageSegmentationPredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionImageSegmentationPredictionResult from a JSON string
google_cloud_aiplatform_v1_schema_predict_prediction_image_segmentation_prediction_result_instance = GoogleCloudAiplatformV1SchemaPredictPredictionImageSegmentationPredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictPredictionImageSegmentationPredictionResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_prediction_image_segmentation_prediction_result_dict = google_cloud_aiplatform_v1_schema_predict_prediction_image_segmentation_prediction_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionImageSegmentationPredictionResult from a dict
google_cloud_aiplatform_v1_schema_predict_prediction_image_segmentation_prediction_result_from_dict = GoogleCloudAiplatformV1SchemaPredictPredictionImageSegmentationPredictionResult.from_dict(google_cloud_aiplatform_v1_schema_predict_prediction_image_segmentation_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


