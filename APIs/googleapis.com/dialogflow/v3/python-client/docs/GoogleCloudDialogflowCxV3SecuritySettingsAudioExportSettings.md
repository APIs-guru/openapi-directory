# GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings

Settings for exporting audio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_export_pattern** | **str** | Filename pattern for exported audio. | [optional] 
**audio_format** | **str** | File format for exported audio file. Currently only in telephony recordings. | [optional] 
**enable_audio_redaction** | **bool** | Enable audio redaction if it is true. | [optional] 
**gcs_bucket** | **str** | Cloud Storage bucket to export audio record to. Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_security_settings_audio_export_settings import GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings from a JSON string
google_cloud_dialogflow_cx_v3_security_settings_audio_export_settings_instance = GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_security_settings_audio_export_settings_dict = google_cloud_dialogflow_cx_v3_security_settings_audio_export_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings from a dict
google_cloud_dialogflow_cx_v3_security_settings_audio_export_settings_from_dict = GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings.from_dict(google_cloud_dialogflow_cx_v3_security_settings_audio_export_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


