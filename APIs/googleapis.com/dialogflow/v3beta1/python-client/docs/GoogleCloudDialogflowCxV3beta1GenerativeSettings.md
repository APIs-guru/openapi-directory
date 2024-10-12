# GoogleCloudDialogflowCxV3beta1GenerativeSettings

Settings for Generative AI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fallback_settings** | [**GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings**](GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings.md) |  | [optional] 
**generative_safety_settings** | [**GoogleCloudDialogflowCxV3beta1SafetySettings**](GoogleCloudDialogflowCxV3beta1SafetySettings.md) |  | [optional] 
**knowledge_connector_settings** | [**GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings**](GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings.md) |  | [optional] 
**language_code** | **str** | Language for this settings. | [optional] 
**name** | **str** | Format: &#x60;projects//locations//agents//generativeSettings&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_generative_settings import GoogleCloudDialogflowCxV3beta1GenerativeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1GenerativeSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_generative_settings_instance = GoogleCloudDialogflowCxV3beta1GenerativeSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1GenerativeSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_generative_settings_dict = google_cloud_dialogflow_cx_v3beta1_generative_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1GenerativeSettings from a dict
google_cloud_dialogflow_cx_v3beta1_generative_settings_from_dict = GoogleCloudDialogflowCxV3beta1GenerativeSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_generative_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


