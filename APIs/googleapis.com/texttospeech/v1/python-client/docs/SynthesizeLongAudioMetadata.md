# SynthesizeLongAudioMetadata

Metadata for response returned by the `SynthesizeLongAudio` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time** | **str** | Deprecated. Do not use. | [optional] 
**progress_percentage** | **float** | The progress of the most recent processing update in percentage, ie. 70.0%. | [optional] 
**start_time** | **str** | Time when the request was received. | [optional] 

## Example

```python
from openapi_client.models.synthesize_long_audio_metadata import SynthesizeLongAudioMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SynthesizeLongAudioMetadata from a JSON string
synthesize_long_audio_metadata_instance = SynthesizeLongAudioMetadata.from_json(json)
# print the JSON string representation of the object
print(SynthesizeLongAudioMetadata.to_json())

# convert the object into a dict
synthesize_long_audio_metadata_dict = synthesize_long_audio_metadata_instance.to_dict()
# create an instance of SynthesizeLongAudioMetadata from a dict
synthesize_long_audio_metadata_from_dict = SynthesizeLongAudioMetadata.from_dict(synthesize_long_audio_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


