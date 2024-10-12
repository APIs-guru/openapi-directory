# GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary

Generated summary for a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_record** | **str** | The name of the answer record. Format: \&quot;projects//answerRecords/\&quot; | [optional] 
**baseline_model_version** | **str** | The baseline model version used to generate this summary. It is empty if a baseline model was not used to generate this summary. | [optional] 
**text** | **str** | The summary content that is concatenated into one string. | [optional] 
**text_sections** | **Dict[str, str]** | The summary content that is divided into sections. The key is the section&#39;s name and the value is the section&#39;s content. There is no specific format for the key or value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_suggest_conversation_summary_response_summary import GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary from a JSON string
google_cloud_dialogflow_v2_suggest_conversation_summary_response_summary_instance = GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_suggest_conversation_summary_response_summary_dict = google_cloud_dialogflow_v2_suggest_conversation_summary_response_summary_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary from a dict
google_cloud_dialogflow_v2_suggest_conversation_summary_response_summary_from_dict = GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary.from_dict(google_cloud_dialogflow_v2_suggest_conversation_summary_response_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


