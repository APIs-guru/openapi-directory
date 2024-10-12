# GooglePrivacyDlpV2InfoTypeStats

Statistics regarding a specific InfoType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Number of findings for this infoType. | [optional] 
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_info_type_stats import GooglePrivacyDlpV2InfoTypeStats

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InfoTypeStats from a JSON string
google_privacy_dlp_v2_info_type_stats_instance = GooglePrivacyDlpV2InfoTypeStats.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InfoTypeStats.to_json())

# convert the object into a dict
google_privacy_dlp_v2_info_type_stats_dict = google_privacy_dlp_v2_info_type_stats_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InfoTypeStats from a dict
google_privacy_dlp_v2_info_type_stats_from_dict = GooglePrivacyDlpV2InfoTypeStats.from_dict(google_privacy_dlp_v2_info_type_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


