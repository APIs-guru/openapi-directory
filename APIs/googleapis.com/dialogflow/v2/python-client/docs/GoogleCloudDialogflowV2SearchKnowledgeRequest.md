# GoogleCloudDialogflowV2SearchKnowledgeRequest

The request message for Conversations.SearchKnowledge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | **str** | The conversation (between human agent and end user) where the search request is triggered. Format: &#x60;projects//locations//conversations/&#x60;. | [optional] 
**conversation_profile** | **str** | Required. The conversation profile used to configure the search. Format: &#x60;projects//locations//conversationProfiles/&#x60;. | [optional] 
**latest_message** | **str** | The name of the latest conversation message when the request is triggered. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 
**parent** | **str** | The parent resource contains the conversation profile Format: &#39;projects/&#39; or &#x60;projects//locations/&#x60;. | [optional] 
**query** | [**GoogleCloudDialogflowV2TextInput**](GoogleCloudDialogflowV2TextInput.md) |  | [optional] 
**session_id** | **str** | The ID of the search session. The session_id can be combined with Dialogflow V3 Agent ID retrieved from conversation profile or on its own to identify a search session. The search history of the same session will impact the search result. It&#39;s up to the API caller to choose an appropriate &#x60;Session ID&#x60;. It can be a random number or some type of session identifiers (preferably hashed). The length must not exceed 36 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_search_knowledge_request import GoogleCloudDialogflowV2SearchKnowledgeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SearchKnowledgeRequest from a JSON string
google_cloud_dialogflow_v2_search_knowledge_request_instance = GoogleCloudDialogflowV2SearchKnowledgeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SearchKnowledgeRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_search_knowledge_request_dict = google_cloud_dialogflow_v2_search_knowledge_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SearchKnowledgeRequest from a dict
google_cloud_dialogflow_v2_search_knowledge_request_from_dict = GoogleCloudDialogflowV2SearchKnowledgeRequest.from_dict(google_cloud_dialogflow_v2_search_knowledge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


