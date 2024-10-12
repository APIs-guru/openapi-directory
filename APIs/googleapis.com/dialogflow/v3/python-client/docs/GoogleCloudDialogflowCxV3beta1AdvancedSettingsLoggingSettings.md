# GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings

Define behaviors on logging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_interaction_logging** | **bool** | If true, DF Interaction logging is currently enabled. | [optional] 
**enable_stackdriver_logging** | **bool** | If true, StackDriver logging is currently enabled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_advanced_settings_logging_settings import GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_advanced_settings_logging_settings_instance = GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_advanced_settings_logging_settings_dict = google_cloud_dialogflow_cx_v3beta1_advanced_settings_logging_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings from a dict
google_cloud_dialogflow_cx_v3beta1_advanced_settings_logging_settings_from_dict = GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_advanced_settings_logging_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


