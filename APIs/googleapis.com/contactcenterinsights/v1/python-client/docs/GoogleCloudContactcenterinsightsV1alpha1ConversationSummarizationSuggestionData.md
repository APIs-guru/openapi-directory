# GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData

Conversation summarization suggestion data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_record** | **str** | The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} | [optional] 
**confidence** | **float** | The confidence score of the summarization. | [optional] 
**conversation_model** | **str** | The name of the model that generates this summary. Format: projects/{project}/locations/{location}/conversationModels/{conversation_model} | [optional] 
**metadata** | **Dict[str, str]** | A map that contains metadata about the summarization and the document from which it originates. | [optional] 
**text** | **str** | The summarization content that is concatenated into one string. | [optional] 
**text_sections** | **Dict[str, str]** | The summarization content that is divided into sections. The key is the section&#39;s name and the value is the section&#39;s content. There is no specific format for the key or value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_conversation_summarization_suggestion_data import GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData from a JSON string
google_cloud_contactcenterinsights_v1alpha1_conversation_summarization_suggestion_data_instance = GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_summarization_suggestion_data_dict = google_cloud_contactcenterinsights_v1alpha1_conversation_summarization_suggestion_data_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData from a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_summarization_suggestion_data_from_dict = GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData.from_dict(google_cloud_contactcenterinsights_v1alpha1_conversation_summarization_suggestion_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


