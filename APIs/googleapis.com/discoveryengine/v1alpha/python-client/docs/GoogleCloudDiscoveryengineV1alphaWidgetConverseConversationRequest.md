# GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest

Request message for WidgetService.WidgetConverseConversation method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_params** | [**GoogleCloudDiscoveryengineV1alphaAdditionalParams**](GoogleCloudDiscoveryengineV1alphaAdditionalParams.md) |  | [optional] 
**config_id** | **str** | Required. The UUID of the WidgetConfig. This field is used to identify the widget configuration, set of models used to make the user event collection. | [optional] 
**conversation_id** | **str** | The id of the Conversation to get. Use \&quot;-\&quot; to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session. | [optional] 
**converse_conversation_request** | [**GoogleCloudDiscoveryengineV1alphaConverseConversationRequest**](GoogleCloudDiscoveryengineV1alphaConverseConversationRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request import GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest from a JSON string
google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request_instance = GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request_dict = google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest from a dict
google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request_from_dict = GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest.from_dict(google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


