# GoogleCloudDialogflowCxV3beta1SafetySettings

Settings for Generative Safety.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banned_phrases** | [**List[GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase]**](GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase.md) | Banned phrases for generated text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_safety_settings import GoogleCloudDialogflowCxV3beta1SafetySettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1SafetySettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_safety_settings_instance = GoogleCloudDialogflowCxV3beta1SafetySettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1SafetySettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_safety_settings_dict = google_cloud_dialogflow_cx_v3beta1_safety_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1SafetySettings from a dict
google_cloud_dialogflow_cx_v3beta1_safety_settings_from_dict = GoogleCloudDialogflowCxV3beta1SafetySettings.from_dict(google_cloud_dialogflow_cx_v3beta1_safety_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


