# GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse

Response message for WidgetService.WidgetConverseConversation method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_id** | **str** | The id of the Conversation returned. | [optional] 
**converse_conversation_response** | [**GoogleCloudDiscoveryengineV1alphaConverseConversationResponse**](GoogleCloudDiscoveryengineV1alphaConverseConversationResponse.md) |  | [optional] 
**u_token** | **str** | The token in response. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_converse_conversation_response import GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse from a JSON string
google_cloud_discoveryengine_v1alpha_widget_converse_conversation_response_instance = GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_widget_converse_conversation_response_dict = google_cloud_discoveryengine_v1alpha_widget_converse_conversation_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse from a dict
google_cloud_discoveryengine_v1alpha_widget_converse_conversation_response_from_dict = GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse.from_dict(google_cloud_discoveryengine_v1alpha_widget_converse_conversation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


