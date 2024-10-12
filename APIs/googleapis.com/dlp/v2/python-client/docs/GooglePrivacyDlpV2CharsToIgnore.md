# GooglePrivacyDlpV2CharsToIgnore

Characters to skip when doing deidentification of a value. These will be left alone and skipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**characters_to_skip** | **str** | Characters to not transform when masking. | [optional] 
**common_characters_to_ignore** | **str** | Common characters to not transform when masking. Useful to avoid removing punctuation. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_chars_to_ignore import GooglePrivacyDlpV2CharsToIgnore

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CharsToIgnore from a JSON string
google_privacy_dlp_v2_chars_to_ignore_instance = GooglePrivacyDlpV2CharsToIgnore.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CharsToIgnore.to_json())

# convert the object into a dict
google_privacy_dlp_v2_chars_to_ignore_dict = google_privacy_dlp_v2_chars_to_ignore_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CharsToIgnore from a dict
google_privacy_dlp_v2_chars_to_ignore_from_dict = GooglePrivacyDlpV2CharsToIgnore.from_dict(google_privacy_dlp_v2_chars_to_ignore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


