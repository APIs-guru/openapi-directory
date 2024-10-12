# GooglePrivacyDlpV2StoredInfoTypeStats

Statistics for a StoredInfoType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**large_custom_dictionary** | [**GooglePrivacyDlpV2LargeCustomDictionaryStats**](GooglePrivacyDlpV2LargeCustomDictionaryStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_stored_info_type_stats import GooglePrivacyDlpV2StoredInfoTypeStats

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2StoredInfoTypeStats from a JSON string
google_privacy_dlp_v2_stored_info_type_stats_instance = GooglePrivacyDlpV2StoredInfoTypeStats.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2StoredInfoTypeStats.to_json())

# convert the object into a dict
google_privacy_dlp_v2_stored_info_type_stats_dict = google_privacy_dlp_v2_stored_info_type_stats_instance.to_dict()
# create an instance of GooglePrivacyDlpV2StoredInfoTypeStats from a dict
google_privacy_dlp_v2_stored_info_type_stats_from_dict = GooglePrivacyDlpV2StoredInfoTypeStats.from_dict(google_privacy_dlp_v2_stored_info_type_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


