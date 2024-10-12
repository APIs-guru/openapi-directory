# XPSTrainResponse

Next ID: 18

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model_size_bytes** | **str** | Estimated model size in bytes once deployed. | [optional] 
**error_analysis_configs** | [**List[XPSVisionErrorAnalysisConfig]**](XPSVisionErrorAnalysisConfig.md) | Optional vision model error analysis configuration. The field is set when model error analysis is enabled in the training request. The results of error analysis will be binded together with evaluation results (in the format of AnnotatedExample). | [optional] 
**evaluated_example_set** | [**XPSExampleSet**](XPSExampleSet.md) |  | [optional] 
**evaluation_metrics_set** | [**XPSEvaluationMetricsSet**](XPSEvaluationMetricsSet.md) |  | [optional] 
**explanation_configs** | [**List[XPSResponseExplanationSpec]**](XPSResponseExplanationSpec.md) | VisionExplanationConfig for XAI on test set. Optional for when XAI is enable in training request. | [optional] 
**image_classification_train_resp** | [**XPSImageClassificationTrainResponse**](XPSImageClassificationTrainResponse.md) |  | [optional] 
**image_object_detection_train_resp** | [**XPSImageObjectDetectionModelSpec**](XPSImageObjectDetectionModelSpec.md) |  | [optional] 
**image_segmentation_train_resp** | [**XPSImageSegmentationTrainResponse**](XPSImageSegmentationTrainResponse.md) |  | [optional] 
**model_token** | **bytearray** | Token that represents the trained model. This is considered immutable and is persisted in AutoML. xPS can put their own proto in the byte string, to e.g. point to the model checkpoints. The token is passed to other xPS APIs to refer to the model. | [optional] 
**speech_train_resp** | [**XPSSpeechModelSpec**](XPSSpeechModelSpec.md) |  | [optional] 
**tables_train_resp** | [**XPSTablesTrainResponse**](XPSTablesTrainResponse.md) |  | [optional] 
**text_to_speech_train_resp** | **object** | TextToSpeech train response | [optional] 
**text_train_resp** | [**XPSTextTrainResponse**](XPSTextTrainResponse.md) |  | [optional] 
**translation_train_resp** | [**XPSTranslationTrainResponse**](XPSTranslationTrainResponse.md) |  | [optional] 
**video_action_recognition_train_resp** | [**XPSVideoActionRecognitionTrainResponse**](XPSVideoActionRecognitionTrainResponse.md) |  | [optional] 
**video_classification_train_resp** | [**XPSVideoClassificationTrainResponse**](XPSVideoClassificationTrainResponse.md) |  | [optional] 
**video_object_tracking_train_resp** | [**XPSVideoObjectTrackingTrainResponse**](XPSVideoObjectTrackingTrainResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_train_response import XPSTrainResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTrainResponse from a JSON string
xps_train_response_instance = XPSTrainResponse.from_json(json)
# print the JSON string representation of the object
print(XPSTrainResponse.to_json())

# convert the object into a dict
xps_train_response_dict = xps_train_response_instance.to_dict()
# create an instance of XPSTrainResponse from a dict
xps_train_response_from_dict = XPSTrainResponse.from_dict(xps_train_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


