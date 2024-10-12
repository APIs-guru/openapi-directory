# GoogleCloudDialogflowV2SearchKnowledgeResponse

The response message for Conversations.SearchKnowledge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | [**List[GoogleCloudDialogflowV2SearchKnowledgeAnswer]**](GoogleCloudDialogflowV2SearchKnowledgeAnswer.md) | Most relevant snippets extracted from articles in the given knowledge base, ordered by confidence. | [optional] 
**rewritten_query** | **str** | The rewritten query used to search knowledge. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_search_knowledge_response import GoogleCloudDialogflowV2SearchKnowledgeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SearchKnowledgeResponse from a JSON string
google_cloud_dialogflow_v2_search_knowledge_response_instance = GoogleCloudDialogflowV2SearchKnowledgeResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SearchKnowledgeResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_search_knowledge_response_dict = google_cloud_dialogflow_v2_search_knowledge_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SearchKnowledgeResponse from a dict
google_cloud_dialogflow_v2_search_knowledge_response_from_dict = GoogleCloudDialogflowV2SearchKnowledgeResponse.from_dict(google_cloud_dialogflow_v2_search_knowledge_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


