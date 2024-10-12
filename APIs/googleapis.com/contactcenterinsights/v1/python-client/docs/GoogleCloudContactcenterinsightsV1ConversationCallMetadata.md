# GoogleCloudContactcenterinsightsV1ConversationCallMetadata

Call-specific metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_channel** | **int** | The audio channel that contains the agent. | [optional] 
**customer_channel** | **int** | The audio channel that contains the customer. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_conversation_call_metadata import GoogleCloudContactcenterinsightsV1ConversationCallMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ConversationCallMetadata from a JSON string
google_cloud_contactcenterinsights_v1_conversation_call_metadata_instance = GoogleCloudContactcenterinsightsV1ConversationCallMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ConversationCallMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_conversation_call_metadata_dict = google_cloud_contactcenterinsights_v1_conversation_call_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ConversationCallMetadata from a dict
google_cloud_contactcenterinsights_v1_conversation_call_metadata_from_dict = GoogleCloudContactcenterinsightsV1ConversationCallMetadata.from_dict(google_cloud_contactcenterinsights_v1_conversation_call_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


