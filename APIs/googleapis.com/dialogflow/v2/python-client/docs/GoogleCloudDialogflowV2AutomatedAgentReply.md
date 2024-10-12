# GoogleCloudDialogflowV2AutomatedAgentReply

Represents a response from an automated agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_cancellation** | **bool** | Indicates whether the partial automated agent reply is interruptible when a later reply message arrives. e.g. if the agent specified some music as partial response, it can be cancelled. | [optional] 
**automated_agent_reply_type** | **str** | AutomatedAgentReply type. | [optional] 
**cx_current_page** | **str** | The unique identifier of the current Dialogflow CX conversation page. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. | [optional] 
**detect_intent_response** | [**GoogleCloudDialogflowV2DetectIntentResponse**](GoogleCloudDialogflowV2DetectIntentResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_automated_agent_reply import GoogleCloudDialogflowV2AutomatedAgentReply

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2AutomatedAgentReply from a JSON string
google_cloud_dialogflow_v2_automated_agent_reply_instance = GoogleCloudDialogflowV2AutomatedAgentReply.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2AutomatedAgentReply.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_automated_agent_reply_dict = google_cloud_dialogflow_v2_automated_agent_reply_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2AutomatedAgentReply from a dict
google_cloud_dialogflow_v2_automated_agent_reply_from_dict = GoogleCloudDialogflowV2AutomatedAgentReply.from_dict(google_cloud_dialogflow_v2_automated_agent_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


