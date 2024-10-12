# XPSEvaluationMetrics

Contains xPS-specific model evaluation metrics either for a single annotation spec (label), or for the model overall. Next tag: 18.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id_token** | **str** | The annotation_spec for which this evaluation metrics instance had been created. Empty iff this is an overall model evaluation (like Tables evaluation metrics), i.e. aggregated across all labels. The value comes from the input annotations in AnnotatedExample. For MVP product or for text sentiment models where annotation_spec_id_token is not available, set label instead. | [optional] 
**category** | **int** | The integer category label for which this evaluation metric instance had been created. Valid categories are 0 or higher. Overall model evaluation should set this to negative values (rather than implicit zero). Only used for Image Segmentation (prefer to set annotation_spec_id_token instead). Note: uCAIP Image Segmentation should use annotation_spec_id_token. | [optional] 
**evaluated_example_count** | **int** | The number of examples used to create this evaluation metrics instance. | [optional] 
**image_classification_eval_metrics** | [**XPSClassificationEvaluationMetrics**](XPSClassificationEvaluationMetrics.md) |  | [optional] 
**image_object_detection_eval_metrics** | [**XPSImageObjectDetectionEvaluationMetrics**](XPSImageObjectDetectionEvaluationMetrics.md) |  | [optional] 
**image_segmentation_eval_metrics** | [**XPSImageSegmentationEvaluationMetrics**](XPSImageSegmentationEvaluationMetrics.md) |  | [optional] 
**label** | **str** | The label for which this evaluation metrics instance had been created. Empty iff this is an overall model evaluation (like Tables evaluation metrics), i.e. aggregated across all labels. The label maps to AnnotationSpec.display_name in Public API protos. Only used by MVP implementation and text sentiment FULL implementation. | [optional] 
**regression_eval_metrics** | [**XPSRegressionEvaluationMetrics**](XPSRegressionEvaluationMetrics.md) |  | [optional] 
**tables_classification_eval_metrics** | [**XPSClassificationEvaluationMetrics**](XPSClassificationEvaluationMetrics.md) |  | [optional] 
**tables_eval_metrics** | [**XPSTablesEvaluationMetrics**](XPSTablesEvaluationMetrics.md) |  | [optional] 
**text_classification_eval_metrics** | [**XPSClassificationEvaluationMetrics**](XPSClassificationEvaluationMetrics.md) |  | [optional] 
**text_extraction_eval_metrics** | [**XPSTextExtractionEvaluationMetrics**](XPSTextExtractionEvaluationMetrics.md) |  | [optional] 
**text_sentiment_eval_metrics** | [**XPSTextSentimentEvaluationMetrics**](XPSTextSentimentEvaluationMetrics.md) |  | [optional] 
**translation_eval_metrics** | [**XPSTranslationEvaluationMetrics**](XPSTranslationEvaluationMetrics.md) |  | [optional] 
**video_action_recognition_eval_metrics** | [**XPSVideoActionRecognitionEvaluationMetrics**](XPSVideoActionRecognitionEvaluationMetrics.md) |  | [optional] 
**video_classification_eval_metrics** | [**XPSClassificationEvaluationMetrics**](XPSClassificationEvaluationMetrics.md) |  | [optional] 
**video_object_tracking_eval_metrics** | [**XPSVideoObjectTrackingEvaluationMetrics**](XPSVideoObjectTrackingEvaluationMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_evaluation_metrics import XPSEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSEvaluationMetrics from a JSON string
xps_evaluation_metrics_instance = XPSEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSEvaluationMetrics.to_json())

# convert the object into a dict
xps_evaluation_metrics_dict = xps_evaluation_metrics_instance.to_dict()
# create an instance of XPSEvaluationMetrics from a dict
xps_evaluation_metrics_from_dict = XPSEvaluationMetrics.from_dict(xps_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


