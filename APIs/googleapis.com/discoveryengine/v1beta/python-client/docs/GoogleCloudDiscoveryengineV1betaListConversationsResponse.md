# GoogleCloudDiscoveryengineV1betaListConversationsResponse

Response for ListConversations method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversations** | [**List[GoogleCloudDiscoveryengineV1betaConversation]**](GoogleCloudDiscoveryengineV1betaConversation.md) | All the Conversations for a given data store. | [optional] 
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_list_conversations_response import GoogleCloudDiscoveryengineV1betaListConversationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaListConversationsResponse from a JSON string
google_cloud_discoveryengine_v1beta_list_conversations_response_instance = GoogleCloudDiscoveryengineV1betaListConversationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaListConversationsResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_list_conversations_response_dict = google_cloud_discoveryengine_v1beta_list_conversations_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaListConversationsResponse from a dict
google_cloud_discoveryengine_v1beta_list_conversations_response_from_dict = GoogleCloudDiscoveryengineV1betaListConversationsResponse.from_dict(google_cloud_discoveryengine_v1beta_list_conversations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


