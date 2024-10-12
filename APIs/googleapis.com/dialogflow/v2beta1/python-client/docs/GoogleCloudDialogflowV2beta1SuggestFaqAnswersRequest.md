# GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest

The request message for Participants.SuggestFaqAnswers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assist_query_params** | [**GoogleCloudDialogflowV2beta1AssistQueryParameters**](GoogleCloudDialogflowV2beta1AssistQueryParameters.md) |  | [optional] 
**context_size** | **int** | Optional. Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. By default 20 and at most 50. | [optional] 
**latest_message** | **str** | Optional. The name of the latest conversation message to compile suggestion for. If empty, it will be the latest message of the conversation. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_suggest_faq_answers_request import GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest from a JSON string
google_cloud_dialogflow_v2beta1_suggest_faq_answers_request_instance = GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_suggest_faq_answers_request_dict = google_cloud_dialogflow_v2beta1_suggest_faq_answers_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest from a dict
google_cloud_dialogflow_v2beta1_suggest_faq_answers_request_from_dict = GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest.from_dict(google_cloud_dialogflow_v2beta1_suggest_faq_answers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


