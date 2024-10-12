# GoogleCloudDialogflowCxV3SafetySettingsPhrase

Text input which can be used for prompt or banned phrases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Required. Language code of the phrase. | [optional] 
**text** | **str** | Required. Text input which can be used for prompt or banned phrases. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_safety_settings_phrase import GoogleCloudDialogflowCxV3SafetySettingsPhrase

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3SafetySettingsPhrase from a JSON string
google_cloud_dialogflow_cx_v3_safety_settings_phrase_instance = GoogleCloudDialogflowCxV3SafetySettingsPhrase.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3SafetySettingsPhrase.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_safety_settings_phrase_dict = google_cloud_dialogflow_cx_v3_safety_settings_phrase_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3SafetySettingsPhrase from a dict
google_cloud_dialogflow_cx_v3_safety_settings_phrase_from_dict = GoogleCloudDialogflowCxV3SafetySettingsPhrase.from_dict(google_cloud_dialogflow_cx_v3_safety_settings_phrase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


