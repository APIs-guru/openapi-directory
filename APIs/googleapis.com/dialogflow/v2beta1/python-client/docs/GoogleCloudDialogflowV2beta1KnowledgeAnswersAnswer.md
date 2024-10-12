# GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer

An answer from Knowledge Connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | The piece of text from the &#x60;source&#x60; knowledge base document that answers this conversational query. | [optional] 
**faq_question** | **str** | The corresponding FAQ question if the answer was extracted from a FAQ Document, empty otherwise. | [optional] 
**match_confidence** | **float** | The system&#39;s confidence score that this Knowledge answer is a good match for this conversational query. The range is from 0.0 (completely uncertain) to 1.0 (completely certain). Note: The confidence score is likely to vary somewhat (possibly even for identical requests), as the underlying model is under constant improvement. It may be deprecated in the future. We recommend using &#x60;match_confidence_level&#x60; which should be generally more stable. | [optional] 
**match_confidence_level** | **str** | The system&#39;s confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given &#x60;&#x60; pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer. | [optional] 
**source** | **str** | Indicates which Knowledge Document this answer was extracted from. Format: &#x60;projects//knowledgeBases//documents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_knowledge_answers_answer import GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer from a JSON string
google_cloud_dialogflow_v2beta1_knowledge_answers_answer_instance = GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_knowledge_answers_answer_dict = google_cloud_dialogflow_v2beta1_knowledge_answers_answer_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer from a dict
google_cloud_dialogflow_v2beta1_knowledge_answers_answer_from_dict = GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer.from_dict(google_cloud_dialogflow_v2beta1_knowledge_answers_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


