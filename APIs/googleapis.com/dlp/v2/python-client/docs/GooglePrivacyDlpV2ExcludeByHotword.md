# GooglePrivacyDlpV2ExcludeByHotword

The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hotword_regex** | [**GooglePrivacyDlpV2Regex**](GooglePrivacyDlpV2Regex.md) |  | [optional] 
**proximity** | [**GooglePrivacyDlpV2Proximity**](GooglePrivacyDlpV2Proximity.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_exclude_by_hotword import GooglePrivacyDlpV2ExcludeByHotword

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ExcludeByHotword from a JSON string
google_privacy_dlp_v2_exclude_by_hotword_instance = GooglePrivacyDlpV2ExcludeByHotword.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ExcludeByHotword.to_json())

# convert the object into a dict
google_privacy_dlp_v2_exclude_by_hotword_dict = google_privacy_dlp_v2_exclude_by_hotword_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ExcludeByHotword from a dict
google_privacy_dlp_v2_exclude_by_hotword_from_dict = GooglePrivacyDlpV2ExcludeByHotword.from_dict(google_privacy_dlp_v2_exclude_by_hotword_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


