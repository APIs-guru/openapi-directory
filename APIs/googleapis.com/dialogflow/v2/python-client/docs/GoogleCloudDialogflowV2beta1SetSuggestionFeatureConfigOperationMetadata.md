# GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata

Metadata for a ConversationProfile.SetSuggestionFeatureConfig operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_profile** | **str** | The resource name of the conversation profile. Format: &#x60;projects//locations//conversationProfiles/&#x60; | [optional] 
**create_time** | **str** | Timestamp whe the request was created. The time is measured on server side. | [optional] 
**participant_role** | **str** | Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. | [optional] 
**suggestion_feature_type** | **str** | Required. The type of the suggestion feature to add or update. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_operation_metadata import GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata from a JSON string
google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_operation_metadata_instance = GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_operation_metadata_dict = google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata from a dict
google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_operation_metadata_from_dict = GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata.from_dict(google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


