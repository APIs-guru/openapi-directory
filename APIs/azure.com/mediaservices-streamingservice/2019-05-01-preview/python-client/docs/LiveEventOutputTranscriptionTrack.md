# LiveEventOutputTranscriptionTrack

Describes a transcription track in the output of a Live Event, generated using speech-to-text transcription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**track_name** | **str** | The output track name. | 

## Example

```python
from openapi_client.models.live_event_output_transcription_track import LiveEventOutputTranscriptionTrack

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventOutputTranscriptionTrack from a JSON string
live_event_output_transcription_track_instance = LiveEventOutputTranscriptionTrack.from_json(json)
# print the JSON string representation of the object
print(LiveEventOutputTranscriptionTrack.to_json())

# convert the object into a dict
live_event_output_transcription_track_dict = live_event_output_transcription_track_instance.to_dict()
# create an instance of LiveEventOutputTranscriptionTrack from a dict
live_event_output_transcription_track_from_dict = LiveEventOutputTranscriptionTrack.from_dict(live_event_output_transcription_track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


