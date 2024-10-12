# GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource

The sources of the answers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snippet** | **str** | The relevant snippet of the article. | [optional] 
**title** | **str** | The title of the article. | [optional] 
**uri** | **str** | The URI of the article. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_search_knowledge_answer_answer_source import GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource from a JSON string
google_cloud_dialogflow_v2_search_knowledge_answer_answer_source_instance = GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_search_knowledge_answer_answer_source_dict = google_cloud_dialogflow_v2_search_knowledge_answer_answer_source_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource from a dict
google_cloud_dialogflow_v2_search_knowledge_answer_answer_source_from_dict = GoogleCloudDialogflowV2SearchKnowledgeAnswerAnswerSource.from_dict(google_cloud_dialogflow_v2_search_knowledge_answer_answer_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


