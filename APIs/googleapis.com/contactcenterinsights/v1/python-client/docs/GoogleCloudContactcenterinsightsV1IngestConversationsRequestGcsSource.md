# GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource

Configuration for Cloud Storage bucket sources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_object_type** | **str** | Optional. Specifies the type of the objects in &#x60;bucket_uri&#x60;. | [optional] 
**bucket_uri** | **str** | Required. The Cloud Storage bucket containing source objects. | [optional] 
**custom_metadata_keys** | **List[str]** | Optional. Custom keys to extract as conversation labels from metadata files in &#x60;metadata_bucket_uri&#x60;. Keys not included in this field will be ignored. Note that there is a limit of 20 labels per conversation. | [optional] 
**metadata_bucket_uri** | **str** | Optional. The Cloud Storage path to the source object metadata. Note that: [1] metadata files are expected to be in JSON format [2] metadata and source objects must be in separate buckets [3] a source object&#39;s metadata object must share the same name to be properly ingested | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_ingest_conversations_request_gcs_source import GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource from a JSON string
google_cloud_contactcenterinsights_v1_ingest_conversations_request_gcs_source_instance = GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_ingest_conversations_request_gcs_source_dict = google_cloud_contactcenterinsights_v1_ingest_conversations_request_gcs_source_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource from a dict
google_cloud_contactcenterinsights_v1_ingest_conversations_request_gcs_source_from_dict = GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource.from_dict(google_cloud_contactcenterinsights_v1_ingest_conversations_request_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


