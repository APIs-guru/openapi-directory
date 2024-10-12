# GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata

The metadata for an IngestConversations operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 
**ingest_conversations_stats** | [**GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats**](GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats.md) |  | [optional] 
**partial_errors** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Output only. Partial errors during ingest operation that might cause the operation output to be incomplete. | [optional] [readonly] 
**request** | [**GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest**](GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata import GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata from a JSON string
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_instance = GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_dict = google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata from a dict
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_from_dict = GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata.from_dict(google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


