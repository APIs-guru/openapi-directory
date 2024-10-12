# GoogleCloudAiplatformV1SchemaPredictInstanceImageClassificationPredictionInstance

Prediction input format for Image Classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The image bytes or Cloud Storage URI to make the prediction on. | [optional] 
**mime_type** | **str** | The MIME type of the content of the image. Only the images in below listed MIME types are supported. - image/jpeg - image/gif - image/png - image/webp - image/bmp - image/tiff - image/vnd.microsoft.icon | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_instance_image_classification_prediction_instance import GoogleCloudAiplatformV1SchemaPredictInstanceImageClassificationPredictionInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictInstanceImageClassificationPredictionInstance from a JSON string
google_cloud_aiplatform_v1_schema_predict_instance_image_classification_prediction_instance_instance = GoogleCloudAiplatformV1SchemaPredictInstanceImageClassificationPredictionInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictInstanceImageClassificationPredictionInstance.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_instance_image_classification_prediction_instance_dict = google_cloud_aiplatform_v1_schema_predict_instance_image_classification_prediction_instance_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictInstanceImageClassificationPredictionInstance from a dict
google_cloud_aiplatform_v1_schema_predict_instance_image_classification_prediction_instance_from_dict = GoogleCloudAiplatformV1SchemaPredictInstanceImageClassificationPredictionInstance.from_dict(google_cloud_aiplatform_v1_schema_predict_instance_image_classification_prediction_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


