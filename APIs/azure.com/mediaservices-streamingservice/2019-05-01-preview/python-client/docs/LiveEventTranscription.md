# LiveEventTranscription

Describes the transcription tracks in the output of a Live Event, generated using speech-to-text transcription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_track_selection** | [**List[LiveEventInputTrackSelection]**](LiveEventInputTrackSelection.md) | Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied. | [optional] 
**language** | **str** | Specifies the language (locale) used for speech-to-text transcription � it should match the spoken language in the audio track. The value should be in BCP-47 format of &#39;language tag-region&#39; (e.g: &#39;en-US&#39;). The list of supported languages are &#39;en-US&#39; and &#39;en-GB&#39;. | [optional] 
**output_transcription_track** | [**LiveEventOutputTranscriptionTrack**](LiveEventOutputTranscriptionTrack.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_event_transcription import LiveEventTranscription

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventTranscription from a JSON string
live_event_transcription_instance = LiveEventTranscription.from_json(json)
# print the JSON string representation of the object
print(LiveEventTranscription.to_json())

# convert the object into a dict
live_event_transcription_dict = live_event_transcription_instance.to_dict()
# create an instance of LiveEventTranscription from a dict
live_event_transcription_from_dict = LiveEventTranscription.from_dict(live_event_transcription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


