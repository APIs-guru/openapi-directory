# GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest

The request message for ConversationProfiles.SetSuggestionFeature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**participant_role** | **str** | Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. | [optional] 
**suggestion_feature_config** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_request import GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest from a JSON string
google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_request_instance = GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_request_dict = google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest from a dict
google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_request_from_dict = GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest.from_dict(google_cloud_dialogflow_v2beta1_set_suggestion_feature_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


