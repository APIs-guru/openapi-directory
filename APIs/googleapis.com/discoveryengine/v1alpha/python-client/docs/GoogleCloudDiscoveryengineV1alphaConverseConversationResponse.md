# GoogleCloudDiscoveryengineV1alphaConverseConversationResponse

Response message for ConversationalSearchService.ConverseConversation method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | [**GoogleCloudDiscoveryengineV1alphaConversation**](GoogleCloudDiscoveryengineV1alphaConversation.md) |  | [optional] 
**related_questions** | **List[str]** | Suggested related questions. | [optional] 
**reply** | [**GoogleCloudDiscoveryengineV1alphaReply**](GoogleCloudDiscoveryengineV1alphaReply.md) |  | [optional] 
**search_results** | [**List[GoogleCloudDiscoveryengineV1alphaSearchResponseSearchResult]**](GoogleCloudDiscoveryengineV1alphaSearchResponseSearchResult.md) | Search Results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_converse_conversation_response import GoogleCloudDiscoveryengineV1alphaConverseConversationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaConverseConversationResponse from a JSON string
google_cloud_discoveryengine_v1alpha_converse_conversation_response_instance = GoogleCloudDiscoveryengineV1alphaConverseConversationResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaConverseConversationResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_converse_conversation_response_dict = google_cloud_discoveryengine_v1alpha_converse_conversation_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaConverseConversationResponse from a dict
google_cloud_discoveryengine_v1alpha_converse_conversation_response_from_dict = GoogleCloudDiscoveryengineV1alphaConverseConversationResponse.from_dict(google_cloud_discoveryengine_v1alpha_converse_conversation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


