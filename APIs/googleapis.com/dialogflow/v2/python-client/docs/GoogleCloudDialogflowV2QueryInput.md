# GoogleCloudDialogflowV2QueryInput

Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text. 3. An event that specifies which intent to trigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_config** | [**GoogleCloudDialogflowV2InputAudioConfig**](GoogleCloudDialogflowV2InputAudioConfig.md) |  | [optional] 
**event** | [**GoogleCloudDialogflowV2EventInput**](GoogleCloudDialogflowV2EventInput.md) |  | [optional] 
**text** | [**GoogleCloudDialogflowV2TextInput**](GoogleCloudDialogflowV2TextInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_query_input import GoogleCloudDialogflowV2QueryInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2QueryInput from a JSON string
google_cloud_dialogflow_v2_query_input_instance = GoogleCloudDialogflowV2QueryInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2QueryInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_query_input_dict = google_cloud_dialogflow_v2_query_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2QueryInput from a dict
google_cloud_dialogflow_v2_query_input_from_dict = GoogleCloudDialogflowV2QueryInput.from_dict(google_cloud_dialogflow_v2_query_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


