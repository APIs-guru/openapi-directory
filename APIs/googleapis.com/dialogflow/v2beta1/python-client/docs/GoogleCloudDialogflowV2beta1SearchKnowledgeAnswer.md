# GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer

Represents a SearchKnowledge answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | The piece of text from the knowledge base documents that answers the search query | [optional] 
**answer_record** | **str** | The name of the answer record. Format: &#x60;projects//locations//answer Records/&#x60; | [optional] 
**answer_sources** | [**List[GoogleCloudDialogflowV2beta1SearchKnowledgeAnswerAnswerSource]**](GoogleCloudDialogflowV2beta1SearchKnowledgeAnswerAnswerSource.md) | All sources used to generate the answer. | [optional] 
**answer_type** | **str** | The type of the answer. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_search_knowledge_answer import GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer from a JSON string
google_cloud_dialogflow_v2beta1_search_knowledge_answer_instance = GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_search_knowledge_answer_dict = google_cloud_dialogflow_v2beta1_search_knowledge_answer_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer from a dict
google_cloud_dialogflow_v2beta1_search_knowledge_answer_from_dict = GoogleCloudDialogflowV2beta1SearchKnowledgeAnswer.from_dict(google_cloud_dialogflow_v2beta1_search_knowledge_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


