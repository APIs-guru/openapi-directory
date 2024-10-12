# GoogleCloudContactcenterinsightsV1ListConversationsResponse

The response of listing conversations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversations** | [**List[GoogleCloudContactcenterinsightsV1Conversation]**](GoogleCloudContactcenterinsightsV1Conversation.md) | The conversations that match the request. | [optional] 
**next_page_token** | **str** | A token which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is set, it means there is another page available. If it is not set, it means no other pages are available. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_list_conversations_response import GoogleCloudContactcenterinsightsV1ListConversationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ListConversationsResponse from a JSON string
google_cloud_contactcenterinsights_v1_list_conversations_response_instance = GoogleCloudContactcenterinsightsV1ListConversationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ListConversationsResponse.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_list_conversations_response_dict = google_cloud_contactcenterinsights_v1_list_conversations_response_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ListConversationsResponse from a dict
google_cloud_contactcenterinsights_v1_list_conversations_response_from_dict = GoogleCloudContactcenterinsightsV1ListConversationsResponse.from_dict(google_cloud_contactcenterinsights_v1_list_conversations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


