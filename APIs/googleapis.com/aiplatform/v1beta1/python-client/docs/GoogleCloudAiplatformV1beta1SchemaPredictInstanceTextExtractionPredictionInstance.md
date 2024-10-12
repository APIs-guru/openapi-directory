# GoogleCloudAiplatformV1beta1SchemaPredictInstanceTextExtractionPredictionInstance

Prediction input format for Text Extraction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The text snippet to make the predictions on. | [optional] 
**key** | **str** | This field is only used for batch prediction. If a key is provided, the batch prediction result will by mapped to this key. If omitted, then the batch prediction result will contain the entire input instance. Vertex AI will not check if keys in the request are duplicates, so it is up to the caller to ensure the keys are unique. | [optional] 
**mime_type** | **str** | The MIME type of the text snippet. The supported MIME types are listed below. - text/plain | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_predict_instance_text_extraction_prediction_instance import GoogleCloudAiplatformV1beta1SchemaPredictInstanceTextExtractionPredictionInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictInstanceTextExtractionPredictionInstance from a JSON string
google_cloud_aiplatform_v1beta1_schema_predict_instance_text_extraction_prediction_instance_instance = GoogleCloudAiplatformV1beta1SchemaPredictInstanceTextExtractionPredictionInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaPredictInstanceTextExtractionPredictionInstance.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_predict_instance_text_extraction_prediction_instance_dict = google_cloud_aiplatform_v1beta1_schema_predict_instance_text_extraction_prediction_instance_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictInstanceTextExtractionPredictionInstance from a dict
google_cloud_aiplatform_v1beta1_schema_predict_instance_text_extraction_prediction_instance_from_dict = GoogleCloudAiplatformV1beta1SchemaPredictInstanceTextExtractionPredictionInstance.from_dict(google_cloud_aiplatform_v1beta1_schema_predict_instance_text_extraction_prediction_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


