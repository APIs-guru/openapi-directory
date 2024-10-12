# GoogleCloudDialogflowV2beta1KnowledgeBase

A knowledge base represents a collection of knowledge documents that you provide to Dialogflow. Your knowledge documents contain information that may be useful during conversations with end-users. Some Dialogflow features use knowledge bases when looking for a response to an end-user input. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The display name of the knowledge base. The name must be 1024 bytes or less; otherwise, the creation request fails. | [optional] 
**language_code** | **str** | Language which represents the KnowledgeBase. When the KnowledgeBase is created/updated, this is populated for all non en-us languages. If not populated, the default language en-us applies. | [optional] 
**name** | **str** | The knowledge base resource name. The name must be empty when creating a knowledge base. Format: &#x60;projects//locations//knowledgeBases/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_knowledge_base import GoogleCloudDialogflowV2beta1KnowledgeBase

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1KnowledgeBase from a JSON string
google_cloud_dialogflow_v2beta1_knowledge_base_instance = GoogleCloudDialogflowV2beta1KnowledgeBase.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1KnowledgeBase.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_knowledge_base_dict = google_cloud_dialogflow_v2beta1_knowledge_base_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1KnowledgeBase from a dict
google_cloud_dialogflow_v2beta1_knowledge_base_from_dict = GoogleCloudDialogflowV2beta1KnowledgeBase.from_dict(google_cloud_dialogflow_v2beta1_knowledge_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


