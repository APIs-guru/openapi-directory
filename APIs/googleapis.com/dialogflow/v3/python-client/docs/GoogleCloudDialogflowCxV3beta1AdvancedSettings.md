# GoogleCloudDialogflowCxV3beta1AdvancedSettings

Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_export_gcs_destination** | [**GoogleCloudDialogflowCxV3beta1GcsDestination**](GoogleCloudDialogflowCxV3beta1GcsDestination.md) |  | [optional] 
**dtmf_settings** | [**GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings**](GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings.md) |  | [optional] 
**logging_settings** | [**GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings**](GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_advanced_settings import GoogleCloudDialogflowCxV3beta1AdvancedSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1AdvancedSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_advanced_settings_instance = GoogleCloudDialogflowCxV3beta1AdvancedSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1AdvancedSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_advanced_settings_dict = google_cloud_dialogflow_cx_v3beta1_advanced_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1AdvancedSettings from a dict
google_cloud_dialogflow_cx_v3beta1_advanced_settings_from_dict = GoogleCloudDialogflowCxV3beta1AdvancedSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_advanced_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


