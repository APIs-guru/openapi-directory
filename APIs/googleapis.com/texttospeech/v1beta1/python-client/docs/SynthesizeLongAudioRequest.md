# SynthesizeLongAudioRequest

The top-level message sent by the client for the `SynthesizeLongAudio` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_config** | [**AudioConfig**](AudioConfig.md) |  | [optional] 
**input** | [**SynthesisInput**](SynthesisInput.md) |  | [optional] 
**output_gcs_uri** | **str** | Required. Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: &#x60;gs://bucket_name/object_name&#x60;, and the bucket must already exist. | [optional] 
**voice** | [**VoiceSelectionParams**](VoiceSelectionParams.md) |  | [optional] 

## Example

```python
from openapi_client.models.synthesize_long_audio_request import SynthesizeLongAudioRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SynthesizeLongAudioRequest from a JSON string
synthesize_long_audio_request_instance = SynthesizeLongAudioRequest.from_json(json)
# print the JSON string representation of the object
print(SynthesizeLongAudioRequest.to_json())

# convert the object into a dict
synthesize_long_audio_request_dict = synthesize_long_audio_request_instance.to_dict()
# create an instance of SynthesizeLongAudioRequest from a dict
synthesize_long_audio_request_from_dict = SynthesizeLongAudioRequest.from_dict(synthesize_long_audio_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


