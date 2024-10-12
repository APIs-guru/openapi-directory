# GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo

Word-level info for words in a transcript.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset. | [optional] 
**end_offset** | **str** | Time offset of the end of this word relative to the beginning of the total conversation. | [optional] 
**start_offset** | **str** | Time offset of the start of this word relative to the beginning of the total conversation. | [optional] 
**word** | **str** | The word itself. Includes punctuation marks that surround the word. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_word_info import GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo from a JSON string
google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_word_info_instance = GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_word_info_dict = google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_word_info_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo from a dict
google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_word_info_from_dict = GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo.from_dict(google_cloud_contactcenterinsights_v1_conversation_transcript_transcript_segment_word_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


