# GoogleCloudDialogflowCxV3SafetySettings

Settings for Generative Safety.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banned_phrases** | [**List[GoogleCloudDialogflowCxV3SafetySettingsPhrase]**](GoogleCloudDialogflowCxV3SafetySettingsPhrase.md) | Banned phrases for generated text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_safety_settings import GoogleCloudDialogflowCxV3SafetySettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3SafetySettings from a JSON string
google_cloud_dialogflow_cx_v3_safety_settings_instance = GoogleCloudDialogflowCxV3SafetySettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3SafetySettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_safety_settings_dict = google_cloud_dialogflow_cx_v3_safety_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3SafetySettings from a dict
google_cloud_dialogflow_cx_v3_safety_settings_from_dict = GoogleCloudDialogflowCxV3SafetySettings.from_dict(google_cloud_dialogflow_cx_v3_safety_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


