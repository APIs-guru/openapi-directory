# GoogleCloudDialogflowV2beta1CompileSuggestionRequest

The request message for Participants.CompileSuggestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_size** | **int** | Optional. Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. If zero or less than zero, 20 is used. | [optional] 
**latest_message** | **str** | Optional. The name of the latest conversation message to compile suggestion for. If empty, it will be the latest message of the conversation. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_compile_suggestion_request import GoogleCloudDialogflowV2beta1CompileSuggestionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1CompileSuggestionRequest from a JSON string
google_cloud_dialogflow_v2beta1_compile_suggestion_request_instance = GoogleCloudDialogflowV2beta1CompileSuggestionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1CompileSuggestionRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_compile_suggestion_request_dict = google_cloud_dialogflow_v2beta1_compile_suggestion_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1CompileSuggestionRequest from a dict
google_cloud_dialogflow_v2beta1_compile_suggestion_request_from_dict = GoogleCloudDialogflowV2beta1CompileSuggestionRequest.from_dict(google_cloud_dialogflow_v2beta1_compile_suggestion_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


