# GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio

Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segments** | [**List[GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment]**](GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment.md) | Segments this audio response is composed of. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_response_message_mixed_audio import GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio from a JSON string
google_cloud_dialogflow_v2beta1_response_message_mixed_audio_instance = GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_response_message_mixed_audio_dict = google_cloud_dialogflow_v2beta1_response_message_mixed_audio_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio from a dict
google_cloud_dialogflow_v2beta1_response_message_mixed_audio_from_dict = GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio.from_dict(google_cloud_dialogflow_v2beta1_response_message_mixed_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


