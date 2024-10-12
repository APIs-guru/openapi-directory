# RecognizeResponse

The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | The ID associated with the request. This is a unique ID specific only to the given request. | [optional] 
**results** | [**List[SpeechRecognitionResult]**](SpeechRecognitionResult.md) | Sequential list of transcription results corresponding to sequential portions of audio. | [optional] 
**speech_adaptation_info** | [**SpeechAdaptationInfo**](SpeechAdaptationInfo.md) |  | [optional] 
**total_billed_time** | **str** | When available, billed audio seconds for the corresponding request. | [optional] 
**using_legacy_models** | **bool** | Whether request used legacy asr models (was not automatically migrated to use conformer models). | [optional] 

## Example

```python
from openapi_client.models.recognize_response import RecognizeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RecognizeResponse from a JSON string
recognize_response_instance = RecognizeResponse.from_json(json)
# print the JSON string representation of the object
print(RecognizeResponse.to_json())

# convert the object into a dict
recognize_response_dict = recognize_response_instance.to_dict()
# create an instance of RecognizeResponse from a dict
recognize_response_from_dict = RecognizeResponse.from_dict(recognize_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


