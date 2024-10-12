# GoogleCloudDiscoveryengineV1alphaListConversationsResponse

Response for ListConversations method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversations** | [**List[GoogleCloudDiscoveryengineV1alphaConversation]**](GoogleCloudDiscoveryengineV1alphaConversation.md) | All the Conversations for a given data store. | [optional] 
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_list_conversations_response import GoogleCloudDiscoveryengineV1alphaListConversationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaListConversationsResponse from a JSON string
google_cloud_discoveryengine_v1alpha_list_conversations_response_instance = GoogleCloudDiscoveryengineV1alphaListConversationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaListConversationsResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_list_conversations_response_dict = google_cloud_discoveryengine_v1alpha_list_conversations_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaListConversationsResponse from a dict
google_cloud_discoveryengine_v1alpha_list_conversations_response_from_dict = GoogleCloudDiscoveryengineV1alphaListConversationsResponse.from_dict(google_cloud_discoveryengine_v1alpha_list_conversations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


