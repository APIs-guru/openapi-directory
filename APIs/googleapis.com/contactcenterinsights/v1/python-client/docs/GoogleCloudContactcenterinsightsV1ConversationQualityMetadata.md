# GoogleCloudContactcenterinsightsV1ConversationQualityMetadata

Conversation metadata related to quality management.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_info** | [**List[GoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfo]**](GoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfo.md) | Information about agents involved in the call. | [optional] 
**customer_satisfaction_rating** | **int** | An arbitrary integer value indicating the customer&#39;s satisfaction rating. | [optional] 
**menu_path** | **str** | An arbitrary string value specifying the menu path the customer took. | [optional] 
**wait_duration** | **str** | The amount of time the customer waited to connect with an agent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_conversation_quality_metadata import GoogleCloudContactcenterinsightsV1ConversationQualityMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ConversationQualityMetadata from a JSON string
google_cloud_contactcenterinsights_v1_conversation_quality_metadata_instance = GoogleCloudContactcenterinsightsV1ConversationQualityMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ConversationQualityMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_conversation_quality_metadata_dict = google_cloud_contactcenterinsights_v1_conversation_quality_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ConversationQualityMetadata from a dict
google_cloud_contactcenterinsights_v1_conversation_quality_metadata_from_dict = GoogleCloudContactcenterinsightsV1ConversationQualityMetadata.from_dict(google_cloud_contactcenterinsights_v1_conversation_quality_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


