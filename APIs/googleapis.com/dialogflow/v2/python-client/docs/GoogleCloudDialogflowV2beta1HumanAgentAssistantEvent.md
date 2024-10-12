# GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent

Output only. Represents a notification sent to Pub/Sub subscribers for agent assistant events in a specific conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | **str** | The conversation this notification refers to. Format: &#x60;projects//conversations/&#x60;. | [optional] 
**participant** | **str** | The participant that the suggestion is compiled for. And This field is used to call Participants.ListSuggestions API. Format: &#x60;projects//conversations//participants/&#x60;. It will not be set in legacy workflow. HumanAgentAssistantConfig.name for more information. | [optional] 
**suggestion_results** | [**List[GoogleCloudDialogflowV2beta1SuggestionResult]**](GoogleCloudDialogflowV2beta1SuggestionResult.md) | The suggestion results payload that this notification refers to. It will only be set when HumanAgentAssistantConfig.SuggestionConfig.group_suggestion_responses sets to true. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_event import GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_event_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_event_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_event_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_event_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


