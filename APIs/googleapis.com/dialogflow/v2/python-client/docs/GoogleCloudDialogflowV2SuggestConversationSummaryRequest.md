# GoogleCloudDialogflowV2SuggestConversationSummaryRequest

The request message for Conversations.SuggestConversationSummary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assist_query_params** | [**GoogleCloudDialogflowV2AssistQueryParameters**](GoogleCloudDialogflowV2AssistQueryParameters.md) |  | [optional] 
**context_size** | **int** | Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. By default 500 and at most 1000. | [optional] 
**latest_message** | **str** | The name of the latest conversation message used as context for compiling suggestion. If empty, the latest message of the conversation will be used. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_suggest_conversation_summary_request import GoogleCloudDialogflowV2SuggestConversationSummaryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SuggestConversationSummaryRequest from a JSON string
google_cloud_dialogflow_v2_suggest_conversation_summary_request_instance = GoogleCloudDialogflowV2SuggestConversationSummaryRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SuggestConversationSummaryRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_suggest_conversation_summary_request_dict = google_cloud_dialogflow_v2_suggest_conversation_summary_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SuggestConversationSummaryRequest from a dict
google_cloud_dialogflow_v2_suggest_conversation_summary_request_from_dict = GoogleCloudDialogflowV2SuggestConversationSummaryRequest.from_dict(google_cloud_dialogflow_v2_suggest_conversation_summary_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


