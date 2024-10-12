# GoogleCloudDialogflowV2ListConversationsResponse

The response message for Conversations.ListConversations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversations** | [**List[GoogleCloudDialogflowV2Conversation]**](GoogleCloudDialogflowV2Conversation.md) | The list of conversations. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_list_conversations_response import GoogleCloudDialogflowV2ListConversationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ListConversationsResponse from a JSON string
google_cloud_dialogflow_v2_list_conversations_response_instance = GoogleCloudDialogflowV2ListConversationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ListConversationsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_list_conversations_response_dict = google_cloud_dialogflow_v2_list_conversations_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ListConversationsResponse from a dict
google_cloud_dialogflow_v2_list_conversations_response_from_dict = GoogleCloudDialogflowV2ListConversationsResponse.from_dict(google_cloud_dialogflow_v2_list_conversations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


