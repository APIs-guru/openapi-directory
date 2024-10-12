# GoogleCloudContactcenterinsightsV1UploadConversationMetadata

The metadata for an UploadConversation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_operation** | **str** | Output only. The operation name for a successfully created analysis operation, if any. | [optional] [readonly] 
**applied_redaction_config** | [**GoogleCloudContactcenterinsightsV1RedactionConfig**](GoogleCloudContactcenterinsightsV1RedactionConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 
**request** | [**GoogleCloudContactcenterinsightsV1UploadConversationRequest**](GoogleCloudContactcenterinsightsV1UploadConversationRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_upload_conversation_metadata import GoogleCloudContactcenterinsightsV1UploadConversationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1UploadConversationMetadata from a JSON string
google_cloud_contactcenterinsights_v1_upload_conversation_metadata_instance = GoogleCloudContactcenterinsightsV1UploadConversationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1UploadConversationMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_upload_conversation_metadata_dict = google_cloud_contactcenterinsights_v1_upload_conversation_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1UploadConversationMetadata from a dict
google_cloud_contactcenterinsights_v1_upload_conversation_metadata_from_dict = GoogleCloudContactcenterinsightsV1UploadConversationMetadata.from_dict(google_cloud_contactcenterinsights_v1_upload_conversation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


