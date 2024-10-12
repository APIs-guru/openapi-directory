# LiveStreamGeneratedSubtitleSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The language to generate subtitles in. | [optional] [default to 'en']
**name** | **str** | A name for this live stream subtitle track. | [optional] 
**passthrough** | **str** | Arbitrary metadata set for the live stream subtitle track. Max 255 characters. | [optional] 
**transcription_vocabulary_ids** | **List[str]** | Unique identifiers for existing Transcription Vocabularies to use while generating subtitles for the live stream. If the Transcription Vocabularies provided collectively have more than 1000 phrases, only the first 1000 phrases will be included. | [optional] 

## Example

```python
from openapi_client.models.live_stream_generated_subtitle_settings import LiveStreamGeneratedSubtitleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStreamGeneratedSubtitleSettings from a JSON string
live_stream_generated_subtitle_settings_instance = LiveStreamGeneratedSubtitleSettings.from_json(json)
# print the JSON string representation of the object
print(LiveStreamGeneratedSubtitleSettings.to_json())

# convert the object into a dict
live_stream_generated_subtitle_settings_dict = live_stream_generated_subtitle_settings_instance.to_dict()
# create an instance of LiveStreamGeneratedSubtitleSettings from a dict
live_stream_generated_subtitle_settings_from_dict = LiveStreamGeneratedSubtitleSettings.from_dict(live_stream_generated_subtitle_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


