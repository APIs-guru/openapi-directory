# GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment

Represents one segment of audio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_playback_interruption** | **bool** | Whether the playback of this segment can be interrupted by the end user&#39;s speech and the client should then start the next Dialogflow request. | [optional] 
**audio** | **bytearray** | Raw audio synthesized from the Dialogflow agent&#39;s response using the output config specified in the request. | [optional] 
**uri** | **str** | Client-specific URI that points to an audio clip accessible to the client. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_response_message_mixed_audio_segment import GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment from a JSON string
google_cloud_dialogflow_v2beta1_response_message_mixed_audio_segment_instance = GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_response_message_mixed_audio_segment_dict = google_cloud_dialogflow_v2beta1_response_message_mixed_audio_segment_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment from a dict
google_cloud_dialogflow_v2beta1_response_message_mixed_audio_segment_from_dict = GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment.from_dict(google_cloud_dialogflow_v2beta1_response_message_mixed_audio_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


