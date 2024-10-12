# GooglePrivacyDlpV2InfoTypeLimit

Max findings configuration per infoType, per content item or long running DlpJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 
**max_findings** | **int** | Max findings limit for the given infoType. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_info_type_limit import GooglePrivacyDlpV2InfoTypeLimit

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InfoTypeLimit from a JSON string
google_privacy_dlp_v2_info_type_limit_instance = GooglePrivacyDlpV2InfoTypeLimit.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InfoTypeLimit.to_json())

# convert the object into a dict
google_privacy_dlp_v2_info_type_limit_dict = google_privacy_dlp_v2_info_type_limit_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InfoTypeLimit from a dict
google_privacy_dlp_v2_info_type_limit_from_dict = GooglePrivacyDlpV2InfoTypeLimit.from_dict(google_privacy_dlp_v2_info_type_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


