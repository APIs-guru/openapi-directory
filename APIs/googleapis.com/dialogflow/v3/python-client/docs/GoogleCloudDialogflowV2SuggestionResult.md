# GoogleCloudDialogflowV2SuggestionResult

One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**suggest_articles_response** | [**GoogleCloudDialogflowV2SuggestArticlesResponse**](GoogleCloudDialogflowV2SuggestArticlesResponse.md) |  | [optional] 
**suggest_faq_answers_response** | [**GoogleCloudDialogflowV2SuggestFaqAnswersResponse**](GoogleCloudDialogflowV2SuggestFaqAnswersResponse.md) |  | [optional] 
**suggest_smart_replies_response** | [**GoogleCloudDialogflowV2SuggestSmartRepliesResponse**](GoogleCloudDialogflowV2SuggestSmartRepliesResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_suggestion_result import GoogleCloudDialogflowV2SuggestionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SuggestionResult from a JSON string
google_cloud_dialogflow_v2_suggestion_result_instance = GoogleCloudDialogflowV2SuggestionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SuggestionResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_suggestion_result_dict = google_cloud_dialogflow_v2_suggestion_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SuggestionResult from a dict
google_cloud_dialogflow_v2_suggestion_result_from_dict = GoogleCloudDialogflowV2SuggestionResult.from_dict(google_cloud_dialogflow_v2_suggestion_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


