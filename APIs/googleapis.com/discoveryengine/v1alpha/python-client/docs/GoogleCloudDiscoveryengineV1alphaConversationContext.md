# GoogleCloudDiscoveryengineV1alphaConversationContext

Defines context of the conversation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_document** | **str** | The current active document the user opened. It contains the document resource reference. | [optional] 
**context_documents** | **List[str]** | The current list of documents the user is seeing. It contains the document resource references. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_conversation_context import GoogleCloudDiscoveryengineV1alphaConversationContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaConversationContext from a JSON string
google_cloud_discoveryengine_v1alpha_conversation_context_instance = GoogleCloudDiscoveryengineV1alphaConversationContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaConversationContext.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_conversation_context_dict = google_cloud_discoveryengine_v1alpha_conversation_context_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaConversationContext from a dict
google_cloud_discoveryengine_v1alpha_conversation_context_from_dict = GoogleCloudDiscoveryengineV1alphaConversationContext.from_dict(google_cloud_discoveryengine_v1alpha_conversation_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


