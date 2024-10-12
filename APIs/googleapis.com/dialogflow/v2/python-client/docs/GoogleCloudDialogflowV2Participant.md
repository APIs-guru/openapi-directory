# GoogleCloudDialogflowV2Participant

Represents a conversation participant (human agent, virtual agent, end-user).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents_metadata_filters** | **Dict[str, str]** | Optional. Key-value filters on the metadata of documents returned by article suggestion. If specified, article suggestion only returns suggested documents that match all filters in their Document.metadata. Multiple values for a metadata key should be concatenated by comma. For example, filters to match all documents that have &#39;US&#39; or &#39;CA&#39; in their market metadata values and &#39;agent&#39; in their user metadata values will be &#x60;&#x60;&#x60; documents_metadata_filters { key: \&quot;market\&quot; value: \&quot;US,CA\&quot; } documents_metadata_filters { key: \&quot;user\&quot; value: \&quot;agent\&quot; } &#x60;&#x60;&#x60; | [optional] 
**name** | **str** | Optional. The unique identifier of this participant. Format: &#x60;projects//locations//conversations//participants/&#x60;. | [optional] 
**obfuscated_external_user_id** | **str** | Optional. Obfuscated user id that should be associated with the created participant. You can specify a user id as follows: 1. If you set this field in CreateParticipantRequest or UpdateParticipantRequest, Dialogflow adds the obfuscated user id with the participant. 2. If you set this field in AnalyzeContent or StreamingAnalyzeContent, Dialogflow will update Participant.obfuscated_external_user_id. Dialogflow returns an error if you try to add a user id for a non-END_USER participant. Dialogflow uses this user id for billing and measurement purposes. For example, Dialogflow determines whether a user in one conversation returned in a later conversation. Note: * Please never pass raw user ids to Dialogflow. Always obfuscate your user id first. * Dialogflow only accepts a UTF-8 encoded string, e.g., a hex digest of a hash function like SHA-512. * The length of the user id must be &lt;&#x3D; 256 characters. | [optional] 
**role** | **str** | Immutable. The role this participant plays in the conversation. This field must be set during participant creation and is then immutable. | [optional] 
**sip_recording_media_label** | **str** | Optional. Label applied to streams representing this participant in SIPREC XML metadata and SDP. This is used to assign transcriptions from that media stream to this participant. This field can be updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_participant import GoogleCloudDialogflowV2Participant

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2Participant from a JSON string
google_cloud_dialogflow_v2_participant_instance = GoogleCloudDialogflowV2Participant.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2Participant.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_participant_dict = google_cloud_dialogflow_v2_participant_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2Participant from a dict
google_cloud_dialogflow_v2_participant_from_dict = GoogleCloudDialogflowV2Participant.from_dict(google_cloud_dialogflow_v2_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


