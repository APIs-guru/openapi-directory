# GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings

Define behaviors for DTMF (dual tone multi frequency).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a \&quot;3\&quot; was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance). | [optional] 
**finish_digit** | **str** | The digit that terminates a DTMF digit sequence. | [optional] 
**max_digits** | **int** | Max length of DTMF digits. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_advanced_settings_dtmf_settings import GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_advanced_settings_dtmf_settings_instance = GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_advanced_settings_dtmf_settings_dict = google_cloud_dialogflow_cx_v3beta1_advanced_settings_dtmf_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings from a dict
google_cloud_dialogflow_cx_v3beta1_advanced_settings_dtmf_settings_from_dict = GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_advanced_settings_dtmf_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


