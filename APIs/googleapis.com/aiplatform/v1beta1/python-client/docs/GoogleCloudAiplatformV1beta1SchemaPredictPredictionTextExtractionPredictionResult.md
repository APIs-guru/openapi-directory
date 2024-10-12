# GoogleCloudAiplatformV1beta1SchemaPredictPredictionTextExtractionPredictionResult

Prediction output format for Text Extraction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidences** | **List[float]** | The Model&#39;s confidences in correctness of the predicted IDs, higher value means higher confidence. Order matches the Ids. | [optional] 
**display_names** | **List[str]** | The display names of the AnnotationSpecs that had been identified, order matches the IDs. | [optional] 
**ids** | **List[str]** | The resource IDs of the AnnotationSpecs that had been identified, ordered by the confidence score descendingly. | [optional] 
**text_segment_end_offsets** | **List[str]** | The end offsets, inclusive, of the text segment in which the AnnotationSpec has been identified. Expressed as a zero-based number of characters as measured from the start of the text snippet. | [optional] 
**text_segment_start_offsets** | **List[str]** | The start offsets, inclusive, of the text segment in which the AnnotationSpec has been identified. Expressed as a zero-based number of characters as measured from the start of the text snippet. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_predict_prediction_text_extraction_prediction_result import GoogleCloudAiplatformV1beta1SchemaPredictPredictionTextExtractionPredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionTextExtractionPredictionResult from a JSON string
google_cloud_aiplatform_v1beta1_schema_predict_prediction_text_extraction_prediction_result_instance = GoogleCloudAiplatformV1beta1SchemaPredictPredictionTextExtractionPredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaPredictPredictionTextExtractionPredictionResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_text_extraction_prediction_result_dict = google_cloud_aiplatform_v1beta1_schema_predict_prediction_text_extraction_prediction_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionTextExtractionPredictionResult from a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_text_extraction_prediction_result_from_dict = GoogleCloudAiplatformV1beta1SchemaPredictPredictionTextExtractionPredictionResult.from_dict(google_cloud_aiplatform_v1beta1_schema_predict_prediction_text_extraction_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


