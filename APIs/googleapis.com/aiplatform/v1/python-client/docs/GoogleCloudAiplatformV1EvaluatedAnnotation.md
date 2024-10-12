# GoogleCloudAiplatformV1EvaluatedAnnotation

True positive, false positive, or false negative. EvaluatedAnnotation is only available under ModelEvaluationSlice with slice of `annotationSpec` dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_item_payload** | **object** | Output only. The data item payload that the Model predicted this EvaluatedAnnotation on. | [optional] [readonly] 
**error_analysis_annotations** | [**List[GoogleCloudAiplatformV1ErrorAnalysisAnnotation]**](GoogleCloudAiplatformV1ErrorAnalysisAnnotation.md) | Annotations of model error analysis results. | [optional] 
**evaluated_data_item_view_id** | **str** | Output only. ID of the EvaluatedDataItemView under the same ancestor ModelEvaluation. The EvaluatedDataItemView consists of all ground truths and predictions on data_item_payload. | [optional] [readonly] 
**explanations** | [**List[GoogleCloudAiplatformV1EvaluatedAnnotationExplanation]**](GoogleCloudAiplatformV1EvaluatedAnnotationExplanation.md) | Explanations of predictions. Each element of the explanations indicates the explanation for one explanation Method. The attributions list in the EvaluatedAnnotationExplanation.explanation object corresponds to the predictions list. For example, the second element in the attributions list explains the second element in the predictions list. | [optional] 
**ground_truths** | **List[object]** | Output only. The ground truth Annotations, i.e. the Annotations that exist in the test data the Model is evaluated on. For true positive, there is one and only one ground truth annotation, which matches the only prediction in predictions. For false positive, there are zero or more ground truth annotations that are similar to the only prediction in predictions, but not enough for a match. For false negative, there is one and only one ground truth annotation, which doesn&#39;t match any predictions created by the model. The schema of the ground truth is stored in ModelEvaluation.annotation_schema_uri | [optional] [readonly] 
**predictions** | **List[object]** | Output only. The model predicted annotations. For true positive, there is one and only one prediction, which matches the only one ground truth annotation in ground_truths. For false positive, there is one and only one prediction, which doesn&#39;t match any ground truth annotation of the corresponding data_item_view_id. For false negative, there are zero or more predictions which are similar to the only ground truth annotation in ground_truths but not enough for a match. The schema of the prediction is stored in ModelEvaluation.annotation_schema_uri | [optional] [readonly] 
**type** | **str** | Output only. Type of the EvaluatedAnnotation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_evaluated_annotation import GoogleCloudAiplatformV1EvaluatedAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1EvaluatedAnnotation from a JSON string
google_cloud_aiplatform_v1_evaluated_annotation_instance = GoogleCloudAiplatformV1EvaluatedAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1EvaluatedAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_evaluated_annotation_dict = google_cloud_aiplatform_v1_evaluated_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1EvaluatedAnnotation from a dict
google_cloud_aiplatform_v1_evaluated_annotation_from_dict = GoogleCloudAiplatformV1EvaluatedAnnotation.from_dict(google_cloud_aiplatform_v1_evaluated_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


