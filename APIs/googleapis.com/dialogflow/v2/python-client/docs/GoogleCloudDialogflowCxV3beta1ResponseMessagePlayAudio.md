# GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio

Specifies an audio clip to be played by the client as part of the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_playback_interruption** | **bool** | Output only. Whether the playback of this message can be interrupted by the end user&#39;s speech and the client can then starts the next Dialogflow request. | [optional] [readonly] 
**audio_uri** | **str** | Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_response_message_play_audio import GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio from a JSON string
google_cloud_dialogflow_cx_v3beta1_response_message_play_audio_instance = GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_response_message_play_audio_dict = google_cloud_dialogflow_cx_v3beta1_response_message_play_audio_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio from a dict
google_cloud_dialogflow_cx_v3beta1_response_message_play_audio_from_dict = GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio.from_dict(google_cloud_dialogflow_cx_v3beta1_response_message_play_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


