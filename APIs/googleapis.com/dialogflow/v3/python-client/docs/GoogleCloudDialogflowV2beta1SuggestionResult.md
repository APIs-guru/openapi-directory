# GoogleCloudDialogflowV2beta1SuggestionResult

One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**suggest_articles_response** | [**GoogleCloudDialogflowV2beta1SuggestArticlesResponse**](GoogleCloudDialogflowV2beta1SuggestArticlesResponse.md) |  | [optional] 
**suggest_dialogflow_assists_response** | [**GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse**](GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse.md) |  | [optional] 
**suggest_entity_extraction_response** | [**GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse**](GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse.md) |  | [optional] 
**suggest_faq_answers_response** | [**GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse**](GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse.md) |  | [optional] 
**suggest_smart_replies_response** | [**GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse**](GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_suggestion_result import GoogleCloudDialogflowV2beta1SuggestionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SuggestionResult from a JSON string
google_cloud_dialogflow_v2beta1_suggestion_result_instance = GoogleCloudDialogflowV2beta1SuggestionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SuggestionResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_suggestion_result_dict = google_cloud_dialogflow_v2beta1_suggestion_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SuggestionResult from a dict
google_cloud_dialogflow_v2beta1_suggestion_result_from_dict = GoogleCloudDialogflowV2beta1SuggestionResult.from_dict(google_cloud_dialogflow_v2beta1_suggestion_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


