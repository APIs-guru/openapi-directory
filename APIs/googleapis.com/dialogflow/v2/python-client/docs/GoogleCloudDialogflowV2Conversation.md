# GoogleCloudDialogflowV2Conversation

Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_profile** | **str** | Required. The Conversation Profile to be used to configure this Conversation. This field cannot be updated. Format: &#x60;projects//locations//conversationProfiles/&#x60;. | [optional] 
**conversation_stage** | **str** | The stage of a conversation. It indicates whether the virtual agent or a human agent is handling the conversation. If the conversation is created with the conversation profile that has Dialogflow config set, defaults to ConversationStage.VIRTUAL_AGENT_STAGE; Otherwise, defaults to ConversationStage.HUMAN_ASSIST_STAGE. If the conversation is created with the conversation profile that has Dialogflow config set but explicitly sets conversation_stage to ConversationStage.HUMAN_ASSIST_STAGE, it skips ConversationStage.VIRTUAL_AGENT_STAGE stage and directly goes to ConversationStage.HUMAN_ASSIST_STAGE. | [optional] 
**end_time** | **str** | Output only. The time the conversation was finished. | [optional] [readonly] 
**lifecycle_state** | **str** | Output only. The current state of the Conversation. | [optional] [readonly] 
**name** | **str** | Output only. The unique identifier of this conversation. Format: &#x60;projects//locations//conversations/&#x60;. | [optional] [readonly] 
**phone_number** | [**GoogleCloudDialogflowV2ConversationPhoneNumber**](GoogleCloudDialogflowV2ConversationPhoneNumber.md) |  | [optional] 
**start_time** | **str** | Output only. The time the conversation was started. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_conversation import GoogleCloudDialogflowV2Conversation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2Conversation from a JSON string
google_cloud_dialogflow_v2_conversation_instance = GoogleCloudDialogflowV2Conversation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2Conversation.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_conversation_dict = google_cloud_dialogflow_v2_conversation_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2Conversation from a dict
google_cloud_dialogflow_v2_conversation_from_dict = GoogleCloudDialogflowV2Conversation.from_dict(google_cloud_dialogflow_v2_conversation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


