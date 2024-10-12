# GoogleCloudDialogflowCxV3beta1SecuritySettings

Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_export_settings** | [**GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings**](GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings.md) |  | [optional] 
**deidentify_template** | **str** | [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. The &#x60;DLP De-identify Templates Reader&#x60; role is needed on the Dialogflow service identity service account (has the form &#x60;service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com&#x60;) for your agent&#39;s project. If empty, Dialogflow replaces sensitive info with &#x60;[redacted]&#x60; text. The template name will have one of the following formats: &#x60;projects//locations//deidentifyTemplates/&#x60; OR &#x60;organizations//locations//deidentifyTemplates/&#x60; Note: &#x60;deidentify_template&#x60; must be located in the same region as the &#x60;SecuritySettings&#x60;. | [optional] 
**display_name** | **str** | Required. The human-readable name of the security settings, unique within the location. | [optional] 
**insights_export_settings** | [**GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings**](GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings.md) |  | [optional] 
**inspect_template** | **str** | [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. The &#x60;DLP Inspect Templates Reader&#x60; role is needed on the Dialogflow service identity service account (has the form &#x60;service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com&#x60;) for your agent&#39;s project. If empty, we use the default DLP inspect config. The template name will have one of the following formats: &#x60;projects//locations//inspectTemplates/&#x60; OR &#x60;organizations//locations//inspectTemplates/&#x60; Note: &#x60;inspect_template&#x60; must be located in the same region as the &#x60;SecuritySettings&#x60;. | [optional] 
**name** | **str** | Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: &#x60;projects//locations//securitySettings/&#x60;. | [optional] 
**purge_data_types** | **List[str]** | List of types of data to remove when retention settings triggers purge. | [optional] 
**redaction_scope** | **str** | Defines the data for which Dialogflow applies redaction. Dialogflow does not redact data that it does not have access to – for example, Cloud logging. | [optional] 
**redaction_strategy** | **str** | Strategy that defines how we do redaction. | [optional] 
**retention_strategy** | **str** | Specifies the retention behavior defined by SecuritySettings.RetentionStrategy. | [optional] 
**retention_window_days** | **int** | Retains data in interaction logging for the specified number of days. This does not apply to Cloud logging, which is owned by the user - not Dialogflow. User must set a value lower than Dialogflow&#39;s default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_security_settings import GoogleCloudDialogflowCxV3beta1SecuritySettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1SecuritySettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_security_settings_instance = GoogleCloudDialogflowCxV3beta1SecuritySettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1SecuritySettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_security_settings_dict = google_cloud_dialogflow_cx_v3beta1_security_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1SecuritySettings from a dict
google_cloud_dialogflow_cx_v3beta1_security_settings_from_dict = GoogleCloudDialogflowCxV3beta1SecuritySettings.from_dict(google_cloud_dialogflow_cx_v3beta1_security_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


