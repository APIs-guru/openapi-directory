# GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig

Default configuration when creating Analyses in Insights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotator_selector** | [**GoogleCloudContactcenterinsightsV1AnnotatorSelector**](GoogleCloudContactcenterinsightsV1AnnotatorSelector.md) |  | [optional] 
**runtime_integration_analysis_percentage** | **float** | Percentage of conversations created using Dialogflow runtime integration to analyze automatically, between [0, 100]. | [optional] 
**upload_conversation_analysis_percentage** | **float** | Percentage of conversations created using the UploadConversation endpoint to analyze automatically, between [0, 100]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_settings_analysis_config import GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig from a JSON string
google_cloud_contactcenterinsights_v1_settings_analysis_config_instance = GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_settings_analysis_config_dict = google_cloud_contactcenterinsights_v1_settings_analysis_config_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig from a dict
google_cloud_contactcenterinsights_v1_settings_analysis_config_from_dict = GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig.from_dict(google_cloud_contactcenterinsights_v1_settings_analysis_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


