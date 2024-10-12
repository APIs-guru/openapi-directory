# GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText

A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_playback_interruption** | **bool** | Output only. Whether the playback of this message can be interrupted by the end user&#39;s speech and the client can then starts the next Dialogflow request. | [optional] [readonly] 
**ssml** | **str** | The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml). | [optional] 
**text** | **str** | The raw text to be synthesized. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_response_message_output_audio_text import GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText from a JSON string
google_cloud_dialogflow_cx_v3_response_message_output_audio_text_instance = GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_response_message_output_audio_text_dict = google_cloud_dialogflow_cx_v3_response_message_output_audio_text_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText from a dict
google_cloud_dialogflow_cx_v3_response_message_output_audio_text_from_dict = GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText.from_dict(google_cloud_dialogflow_cx_v3_response_message_output_audio_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


