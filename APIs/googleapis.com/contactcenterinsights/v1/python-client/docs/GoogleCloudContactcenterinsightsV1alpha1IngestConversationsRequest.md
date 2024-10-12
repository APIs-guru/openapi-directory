# GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest

The request to ingest conversations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_config** | [**GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig**](GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig.md) |  | [optional] 
**gcs_source** | [**GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource**](GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource.md) |  | [optional] 
**parent** | **str** | Required. The parent resource for new conversations. | [optional] 
**redaction_config** | [**GoogleCloudContactcenterinsightsV1alpha1RedactionConfig**](GoogleCloudContactcenterinsightsV1alpha1RedactionConfig.md) |  | [optional] 
**speech_config** | [**GoogleCloudContactcenterinsightsV1alpha1SpeechConfig**](GoogleCloudContactcenterinsightsV1alpha1SpeechConfig.md) |  | [optional] 
**transcript_object_config** | [**GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig**](GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request import GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest from a JSON string
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_instance = GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_dict = google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest from a dict
google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_from_dict = GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest.from_dict(google_cloud_contactcenterinsights_v1alpha1_ingest_conversations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


