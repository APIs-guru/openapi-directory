# GooglePrivacyDlpV2VersionDescription

Details about each available version for an infotype.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the version. | [optional] 
**version** | **str** | Name of the version | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_version_description import GooglePrivacyDlpV2VersionDescription

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2VersionDescription from a JSON string
google_privacy_dlp_v2_version_description_instance = GooglePrivacyDlpV2VersionDescription.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2VersionDescription.to_json())

# convert the object into a dict
google_privacy_dlp_v2_version_description_dict = google_privacy_dlp_v2_version_description_instance.to_dict()
# create an instance of GooglePrivacyDlpV2VersionDescription from a dict
google_privacy_dlp_v2_version_description_from_dict = GooglePrivacyDlpV2VersionDescription.from_dict(google_privacy_dlp_v2_version_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


