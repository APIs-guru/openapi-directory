# GooglePrivacyDlpV2StoredInfoType

StoredInfoType resource message that contains information about the current version and any pending updates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_version** | [**GooglePrivacyDlpV2StoredInfoTypeVersion**](GooglePrivacyDlpV2StoredInfoTypeVersion.md) |  | [optional] 
**name** | **str** | Resource name. | [optional] 
**pending_versions** | [**List[GooglePrivacyDlpV2StoredInfoTypeVersion]**](GooglePrivacyDlpV2StoredInfoTypeVersion.md) | Pending versions of the stored info type. Empty if no versions are pending. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_stored_info_type import GooglePrivacyDlpV2StoredInfoType

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2StoredInfoType from a JSON string
google_privacy_dlp_v2_stored_info_type_instance = GooglePrivacyDlpV2StoredInfoType.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2StoredInfoType.to_json())

# convert the object into a dict
google_privacy_dlp_v2_stored_info_type_dict = google_privacy_dlp_v2_stored_info_type_instance.to_dict()
# create an instance of GooglePrivacyDlpV2StoredInfoType from a dict
google_privacy_dlp_v2_stored_info_type_from_dict = GooglePrivacyDlpV2StoredInfoType.from_dict(google_privacy_dlp_v2_stored_info_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


