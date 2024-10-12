# GoogleCloudDialogflowV2SuggestSmartRepliesRequest

The request message for Participants.SuggestSmartReplies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_size** | **int** | Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. By default 20 and at most 50. | [optional] 
**current_text_input** | [**GoogleCloudDialogflowV2TextInput**](GoogleCloudDialogflowV2TextInput.md) |  | [optional] 
**latest_message** | **str** | The name of the latest conversation message to compile suggestion for. If empty, it will be the latest message of the conversation. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_suggest_smart_replies_request import GoogleCloudDialogflowV2SuggestSmartRepliesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SuggestSmartRepliesRequest from a JSON string
google_cloud_dialogflow_v2_suggest_smart_replies_request_instance = GoogleCloudDialogflowV2SuggestSmartRepliesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SuggestSmartRepliesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_suggest_smart_replies_request_dict = google_cloud_dialogflow_v2_suggest_smart_replies_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SuggestSmartRepliesRequest from a dict
google_cloud_dialogflow_v2_suggest_smart_replies_request_from_dict = GoogleCloudDialogflowV2SuggestSmartRepliesRequest.from_dict(google_cloud_dialogflow_v2_suggest_smart_replies_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


