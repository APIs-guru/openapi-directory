# GooglePrivacyDlpV2StoredInfoTypeConfig

Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the StoredInfoType (max 256 characters). | [optional] 
**dictionary** | [**GooglePrivacyDlpV2Dictionary**](GooglePrivacyDlpV2Dictionary.md) |  | [optional] 
**display_name** | **str** | Display name of the StoredInfoType (max 256 characters). | [optional] 
**large_custom_dictionary** | [**GooglePrivacyDlpV2LargeCustomDictionaryConfig**](GooglePrivacyDlpV2LargeCustomDictionaryConfig.md) |  | [optional] 
**regex** | [**GooglePrivacyDlpV2Regex**](GooglePrivacyDlpV2Regex.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_stored_info_type_config import GooglePrivacyDlpV2StoredInfoTypeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2StoredInfoTypeConfig from a JSON string
google_privacy_dlp_v2_stored_info_type_config_instance = GooglePrivacyDlpV2StoredInfoTypeConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2StoredInfoTypeConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_stored_info_type_config_dict = google_privacy_dlp_v2_stored_info_type_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2StoredInfoTypeConfig from a dict
google_privacy_dlp_v2_stored_info_type_config_from_dict = GooglePrivacyDlpV2StoredInfoTypeConfig.from_dict(google_privacy_dlp_v2_stored_info_type_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


