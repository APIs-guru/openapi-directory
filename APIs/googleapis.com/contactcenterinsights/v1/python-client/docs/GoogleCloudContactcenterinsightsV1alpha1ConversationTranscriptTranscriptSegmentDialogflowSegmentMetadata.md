# GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata

Metadata from Dialogflow relating to the current transcript segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**smart_reply_allowlist_covered** | **bool** | Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_conversation_transcript_transcript_segment_dialogflow_segment_metadata import GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata from a JSON string
google_cloud_contactcenterinsights_v1alpha1_conversation_transcript_transcript_segment_dialogflow_segment_metadata_instance = GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_transcript_transcript_segment_dialogflow_segment_metadata_dict = google_cloud_contactcenterinsights_v1alpha1_conversation_transcript_transcript_segment_dialogflow_segment_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata from a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_transcript_transcript_segment_dialogflow_segment_metadata_from_dict = GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata.from_dict(google_cloud_contactcenterinsights_v1alpha1_conversation_transcript_transcript_segment_dialogflow_segment_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


