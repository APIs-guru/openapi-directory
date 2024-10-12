# GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata

Metadata for response returned by the `SynthesizeLongAudio` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time** | **str** | Deprecated. Do not use. | [optional] 
**progress_percentage** | **float** | The progress of the most recent processing update in percentage, ie. 70.0%. | [optional] 
**start_time** | **str** | Time when the request was received. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_texttospeech_v1beta1_synthesize_long_audio_metadata import GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata from a JSON string
google_cloud_texttospeech_v1beta1_synthesize_long_audio_metadata_instance = GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata.to_json())

# convert the object into a dict
google_cloud_texttospeech_v1beta1_synthesize_long_audio_metadata_dict = google_cloud_texttospeech_v1beta1_synthesize_long_audio_metadata_instance.to_dict()
# create an instance of GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata from a dict
google_cloud_texttospeech_v1beta1_synthesize_long_audio_metadata_from_dict = GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata.from_dict(google_cloud_texttospeech_v1beta1_synthesize_long_audio_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


