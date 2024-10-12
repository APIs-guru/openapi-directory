# GoogleCloudDialogflowV2beta1OutputAudio

Represents the natural language speech audio to be played to the end user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | **bytearray** | Required. The natural language speech audio. | [optional] 
**config** | [**GoogleCloudDialogflowV2beta1OutputAudioConfig**](GoogleCloudDialogflowV2beta1OutputAudioConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_output_audio import GoogleCloudDialogflowV2beta1OutputAudio

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1OutputAudio from a JSON string
google_cloud_dialogflow_v2beta1_output_audio_instance = GoogleCloudDialogflowV2beta1OutputAudio.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1OutputAudio.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_output_audio_dict = google_cloud_dialogflow_v2beta1_output_audio_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1OutputAudio from a dict
google_cloud_dialogflow_v2beta1_output_audio_from_dict = GoogleCloudDialogflowV2beta1OutputAudio.from_dict(google_cloud_dialogflow_v2beta1_output_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


