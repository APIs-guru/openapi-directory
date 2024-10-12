# GooglePrivacyDlpV2ReplaceDictionaryConfig

Replace each input value with a value randomly selected from the dictionary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**word_list** | [**GooglePrivacyDlpV2WordList**](GooglePrivacyDlpV2WordList.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_replace_dictionary_config import GooglePrivacyDlpV2ReplaceDictionaryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ReplaceDictionaryConfig from a JSON string
google_privacy_dlp_v2_replace_dictionary_config_instance = GooglePrivacyDlpV2ReplaceDictionaryConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ReplaceDictionaryConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_replace_dictionary_config_dict = google_privacy_dlp_v2_replace_dictionary_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ReplaceDictionaryConfig from a dict
google_privacy_dlp_v2_replace_dictionary_config_from_dict = GooglePrivacyDlpV2ReplaceDictionaryConfig.from_dict(google_privacy_dlp_v2_replace_dictionary_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


