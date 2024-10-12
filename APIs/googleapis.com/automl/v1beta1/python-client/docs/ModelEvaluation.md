# ModelEvaluation

Evaluation results of a model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id** | **str** | Output only. The ID of the annotation spec that the model evaluation applies to. The The ID is empty for the overall model evaluation. For Tables annotation specs in the dataset do not exist and this ID is always not set, but for CLASSIFICATION prediction_type-s the display_name field is used. | [optional] 
**classification_evaluation_metrics** | [**ClassificationEvaluationMetrics**](ClassificationEvaluationMetrics.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp when this model evaluation was created. | [optional] 
**display_name** | **str** | Output only. The value of display_name at the moment when the model was trained. Because this field returns a value at model training time, for different models trained from the same dataset, the values may differ, since display names could had been changed between the two model&#39;s trainings. For Tables CLASSIFICATION prediction_type-s distinct values of the target column at the moment of the model evaluation are populated here. The display_name is empty for the overall model evaluation. | [optional] 
**evaluated_example_count** | **int** | Output only. The number of examples used for model evaluation, i.e. for which ground truth from time of model creation is compared against the predicted annotations created by the model. For overall ModelEvaluation (i.e. with annotation_spec_id not set) this is the total number of all examples used for evaluation. Otherwise, this is the count of examples that according to the ground truth were annotated by the annotation_spec_id. | [optional] 
**image_object_detection_evaluation_metrics** | [**ImageObjectDetectionEvaluationMetrics**](ImageObjectDetectionEvaluationMetrics.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the model evaluation. Format: &#x60;projects/{project_id}/locations/{location_id}/models/{model_id}/modelEvaluations/{model_evaluation_id}&#x60; | [optional] 
**regression_evaluation_metrics** | [**RegressionEvaluationMetrics**](RegressionEvaluationMetrics.md) |  | [optional] 
**text_extraction_evaluation_metrics** | [**TextExtractionEvaluationMetrics**](TextExtractionEvaluationMetrics.md) |  | [optional] 
**text_sentiment_evaluation_metrics** | [**TextSentimentEvaluationMetrics**](TextSentimentEvaluationMetrics.md) |  | [optional] 
**translation_evaluation_metrics** | [**TranslationEvaluationMetrics**](TranslationEvaluationMetrics.md) |  | [optional] 
**video_object_tracking_evaluation_metrics** | [**VideoObjectTrackingEvaluationMetrics**](VideoObjectTrackingEvaluationMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.model_evaluation import ModelEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ModelEvaluation from a JSON string
model_evaluation_instance = ModelEvaluation.from_json(json)
# print the JSON string representation of the object
print(ModelEvaluation.to_json())

# convert the object into a dict
model_evaluation_dict = model_evaluation_instance.to_dict()
# create an instance of ModelEvaluation from a dict
model_evaluation_from_dict = ModelEvaluation.from_dict(model_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


