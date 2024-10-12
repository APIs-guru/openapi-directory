# GooglePrivacyDlpV2ProfileStatus

Success or errors for the profile generation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**timestamp** | **str** | Time when the profile generation status was updated | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_profile_status import GooglePrivacyDlpV2ProfileStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ProfileStatus from a JSON string
google_privacy_dlp_v2_profile_status_instance = GooglePrivacyDlpV2ProfileStatus.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ProfileStatus.to_json())

# convert the object into a dict
google_privacy_dlp_v2_profile_status_dict = google_privacy_dlp_v2_profile_status_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ProfileStatus from a dict
google_privacy_dlp_v2_profile_status_from_dict = GooglePrivacyDlpV2ProfileStatus.from_dict(google_privacy_dlp_v2_profile_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


