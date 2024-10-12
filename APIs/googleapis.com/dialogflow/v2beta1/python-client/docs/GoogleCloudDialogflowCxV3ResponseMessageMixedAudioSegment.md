# GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment

Represents one segment of audio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_playback_interruption** | **bool** | Output only. Whether the playback of this segment can be interrupted by the end user&#39;s speech and the client should then start the next Dialogflow request. | [optional] [readonly] 
**audio** | **bytearray** | Raw audio synthesized from the Dialogflow agent&#39;s response using the output config specified in the request. | [optional] 
**uri** | **str** | Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_response_message_mixed_audio_segment import GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment from a JSON string
google_cloud_dialogflow_cx_v3_response_message_mixed_audio_segment_instance = GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_response_message_mixed_audio_segment_dict = google_cloud_dialogflow_cx_v3_response_message_mixed_audio_segment_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment from a dict
google_cloud_dialogflow_cx_v3_response_message_mixed_audio_segment_from_dict = GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment.from_dict(google_cloud_dialogflow_cx_v3_response_message_mixed_audio_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


