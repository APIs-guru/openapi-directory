# GooglePrivacyDlpV2Range

Generic half-open interval [start, end)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | Index of the last character of the range (exclusive). | [optional] 
**start** | **str** | Index of the first character of the range (inclusive). | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_range import GooglePrivacyDlpV2Range

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Range from a JSON string
google_privacy_dlp_v2_range_instance = GooglePrivacyDlpV2Range.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Range.to_json())

# convert the object into a dict
google_privacy_dlp_v2_range_dict = google_privacy_dlp_v2_range_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Range from a dict
google_privacy_dlp_v2_range_from_dict = GooglePrivacyDlpV2Range.from_dict(google_privacy_dlp_v2_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


