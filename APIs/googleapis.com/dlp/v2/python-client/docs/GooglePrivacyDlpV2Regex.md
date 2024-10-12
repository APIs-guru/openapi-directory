# GooglePrivacyDlpV2Regex

Message defining a custom regular expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_indexes** | **List[int]** | The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. | [optional] 
**pattern** | **str** | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_regex import GooglePrivacyDlpV2Regex

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Regex from a JSON string
google_privacy_dlp_v2_regex_instance = GooglePrivacyDlpV2Regex.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Regex.to_json())

# convert the object into a dict
google_privacy_dlp_v2_regex_dict = google_privacy_dlp_v2_regex_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Regex from a dict
google_privacy_dlp_v2_regex_from_dict = GooglePrivacyDlpV2Regex.from_dict(google_privacy_dlp_v2_regex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


