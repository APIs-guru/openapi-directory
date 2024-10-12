# GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment

A segment of a full transcript.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_tag** | **int** | For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount &#x3D; N, its output values can range from &#39;1&#39; to &#39;N&#39;. A channel tag of 0 indicates that the audio is mono. | [optional] 
**confidence** | **float** | A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset. | [optional] 
**dialogflow_segment_metadata** | [**GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata**](GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata.md) |  | [optional] 
**language_code** | **str** | The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: \&quot;en-US\&quot;. | [optional] 
**message_time** | **str** | The time that the message occurred, if provided. | [optional] 
**segment_participant** | [**GoogleCloudContactcenterinsightsV1ConversationParticipant**](GoogleCloudContactcenterinsightsV1ConversationParticipant.md) |  | [optional] 
**sentiment** | [**GoogleCloudContactcenterinsightsV1SentimentData**](GoogleCloudContactcenterinsightsV1SentimentData.md) |  | [optional] 
**text** | **str** | The text of this segment. | [optional] 
**words** | [**List[GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo]**](GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo.md) | A list of the word-specific information for each word in the segment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment import GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment from a JSON string
google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_instance = GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_dict = google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment from a dict
google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_from_dict = GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.from_dict(google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


