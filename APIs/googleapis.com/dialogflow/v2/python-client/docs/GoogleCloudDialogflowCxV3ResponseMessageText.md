# GoogleCloudDialogflowCxV3ResponseMessageText

The text response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_playback_interruption** | **bool** | Output only. Whether the playback of this message can be interrupted by the end user&#39;s speech and the client can then starts the next Dialogflow request. | [optional] [readonly] 
**text** | **List[str]** | Required. A collection of text responses. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_response_message_text import GoogleCloudDialogflowCxV3ResponseMessageText

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ResponseMessageText from a JSON string
google_cloud_dialogflow_cx_v3_response_message_text_instance = GoogleCloudDialogflowCxV3ResponseMessageText.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ResponseMessageText.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_response_message_text_dict = google_cloud_dialogflow_cx_v3_response_message_text_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ResponseMessageText from a dict
google_cloud_dialogflow_cx_v3_response_message_text_from_dict = GoogleCloudDialogflowCxV3ResponseMessageText.from_dict(google_cloud_dialogflow_cx_v3_response_message_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


