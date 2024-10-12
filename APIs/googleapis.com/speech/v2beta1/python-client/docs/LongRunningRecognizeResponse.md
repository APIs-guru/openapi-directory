# LongRunningRecognizeResponse

The only message returned to the client by the `LongRunningRecognize` method. It contains the result as zero or more sequential SpeechRecognitionResult messages. It is included in the `result.response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[SpeechRecognitionResult]**](SpeechRecognitionResult.md) | Output only. Sequential list of transcription results corresponding to sequential portions of audio. | [optional] [readonly] 

## Example

```python
from openapi_client.models.long_running_recognize_response import LongRunningRecognizeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LongRunningRecognizeResponse from a JSON string
long_running_recognize_response_instance = LongRunningRecognizeResponse.from_json(json)
# print the JSON string representation of the object
print(LongRunningRecognizeResponse.to_json())

# convert the object into a dict
long_running_recognize_response_dict = long_running_recognize_response_instance.to_dict()
# create an instance of LongRunningRecognizeResponse from a dict
long_running_recognize_response_from_dict = LongRunningRecognizeResponse.from_dict(long_running_recognize_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


