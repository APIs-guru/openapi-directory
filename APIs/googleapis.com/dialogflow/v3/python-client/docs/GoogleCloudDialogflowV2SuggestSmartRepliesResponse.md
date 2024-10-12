# GoogleCloudDialogflowV2SuggestSmartRepliesResponse

The response message for Participants.SuggestSmartReplies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_size** | **int** | Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestSmartRepliesRequest.context_size field in the request if there aren&#39;t that many messages in the conversation. | [optional] 
**latest_message** | **str** | The name of the latest conversation message used to compile suggestion for. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 
**smart_reply_answers** | [**List[GoogleCloudDialogflowV2SmartReplyAnswer]**](GoogleCloudDialogflowV2SmartReplyAnswer.md) | Output only. Multiple reply options provided by smart reply service. The order is based on the rank of the model prediction. The maximum number of the returned replies is set in SmartReplyConfig. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_suggest_smart_replies_response import GoogleCloudDialogflowV2SuggestSmartRepliesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SuggestSmartRepliesResponse from a JSON string
google_cloud_dialogflow_v2_suggest_smart_replies_response_instance = GoogleCloudDialogflowV2SuggestSmartRepliesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SuggestSmartRepliesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_suggest_smart_replies_response_dict = google_cloud_dialogflow_v2_suggest_smart_replies_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SuggestSmartRepliesResponse from a dict
google_cloud_dialogflow_v2_suggest_smart_replies_response_from_dict = GoogleCloudDialogflowV2SuggestSmartRepliesResponse.from_dict(google_cloud_dialogflow_v2_suggest_smart_replies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


