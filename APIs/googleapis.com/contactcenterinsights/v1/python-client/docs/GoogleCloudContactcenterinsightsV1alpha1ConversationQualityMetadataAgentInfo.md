# GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo

Information about an agent involved in the conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** | A user-specified string representing the agent. | [optional] 
**display_name** | **str** | The agent&#39;s name. | [optional] 
**disposition_code** | **str** | A user-provided string indicating the outcome of the agent&#39;s segment of the call. | [optional] 
**team** | **str** | A user-specified string representing the agent&#39;s team. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_conversation_quality_metadata_agent_info import GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo from a JSON string
google_cloud_contactcenterinsights_v1alpha1_conversation_quality_metadata_agent_info_instance = GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_quality_metadata_agent_info_dict = google_cloud_contactcenterinsights_v1alpha1_conversation_quality_metadata_agent_info_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo from a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_quality_metadata_agent_info_from_dict = GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo.from_dict(google_cloud_contactcenterinsights_v1alpha1_conversation_quality_metadata_agent_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


