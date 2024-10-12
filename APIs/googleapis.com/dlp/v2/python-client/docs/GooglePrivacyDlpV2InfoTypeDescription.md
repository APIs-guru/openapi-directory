# GooglePrivacyDlpV2InfoTypeDescription

InfoType description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[GooglePrivacyDlpV2InfoTypeCategory]**](GooglePrivacyDlpV2InfoTypeCategory.md) | The category of the infoType. | [optional] 
**description** | **str** | Description of the infotype. Translated when language is provided in the request. | [optional] 
**display_name** | **str** | Human readable form of the infoType name. | [optional] 
**name** | **str** | Internal name of the infoType. | [optional] 
**sensitivity_score** | [**GooglePrivacyDlpV2SensitivityScore**](GooglePrivacyDlpV2SensitivityScore.md) |  | [optional] 
**supported_by** | **List[str]** | Which parts of the API supports this InfoType. | [optional] 
**versions** | [**List[GooglePrivacyDlpV2VersionDescription]**](GooglePrivacyDlpV2VersionDescription.md) | A list of available versions for the infotype. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_info_type_description import GooglePrivacyDlpV2InfoTypeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InfoTypeDescription from a JSON string
google_privacy_dlp_v2_info_type_description_instance = GooglePrivacyDlpV2InfoTypeDescription.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InfoTypeDescription.to_json())

# convert the object into a dict
google_privacy_dlp_v2_info_type_description_dict = google_privacy_dlp_v2_info_type_description_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InfoTypeDescription from a dict
google_privacy_dlp_v2_info_type_description_from_dict = GooglePrivacyDlpV2InfoTypeDescription.from_dict(google_privacy_dlp_v2_info_type_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


