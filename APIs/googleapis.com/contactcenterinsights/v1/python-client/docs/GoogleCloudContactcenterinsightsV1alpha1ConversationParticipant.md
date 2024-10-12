# GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant

The call participant speaking for a given utterance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dialogflow_participant** | **str** | Deprecated. Use &#x60;dialogflow_participant_name&#x60; instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} | [optional] 
**dialogflow_participant_name** | **str** | The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} | [optional] 
**obfuscated_external_user_id** | **str** | Obfuscated user ID from Dialogflow. | [optional] 
**role** | **str** | The role of the participant. | [optional] 
**user_id** | **str** | A user-specified ID representing the participant. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_conversation_participant import GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant from a JSON string
google_cloud_contactcenterinsights_v1alpha1_conversation_participant_instance = GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_participant_dict = google_cloud_contactcenterinsights_v1alpha1_conversation_participant_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant from a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_participant_from_dict = GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant.from_dict(google_cloud_contactcenterinsights_v1alpha1_conversation_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


