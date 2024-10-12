# GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings

Settings for Generative Fallback.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt_templates** | [**List[GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate]**](GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate.md) | Stored prompts that can be selected, for example default templates like \&quot;conservative\&quot; or \&quot;chatty\&quot;, or user defined ones. | [optional] 
**selected_prompt** | **str** | Display name of the selected prompt. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_generative_settings_fallback_settings import GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_generative_settings_fallback_settings_instance = GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_generative_settings_fallback_settings_dict = google_cloud_dialogflow_cx_v3beta1_generative_settings_fallback_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings from a dict
google_cloud_dialogflow_cx_v3beta1_generative_settings_fallback_settings_from_dict = GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_generative_settings_fallback_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


