# SynthesizeSpeechResponse

The message returned to the client by the `SynthesizeSpeech` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_content** | **bytearray** | The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64. | [optional] 

## Example

```python
from openapi_client.models.synthesize_speech_response import SynthesizeSpeechResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SynthesizeSpeechResponse from a JSON string
synthesize_speech_response_instance = SynthesizeSpeechResponse.from_json(json)
# print the JSON string representation of the object
print(SynthesizeSpeechResponse.to_json())

# convert the object into a dict
synthesize_speech_response_dict = synthesize_speech_response_instance.to_dict()
# create an instance of SynthesizeSpeechResponse from a dict
synthesize_speech_response_from_dict = SynthesizeSpeechResponse.from_dict(synthesize_speech_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


