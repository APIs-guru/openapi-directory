# GoogleCloudDiscoveryengineV1betaConversation

External conversation proto definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Output only. The time the conversation finished. | [optional] [readonly] 
**messages** | [**List[GoogleCloudDiscoveryengineV1betaConversationMessage]**](GoogleCloudDiscoveryengineV1betaConversationMessage.md) | Conversation messages. | [optional] 
**name** | **str** | Immutable. Fully qualified name &#x60;project/*/locations/global/collections/{collection}/dataStore/*/conversations/*&#x60; or &#x60;project/*/locations/global/collections/{collection}/engines/*/conversations/*&#x60;. | [optional] 
**start_time** | **str** | Output only. The time the conversation started. | [optional] [readonly] 
**state** | **str** | The state of the Conversation. | [optional] 
**user_pseudo_id** | **str** | A unique identifier for tracking users. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_conversation import GoogleCloudDiscoveryengineV1betaConversation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaConversation from a JSON string
google_cloud_discoveryengine_v1beta_conversation_instance = GoogleCloudDiscoveryengineV1betaConversation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaConversation.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_conversation_dict = google_cloud_discoveryengine_v1beta_conversation_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaConversation from a dict
google_cloud_discoveryengine_v1beta_conversation_from_dict = GoogleCloudDiscoveryengineV1betaConversation.from_dict(google_cloud_discoveryengine_v1beta_conversation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


