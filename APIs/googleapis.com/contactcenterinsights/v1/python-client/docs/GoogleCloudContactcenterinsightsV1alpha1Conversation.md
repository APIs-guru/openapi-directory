# GoogleCloudContactcenterinsightsV1alpha1Conversation

The conversation resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** | An opaque, user-specified string representing the human agent who handled the conversation. | [optional] 
**call_metadata** | [**GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata**](GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which the conversation was created. | [optional] [readonly] 
**data_source** | [**GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource**](GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource.md) |  | [optional] 
**dialogflow_intents** | [**Dict[str, GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent]**](GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent.md) | Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent} | [optional] [readonly] 
**duration** | **str** | Output only. The duration of the conversation. | [optional] [readonly] 
**expire_time** | **str** | The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted. | [optional] 
**labels** | **Dict[str, str]** | A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry. | [optional] 
**language_code** | **str** | A user-specified language code for the conversation. | [optional] 
**latest_analysis** | [**GoogleCloudContactcenterinsightsV1alpha1Analysis**](GoogleCloudContactcenterinsightsV1alpha1Analysis.md) |  | [optional] 
**latest_summary** | [**GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData**](GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData.md) |  | [optional] 
**medium** | **str** | Immutable. The conversation medium, if unspecified will default to PHONE_CALL. | [optional] 
**name** | **str** | Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation} | [optional] 
**obfuscated_user_id** | **str** | Obfuscated user ID which the customer sent to us. | [optional] 
**quality_metadata** | [**GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadata**](GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadata.md) |  | [optional] 
**runtime_annotations** | [**List[GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation]**](GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation.md) | Output only. The annotations that were generated during the customer and agent interaction. | [optional] [readonly] 
**start_time** | **str** | The time at which the conversation started. | [optional] 
**transcript** | [**GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript**](GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript.md) |  | [optional] 
**ttl** | **str** | Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time. | [optional] 
**turn_count** | **int** | Output only. The number of turns in the conversation. | [optional] [readonly] 
**update_time** | **str** | Output only. The most recent time at which the conversation was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_conversation import GoogleCloudContactcenterinsightsV1alpha1Conversation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1Conversation from a JSON string
google_cloud_contactcenterinsights_v1alpha1_conversation_instance = GoogleCloudContactcenterinsightsV1alpha1Conversation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1Conversation.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_dict = google_cloud_contactcenterinsights_v1alpha1_conversation_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1Conversation from a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_from_dict = GoogleCloudContactcenterinsightsV1alpha1Conversation.from_dict(google_cloud_contactcenterinsights_v1alpha1_conversation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


