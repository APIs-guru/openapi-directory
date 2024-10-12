# GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoClassificationPredictionResult

Prediction output format for Video Classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The Model&#39;s confidence in correction of this prediction, higher value means higher confidence. | [optional] 
**display_name** | **str** | The display name of the AnnotationSpec that had been identified. | [optional] 
**id** | **str** | The resource ID of the AnnotationSpec that had been identified. | [optional] 
**time_segment_end** | **str** | The end, exclusive, of the video&#39;s time segment in which the AnnotationSpec has been identified. Expressed as a number of seconds as measured from the start of the video, with fractions up to a microsecond precision, and with \&quot;s\&quot; appended at the end. Note that for &#39;segment-classification&#39; prediction type, this equals the original &#39;timeSegmentEnd&#39; from the input instance, for other types it is the end of a shot or a 1 second interval respectively. | [optional] 
**time_segment_start** | **str** | The beginning, inclusive, of the video&#39;s time segment in which the AnnotationSpec has been identified. Expressed as a number of seconds as measured from the start of the video, with fractions up to a microsecond precision, and with \&quot;s\&quot; appended at the end. Note that for &#39;segment-classification&#39; prediction type, this equals the original &#39;timeSegmentStart&#39; from the input instance, for other types it is the start of a shot or a 1 second interval respectively. | [optional] 
**type** | **str** | The type of the prediction. The requested types can be configured via parameters. This will be one of - segment-classification - shot-classification - one-sec-interval-classification | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_classification_prediction_result import GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoClassificationPredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoClassificationPredictionResult from a JSON string
google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_classification_prediction_result_instance = GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoClassificationPredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoClassificationPredictionResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_classification_prediction_result_dict = google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_classification_prediction_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoClassificationPredictionResult from a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_classification_prediction_result_from_dict = GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoClassificationPredictionResult.from_dict(google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_classification_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


