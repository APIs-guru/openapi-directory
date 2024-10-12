# GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput

The output from the virtual agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | [**GoogleCloudDialogflowCxV3beta1Page**](GoogleCloudDialogflowCxV3beta1Page.md) |  | [optional] 
**diagnostic_info** | **Dict[str, object]** | Required. Input only. The diagnostic info output for the turn. Required to calculate the testing coverage. | [optional] 
**differences** | [**List[GoogleCloudDialogflowCxV3beta1TestRunDifference]**](GoogleCloudDialogflowCxV3beta1TestRunDifference.md) | Output only. If this is part of a result conversation turn, the list of differences between the original run and the replay for this output, if any. | [optional] [readonly] 
**session_parameters** | **Dict[str, object]** | The session parameters available to the bot at this point. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**text_responses** | [**List[GoogleCloudDialogflowCxV3beta1ResponseMessageText]**](GoogleCloudDialogflowCxV3beta1ResponseMessageText.md) | The text responses from the agent for the turn. | [optional] 
**triggered_intent** | [**GoogleCloudDialogflowCxV3beta1Intent**](GoogleCloudDialogflowCxV3beta1Intent.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_conversation_turn_virtual_agent_output import GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput from a JSON string
google_cloud_dialogflow_cx_v3beta1_conversation_turn_virtual_agent_output_instance = GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_conversation_turn_virtual_agent_output_dict = google_cloud_dialogflow_cx_v3beta1_conversation_turn_virtual_agent_output_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput from a dict
google_cloud_dialogflow_cx_v3beta1_conversation_turn_virtual_agent_output_from_dict = GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.from_dict(google_cloud_dialogflow_cx_v3beta1_conversation_turn_virtual_agent_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


