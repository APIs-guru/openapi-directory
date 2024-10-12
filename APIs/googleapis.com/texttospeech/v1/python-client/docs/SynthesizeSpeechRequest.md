# SynthesizeSpeechRequest

The top-level message sent by the client for the `SynthesizeSpeech` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_config** | [**AudioConfig**](AudioConfig.md) |  | [optional] 
**input** | [**SynthesisInput**](SynthesisInput.md) |  | [optional] 
**voice** | [**VoiceSelectionParams**](VoiceSelectionParams.md) |  | [optional] 

## Example

```python
from openapi_client.models.synthesize_speech_request import SynthesizeSpeechRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SynthesizeSpeechRequest from a JSON string
synthesize_speech_request_instance = SynthesizeSpeechRequest.from_json(json)
# print the JSON string representation of the object
print(SynthesizeSpeechRequest.to_json())

# convert the object into a dict
synthesize_speech_request_dict = synthesize_speech_request_instance.to_dict()
# create an instance of SynthesizeSpeechRequest from a dict
synthesize_speech_request_from_dict = SynthesizeSpeechRequest.from_dict(synthesize_speech_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


