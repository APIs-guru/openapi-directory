# GoogleCloudDialogflowV2beta1AudioInput

Represents the natural language speech audio to be processed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | **bytearray** | Required. The natural language speech audio to be processed. A single request can contain up to 1 minute of speech audio data. The transcribed text cannot contain more than 256 bytes for virtual agent interactions. | [optional] 
**config** | [**GoogleCloudDialogflowV2beta1InputAudioConfig**](GoogleCloudDialogflowV2beta1InputAudioConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_audio_input import GoogleCloudDialogflowV2beta1AudioInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1AudioInput from a JSON string
google_cloud_dialogflow_v2beta1_audio_input_instance = GoogleCloudDialogflowV2beta1AudioInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1AudioInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_audio_input_dict = google_cloud_dialogflow_v2beta1_audio_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1AudioInput from a dict
google_cloud_dialogflow_v2beta1_audio_input_from_dict = GoogleCloudDialogflowV2beta1AudioInput.from_dict(google_cloud_dialogflow_v2beta1_audio_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


