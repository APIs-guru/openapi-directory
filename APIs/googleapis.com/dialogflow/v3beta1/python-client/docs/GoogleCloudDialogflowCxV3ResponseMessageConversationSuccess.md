# GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess

Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Dict[str, object]** | Custom metadata. Dialogflow doesn&#39;t impose any structure on this. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_response_message_conversation_success import GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess from a JSON string
google_cloud_dialogflow_cx_v3_response_message_conversation_success_instance = GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_response_message_conversation_success_dict = google_cloud_dialogflow_cx_v3_response_message_conversation_success_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess from a dict
google_cloud_dialogflow_cx_v3_response_message_conversation_success_from_dict = GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess.from_dict(google_cloud_dialogflow_cx_v3_response_message_conversation_success_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


