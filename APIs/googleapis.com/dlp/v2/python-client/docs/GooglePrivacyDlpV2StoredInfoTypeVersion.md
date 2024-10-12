# GooglePrivacyDlpV2StoredInfoTypeVersion

Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**GooglePrivacyDlpV2StoredInfoTypeConfig**](GooglePrivacyDlpV2StoredInfoTypeConfig.md) |  | [optional] 
**create_time** | **str** | Create timestamp of the version. Read-only, determined by the system when the version is created. | [optional] 
**errors** | [**List[GooglePrivacyDlpV2Error]**](GooglePrivacyDlpV2Error.md) | Errors that occurred when creating this storedInfoType version, or anomalies detected in the storedInfoType data that render it unusable. Only the five most recent errors will be displayed, with the most recent error appearing first. For example, some of the data for stored custom dictionaries is put in the user&#39;s Cloud Storage bucket, and if this data is modified or deleted by the user or another system, the dictionary becomes invalid. If any errors occur, fix the problem indicated by the error message and use the UpdateStoredInfoType API method to create another version of the storedInfoType to continue using it, reusing the same &#x60;config&#x60; if it was not the source of the error. | [optional] 
**state** | **str** | Stored info type version state. Read-only, updated by the system during dictionary creation. | [optional] 
**stats** | [**GooglePrivacyDlpV2StoredInfoTypeStats**](GooglePrivacyDlpV2StoredInfoTypeStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_stored_info_type_version import GooglePrivacyDlpV2StoredInfoTypeVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2StoredInfoTypeVersion from a JSON string
google_privacy_dlp_v2_stored_info_type_version_instance = GooglePrivacyDlpV2StoredInfoTypeVersion.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2StoredInfoTypeVersion.to_json())

# convert the object into a dict
google_privacy_dlp_v2_stored_info_type_version_dict = google_privacy_dlp_v2_stored_info_type_version_instance.to_dict()
# create an instance of GooglePrivacyDlpV2StoredInfoTypeVersion from a dict
google_privacy_dlp_v2_stored_info_type_version_from_dict = GooglePrivacyDlpV2StoredInfoTypeVersion.from_dict(google_privacy_dlp_v2_stored_info_type_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


