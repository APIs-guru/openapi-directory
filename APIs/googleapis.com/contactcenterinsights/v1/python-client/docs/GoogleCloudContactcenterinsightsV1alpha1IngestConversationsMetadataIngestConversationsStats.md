# GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats

Statistics for IngestConversations operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duplicates_skipped_count** | **int** | Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested. | [optional] [readonly] 
**failed_ingest_count** | **int** | Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field. | [optional] [readonly] 
**processed_object_count** | **int** | Output only. The number of objects processed during the ingest operation. | [optional] [readonly] 
**successful_ingest_count** | **int** | Output only. The number of new conversations added during this ingest operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_ingest_conversations_stats import GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats from a JSON string
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_ingest_conversations_stats_instance = GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_ingest_conversations_stats_dict = google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_ingest_conversations_stats_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats from a dict
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_ingest_conversations_stats_from_dict = GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats.from_dict(google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_metadata_ingest_conversations_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


