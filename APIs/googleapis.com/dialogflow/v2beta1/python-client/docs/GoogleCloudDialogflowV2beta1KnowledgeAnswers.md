# GoogleCloudDialogflowV2beta1KnowledgeAnswers

Represents the result of querying a Knowledge base.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | [**List[GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer]**](GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer.md) | A list of answers from Knowledge Connector. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_knowledge_answers import GoogleCloudDialogflowV2beta1KnowledgeAnswers

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1KnowledgeAnswers from a JSON string
google_cloud_dialogflow_v2beta1_knowledge_answers_instance = GoogleCloudDialogflowV2beta1KnowledgeAnswers.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1KnowledgeAnswers.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_knowledge_answers_dict = google_cloud_dialogflow_v2beta1_knowledge_answers_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1KnowledgeAnswers from a dict
google_cloud_dialogflow_v2beta1_knowledge_answers_from_dict = GoogleCloudDialogflowV2beta1KnowledgeAnswers.from_dict(google_cloud_dialogflow_v2beta1_knowledge_answers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


