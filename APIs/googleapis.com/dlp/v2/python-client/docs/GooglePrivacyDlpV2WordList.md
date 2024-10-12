# GooglePrivacyDlpV2WordList

Message defining a list of words or phrases to search for in the data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**words** | **List[str]** | Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required] | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_word_list import GooglePrivacyDlpV2WordList

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2WordList from a JSON string
google_privacy_dlp_v2_word_list_instance = GooglePrivacyDlpV2WordList.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2WordList.to_json())

# convert the object into a dict
google_privacy_dlp_v2_word_list_dict = google_privacy_dlp_v2_word_list_instance.to_dict()
# create an instance of GooglePrivacyDlpV2WordList from a dict
google_privacy_dlp_v2_word_list_from_dict = GooglePrivacyDlpV2WordList.from_dict(google_privacy_dlp_v2_word_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


