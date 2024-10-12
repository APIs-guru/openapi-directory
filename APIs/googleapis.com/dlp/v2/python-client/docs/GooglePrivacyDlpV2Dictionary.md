# GooglePrivacyDlpV2Dictionary

Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase \"Sam Johnson\" will match all three phrases \"sam johnson\", \"Sam, Johnson\", and \"Sam (Johnson)\". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word \"jen\" will match the first three letters of the text \"jen123\" but will return no matches for \"jennifer\". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/sensitive-data-protection/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_storage_path** | [**GooglePrivacyDlpV2CloudStoragePath**](GooglePrivacyDlpV2CloudStoragePath.md) |  | [optional] 
**word_list** | [**GooglePrivacyDlpV2WordList**](GooglePrivacyDlpV2WordList.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_dictionary import GooglePrivacyDlpV2Dictionary

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Dictionary from a JSON string
google_privacy_dlp_v2_dictionary_instance = GooglePrivacyDlpV2Dictionary.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Dictionary.to_json())

# convert the object into a dict
google_privacy_dlp_v2_dictionary_dict = google_privacy_dlp_v2_dictionary_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Dictionary from a dict
google_privacy_dlp_v2_dictionary_from_dict = GooglePrivacyDlpV2Dictionary.from_dict(google_privacy_dlp_v2_dictionary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


