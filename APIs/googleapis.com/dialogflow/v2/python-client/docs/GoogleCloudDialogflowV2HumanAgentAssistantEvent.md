# GoogleCloudDialogflowV2HumanAgentAssistantEvent

Represents a notification sent to Cloud Pub/Sub subscribers for human agent assistant events in a specific conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | **str** | The conversation this notification refers to. Format: &#x60;projects//conversations/&#x60;. | [optional] 
**participant** | **str** | The participant that the suggestion is compiled for. Format: &#x60;projects//conversations//participants/&#x60;. It will not be set in legacy workflow. | [optional] 
**suggestion_results** | [**List[GoogleCloudDialogflowV2SuggestionResult]**](GoogleCloudDialogflowV2SuggestionResult.md) | The suggestion results payload that this notification refers to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_human_agent_assistant_event import GoogleCloudDialogflowV2HumanAgentAssistantEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantEvent from a JSON string
google_cloud_dialogflow_v2_human_agent_assistant_event_instance = GoogleCloudDialogflowV2HumanAgentAssistantEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2HumanAgentAssistantEvent.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_human_agent_assistant_event_dict = google_cloud_dialogflow_v2_human_agent_assistant_event_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantEvent from a dict
google_cloud_dialogflow_v2_human_agent_assistant_event_from_dict = GoogleCloudDialogflowV2HumanAgentAssistantEvent.from_dict(google_cloud_dialogflow_v2_human_agent_assistant_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


