# GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings

Settings for exporting conversations to [Insights](https://cloud.google.com/contact-center/insights/docs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_insights_export** | **bool** | If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_security_settings_insights_export_settings import GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_security_settings_insights_export_settings_instance = GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_security_settings_insights_export_settings_dict = google_cloud_dialogflow_cx_v3beta1_security_settings_insights_export_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings from a dict
google_cloud_dialogflow_cx_v3beta1_security_settings_insights_export_settings_from_dict = GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_security_settings_insights_export_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


