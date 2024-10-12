# GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig

Configuration that applies to all conversations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_channel** | **int** | Optional. Indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for conversations to be properly displayed and analyzed. | [optional] 
**agent_id** | **str** | An opaque, user-specified string representing the human agent who handled the conversations. | [optional] 
**customer_channel** | **int** | Optional. Indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for conversations to be properly displayed and analyzed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_conversation_config import GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig from a JSON string
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_conversation_config_instance = GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_conversation_config_dict = google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_conversation_config_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig from a dict
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_conversation_config_from_dict = GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig.from_dict(google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_conversation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


