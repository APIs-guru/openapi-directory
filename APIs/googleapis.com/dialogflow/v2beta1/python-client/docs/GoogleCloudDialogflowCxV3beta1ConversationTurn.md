# GoogleCloudDialogflowCxV3beta1ConversationTurn

One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_input** | [**GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput**](GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput.md) |  | [optional] 
**virtual_agent_output** | [**GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput**](GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_conversation_turn import GoogleCloudDialogflowCxV3beta1ConversationTurn

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ConversationTurn from a JSON string
google_cloud_dialogflow_cx_v3beta1_conversation_turn_instance = GoogleCloudDialogflowCxV3beta1ConversationTurn.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ConversationTurn.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_conversation_turn_dict = google_cloud_dialogflow_cx_v3beta1_conversation_turn_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ConversationTurn from a dict
google_cloud_dialogflow_cx_v3beta1_conversation_turn_from_dict = GoogleCloudDialogflowCxV3beta1ConversationTurn.from_dict(google_cloud_dialogflow_cx_v3beta1_conversation_turn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


