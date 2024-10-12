# GoogleCloudDialogflowV2beta1CompileSuggestionResponse

The response message for Participants.CompileSuggestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_size** | **int** | Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the CompileSuggestionRequest.context_size field in the request if there aren&#39;t that many messages in the conversation. | [optional] 
**latest_message** | **str** | The name of the latest conversation message used to compile suggestion for. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 
**suggestion** | [**GoogleCloudDialogflowV2beta1Suggestion**](GoogleCloudDialogflowV2beta1Suggestion.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_compile_suggestion_response import GoogleCloudDialogflowV2beta1CompileSuggestionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1CompileSuggestionResponse from a JSON string
google_cloud_dialogflow_v2beta1_compile_suggestion_response_instance = GoogleCloudDialogflowV2beta1CompileSuggestionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1CompileSuggestionResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_compile_suggestion_response_dict = google_cloud_dialogflow_v2beta1_compile_suggestion_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1CompileSuggestionResponse from a dict
google_cloud_dialogflow_v2beta1_compile_suggestion_response_from_dict = GoogleCloudDialogflowV2beta1CompileSuggestionResponse.from_dict(google_cloud_dialogflow_v2beta1_compile_suggestion_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


