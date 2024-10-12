# GoogleCloudDialogflowV2ListKnowledgeBasesResponse

Response message for KnowledgeBases.ListKnowledgeBases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**knowledge_bases** | [**List[GoogleCloudDialogflowV2KnowledgeBase]**](GoogleCloudDialogflowV2KnowledgeBase.md) | The list of knowledge bases. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_list_knowledge_bases_response import GoogleCloudDialogflowV2ListKnowledgeBasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ListKnowledgeBasesResponse from a JSON string
google_cloud_dialogflow_v2_list_knowledge_bases_response_instance = GoogleCloudDialogflowV2ListKnowledgeBasesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ListKnowledgeBasesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_list_knowledge_bases_response_dict = google_cloud_dialogflow_v2_list_knowledge_bases_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ListKnowledgeBasesResponse from a dict
google_cloud_dialogflow_v2_list_knowledge_bases_response_from_dict = GoogleCloudDialogflowV2ListKnowledgeBasesResponse.from_dict(google_cloud_dialogflow_v2_list_knowledge_bases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


