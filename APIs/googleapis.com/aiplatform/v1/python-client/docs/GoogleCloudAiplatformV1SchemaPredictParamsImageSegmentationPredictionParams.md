# GoogleCloudAiplatformV1SchemaPredictParamsImageSegmentationPredictionParams

Prediction model parameters for Image Segmentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | When the model predicts category of pixels of the image, it will only provide predictions for pixels that it is at least this much confident about. All other pixels will be classified as background. Default value is 0.5. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_params_image_segmentation_prediction_params import GoogleCloudAiplatformV1SchemaPredictParamsImageSegmentationPredictionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsImageSegmentationPredictionParams from a JSON string
google_cloud_aiplatform_v1_schema_predict_params_image_segmentation_prediction_params_instance = GoogleCloudAiplatformV1SchemaPredictParamsImageSegmentationPredictionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictParamsImageSegmentationPredictionParams.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_params_image_segmentation_prediction_params_dict = google_cloud_aiplatform_v1_schema_predict_params_image_segmentation_prediction_params_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsImageSegmentationPredictionParams from a dict
google_cloud_aiplatform_v1_schema_predict_params_image_segmentation_prediction_params_from_dict = GoogleCloudAiplatformV1SchemaPredictParamsImageSegmentationPredictionParams.from_dict(google_cloud_aiplatform_v1_schema_predict_params_image_segmentation_prediction_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


