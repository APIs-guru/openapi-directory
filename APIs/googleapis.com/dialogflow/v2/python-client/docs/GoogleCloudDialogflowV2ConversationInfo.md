# GoogleCloudDialogflowV2ConversationInfo

Represents metadata of a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Optional. The language code of the conversation data within this dataset. See https://cloud.google.com/apis/design/standard_fields for more information. Supports all UTF-8 languages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_conversation_info import GoogleCloudDialogflowV2ConversationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ConversationInfo from a JSON string
google_cloud_dialogflow_v2_conversation_info_instance = GoogleCloudDialogflowV2ConversationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ConversationInfo.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_conversation_info_dict = google_cloud_dialogflow_v2_conversation_info_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ConversationInfo from a dict
google_cloud_dialogflow_v2_conversation_info_from_dict = GoogleCloudDialogflowV2ConversationInfo.from_dict(google_cloud_dialogflow_v2_conversation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


