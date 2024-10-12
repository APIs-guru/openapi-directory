# GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate

Prompt template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Prompt name. | [optional] 
**frozen** | **bool** | If the flag is true, the prompt is frozen and cannot be modified by users. | [optional] 
**prompt_text** | **str** | Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. For example: \&quot;Here is a conversation $conversation, a response is: \&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_generative_settings_fallback_settings_prompt_template import GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate from a JSON string
google_cloud_dialogflow_cx_v3_generative_settings_fallback_settings_prompt_template_instance = GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_generative_settings_fallback_settings_prompt_template_dict = google_cloud_dialogflow_cx_v3_generative_settings_fallback_settings_prompt_template_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate from a dict
google_cloud_dialogflow_cx_v3_generative_settings_fallback_settings_prompt_template_from_dict = GoogleCloudDialogflowCxV3GenerativeSettingsFallbackSettingsPromptTemplate.from_dict(google_cloud_dialogflow_cx_v3_generative_settings_fallback_settings_prompt_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


