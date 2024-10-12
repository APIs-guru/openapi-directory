# GoogleCloudContactcenterinsightsV1FaqAnswerData

Agent Assist frequently-asked-question answer data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | The piece of text from the &#x60;source&#x60; knowledge base document. | [optional] 
**confidence_score** | **float** | The system&#39;s confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). | [optional] 
**metadata** | **Dict[str, str]** | Map that contains metadata about the FAQ answer and the document that it originates from. | [optional] 
**query_record** | **str** | The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} | [optional] 
**question** | **str** | The corresponding FAQ question. | [optional] 
**source** | **str** | The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_faq_answer_data import GoogleCloudContactcenterinsightsV1FaqAnswerData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1FaqAnswerData from a JSON string
google_cloud_contactcenterinsights_v1_faq_answer_data_instance = GoogleCloudContactcenterinsightsV1FaqAnswerData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1FaqAnswerData.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_faq_answer_data_dict = google_cloud_contactcenterinsights_v1_faq_answer_data_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1FaqAnswerData from a dict
google_cloud_contactcenterinsights_v1_faq_answer_data_from_dict = GoogleCloudContactcenterinsightsV1FaqAnswerData.from_dict(google_cloud_contactcenterinsights_v1_faq_answer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


