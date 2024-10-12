# GoogleCloudAiplatformV1SchemaPredictInstanceImageSegmentationPredictionInstance

Prediction input format for Image Segmentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The image bytes to make the predictions on. | [optional] 
**mime_type** | **str** | The MIME type of the content of the image. Only the images in below listed MIME types are supported. - image/jpeg - image/png | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_instance_image_segmentation_prediction_instance import GoogleCloudAiplatformV1SchemaPredictInstanceImageSegmentationPredictionInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictInstanceImageSegmentationPredictionInstance from a JSON string
google_cloud_aiplatform_v1_schema_predict_instance_image_segmentation_prediction_instance_instance = GoogleCloudAiplatformV1SchemaPredictInstanceImageSegmentationPredictionInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictInstanceImageSegmentationPredictionInstance.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_instance_image_segmentation_prediction_instance_dict = google_cloud_aiplatform_v1_schema_predict_instance_image_segmentation_prediction_instance_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictInstanceImageSegmentationPredictionInstance from a dict
google_cloud_aiplatform_v1_schema_predict_instance_image_segmentation_prediction_instance_from_dict = GoogleCloudAiplatformV1SchemaPredictInstanceImageSegmentationPredictionInstance.from_dict(google_cloud_aiplatform_v1_schema_predict_instance_image_segmentation_prediction_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


