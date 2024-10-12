# GooglePrivacyDlpV2StoredType

A reference to a StoredInfoType to use with scanning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Timestamp indicating when the version of the &#x60;StoredInfoType&#x60; used for inspection was created. Output-only field, populated by the system. | [optional] 
**name** | **str** | Resource name of the requested &#x60;StoredInfoType&#x60;, for example &#x60;organizations/433245324/storedInfoTypes/432452342&#x60; or &#x60;projects/project-id/storedInfoTypes/432452342&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_stored_type import GooglePrivacyDlpV2StoredType

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2StoredType from a JSON string
google_privacy_dlp_v2_stored_type_instance = GooglePrivacyDlpV2StoredType.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2StoredType.to_json())

# convert the object into a dict
google_privacy_dlp_v2_stored_type_dict = google_privacy_dlp_v2_stored_type_instance.to_dict()
# create an instance of GooglePrivacyDlpV2StoredType from a dict
google_privacy_dlp_v2_stored_type_from_dict = GooglePrivacyDlpV2StoredType.from_dict(google_privacy_dlp_v2_stored_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


