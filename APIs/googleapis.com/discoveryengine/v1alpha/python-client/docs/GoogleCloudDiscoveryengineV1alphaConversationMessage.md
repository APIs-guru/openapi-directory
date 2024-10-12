# GoogleCloudDiscoveryengineV1alphaConversationMessage

Defines a conversation message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Message creation timestamp. | [optional] [readonly] 
**reply** | [**GoogleCloudDiscoveryengineV1alphaReply**](GoogleCloudDiscoveryengineV1alphaReply.md) |  | [optional] 
**user_input** | [**GoogleCloudDiscoveryengineV1alphaTextInput**](GoogleCloudDiscoveryengineV1alphaTextInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_conversation_message import GoogleCloudDiscoveryengineV1alphaConversationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaConversationMessage from a JSON string
google_cloud_discoveryengine_v1alpha_conversation_message_instance = GoogleCloudDiscoveryengineV1alphaConversationMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaConversationMessage.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_conversation_message_dict = google_cloud_discoveryengine_v1alpha_conversation_message_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaConversationMessage from a dict
google_cloud_discoveryengine_v1alpha_conversation_message_from_dict = GoogleCloudDiscoveryengineV1alphaConversationMessage.from_dict(google_cloud_discoveryengine_v1alpha_conversation_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


