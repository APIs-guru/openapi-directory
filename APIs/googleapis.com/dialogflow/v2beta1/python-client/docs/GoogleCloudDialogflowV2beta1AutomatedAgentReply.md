# GoogleCloudDialogflowV2beta1AutomatedAgentReply

Represents a response from an automated agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_cancellation** | **bool** | Indicates whether the partial automated agent reply is interruptible when a later reply message arrives. e.g. if the agent specified some music as partial response, it can be cancelled. | [optional] 
**automated_agent_reply_type** | **str** | AutomatedAgentReply type. | [optional] 
**cx_current_page** | **str** | The unique identifier of the current Dialogflow CX conversation page. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. | [optional] 
**cx_session_parameters** | **Dict[str, object]** | The collection of current Dialogflow CX agent session parameters at the time of this response. Deprecated: Use &#x60;parameters&#x60; instead. | [optional] 
**detect_intent_response** | [**GoogleCloudDialogflowV2beta1DetectIntentResponse**](GoogleCloudDialogflowV2beta1DetectIntentResponse.md) |  | [optional] 
**event** | **str** | Event name if an event is triggered for the query. | [optional] 
**intent** | **str** | Name of the intent if an intent is matched for the query. For a V2 query, the value format is &#x60;projects//locations/ /agent/intents/&#x60;. For a V3 query, the value format is &#x60;projects//locations/ /agents//intents/&#x60;. | [optional] 
**match_confidence** | **float** | The confidence of the match. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. | [optional] 
**parameters** | **Dict[str, object]** | The collection of current parameters at the time of this response. | [optional] 
**response_messages** | [**List[GoogleCloudDialogflowV2beta1ResponseMessage]**](GoogleCloudDialogflowV2beta1ResponseMessage.md) | Response messages from the automated agent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_automated_agent_reply import GoogleCloudDialogflowV2beta1AutomatedAgentReply

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1AutomatedAgentReply from a JSON string
google_cloud_dialogflow_v2beta1_automated_agent_reply_instance = GoogleCloudDialogflowV2beta1AutomatedAgentReply.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1AutomatedAgentReply.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_automated_agent_reply_dict = google_cloud_dialogflow_v2beta1_automated_agent_reply_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1AutomatedAgentReply from a dict
google_cloud_dialogflow_v2beta1_automated_agent_reply_from_dict = GoogleCloudDialogflowV2beta1AutomatedAgentReply.from_dict(google_cloud_dialogflow_v2beta1_automated_agent_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


