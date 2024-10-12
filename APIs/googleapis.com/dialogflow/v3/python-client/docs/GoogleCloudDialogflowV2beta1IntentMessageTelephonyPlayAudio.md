# GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio

Plays audio from a file in Telephony Gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_uri** | **str** | Required. URI to a Google Cloud Storage object containing the audio to play, e.g., \&quot;gs://bucket/object\&quot;. The object must contain a single channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz. This object must be readable by the &#x60;service-@gcp-sa-dialogflow.iam.gserviceaccount.com&#x60; service account where is the number of the Telephony Gateway project (usually the same as the Dialogflow agent project). If the Google Cloud Storage bucket is in the Telephony Gateway project, this permission is added by default when enabling the Dialogflow V2 API. For audio from other sources, consider using the &#x60;TelephonySynthesizeSpeech&#x60; message with SSML. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_telephony_play_audio import GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_telephony_play_audio_instance = GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_telephony_play_audio_dict = google_cloud_dialogflow_v2beta1_intent_message_telephony_play_audio_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio from a dict
google_cloud_dialogflow_v2beta1_intent_message_telephony_play_audio_from_dict = GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio.from_dict(google_cloud_dialogflow_v2beta1_intent_message_telephony_play_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


