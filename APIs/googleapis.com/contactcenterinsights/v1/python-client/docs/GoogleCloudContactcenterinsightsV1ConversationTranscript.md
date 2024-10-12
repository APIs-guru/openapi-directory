# GoogleCloudContactcenterinsightsV1ConversationTranscript

A message representing the transcript of a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcript_segments** | [**List[GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment]**](GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.md) | A list of sequential transcript segments that comprise the conversation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_conversation_transcript import GoogleCloudContactcenterinsightsV1ConversationTranscript

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ConversationTranscript from a JSON string
google_cloud_contactcenterinsights_v1_conversation_transcript_instance = GoogleCloudContactcenterinsightsV1ConversationTranscript.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ConversationTranscript.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_conversation_transcript_dict = google_cloud_contactcenterinsights_v1_conversation_transcript_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ConversationTranscript from a dict
google_cloud_contactcenterinsights_v1_conversation_transcript_from_dict = GoogleCloudContactcenterinsightsV1ConversationTranscript.from_dict(google_cloud_contactcenterinsights_v1_conversation_transcript_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


