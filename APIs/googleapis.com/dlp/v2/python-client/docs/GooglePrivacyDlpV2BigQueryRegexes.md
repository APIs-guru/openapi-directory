# GooglePrivacyDlpV2BigQueryRegexes

A collection of regular expressions to determine what tables to match against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patterns** | [**List[GooglePrivacyDlpV2BigQueryRegex]**](GooglePrivacyDlpV2BigQueryRegex.md) | A single BigQuery regular expression pattern to match against one or more tables, datasets, or projects that contain BigQuery tables. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_big_query_regexes import GooglePrivacyDlpV2BigQueryRegexes

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BigQueryRegexes from a JSON string
google_privacy_dlp_v2_big_query_regexes_instance = GooglePrivacyDlpV2BigQueryRegexes.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BigQueryRegexes.to_json())

# convert the object into a dict
google_privacy_dlp_v2_big_query_regexes_dict = google_privacy_dlp_v2_big_query_regexes_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BigQueryRegexes from a dict
google_privacy_dlp_v2_big_query_regexes_from_dict = GooglePrivacyDlpV2BigQueryRegexes.from_dict(google_privacy_dlp_v2_big_query_regexes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


