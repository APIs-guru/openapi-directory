# GoogleCloudDialogflowV2beta1Participant

Represents a conversation participant (human agent, virtual agent, end-user).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents_metadata_filters** | **Dict[str, str]** | Optional. Key-value filters on the metadata of documents returned by article suggestion. If specified, article suggestion only returns suggested documents that match all filters in their Document.metadata. Multiple values for a metadata key should be concatenated by comma. For example, filters to match all documents that have &#39;US&#39; or &#39;CA&#39; in their market metadata values and &#39;agent&#39; in their user metadata values will be &#x60;&#x60;&#x60; documents_metadata_filters { key: \&quot;market\&quot; value: \&quot;US,CA\&quot; } documents_metadata_filters { key: \&quot;user\&quot; value: \&quot;agent\&quot; } &#x60;&#x60;&#x60; | [optional] 
**name** | **str** | Optional. The unique identifier of this participant. Format: &#x60;projects//locations//conversations//participants/&#x60;. | [optional] 
**obfuscated_external_user_id** | **str** | Optional. Obfuscated user id that should be associated with the created participant. You can specify a user id as follows: 1. If you set this field in CreateParticipantRequest or UpdateParticipantRequest, Dialogflow adds the obfuscated user id with the participant. 2. If you set this field in AnalyzeContent or StreamingAnalyzeContent, Dialogflow will update Participant.obfuscated_external_user_id. Dialogflow uses this user id for billing and measurement. If a user with the same obfuscated_external_user_id is created in a later conversation, Dialogflow will know it&#39;s the same user. Dialogflow also uses this user id for Agent Assist suggestion personalization. For example, Dialogflow can use it to provide personalized smart reply suggestions for this user. Note: * Please never pass raw user ids to Dialogflow. Always obfuscate your user id first. * Dialogflow only accepts a UTF-8 encoded string, e.g., a hex digest of a hash function like SHA-512. * The length of the user id must be &lt;&#x3D; 256 characters. | [optional] 
**role** | **str** | Immutable. The role this participant plays in the conversation. This field must be set during participant creation and is then immutable. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_participant import GoogleCloudDialogflowV2beta1Participant

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1Participant from a JSON string
google_cloud_dialogflow_v2beta1_participant_instance = GoogleCloudDialogflowV2beta1Participant.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1Participant.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_participant_dict = google_cloud_dialogflow_v2beta1_participant_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1Participant from a dict
google_cloud_dialogflow_v2beta1_participant_from_dict = GoogleCloudDialogflowV2beta1Participant.from_dict(google_cloud_dialogflow_v2beta1_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


