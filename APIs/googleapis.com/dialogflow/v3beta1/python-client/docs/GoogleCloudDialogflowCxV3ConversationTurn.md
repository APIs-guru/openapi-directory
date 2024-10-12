# GoogleCloudDialogflowCxV3ConversationTurn

One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_input** | [**GoogleCloudDialogflowCxV3ConversationTurnUserInput**](GoogleCloudDialogflowCxV3ConversationTurnUserInput.md) |  | [optional] 
**virtual_agent_output** | [**GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput**](GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_conversation_turn import GoogleCloudDialogflowCxV3ConversationTurn

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ConversationTurn from a JSON string
google_cloud_dialogflow_cx_v3_conversation_turn_instance = GoogleCloudDialogflowCxV3ConversationTurn.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ConversationTurn.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_conversation_turn_dict = google_cloud_dialogflow_cx_v3_conversation_turn_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ConversationTurn from a dict
google_cloud_dialogflow_cx_v3_conversation_turn_from_dict = GoogleCloudDialogflowCxV3ConversationTurn.from_dict(google_cloud_dialogflow_cx_v3_conversation_turn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


