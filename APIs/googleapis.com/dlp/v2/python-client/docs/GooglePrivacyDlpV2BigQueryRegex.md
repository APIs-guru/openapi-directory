# GooglePrivacyDlpV2BigQueryRegex

A pattern to match against one or more tables, datasets, or projects that contain BigQuery tables. At least one pattern must be specified. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id_regex** | **str** | If unset, this property matches all datasets. | [optional] 
**project_id_regex** | **str** | For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project. | [optional] 
**table_id_regex** | **str** | If unset, this property matches all tables. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_big_query_regex import GooglePrivacyDlpV2BigQueryRegex

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BigQueryRegex from a JSON string
google_privacy_dlp_v2_big_query_regex_instance = GooglePrivacyDlpV2BigQueryRegex.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BigQueryRegex.to_json())

# convert the object into a dict
google_privacy_dlp_v2_big_query_regex_dict = google_privacy_dlp_v2_big_query_regex_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BigQueryRegex from a dict
google_privacy_dlp_v2_big_query_regex_from_dict = GooglePrivacyDlpV2BigQueryRegex.from_dict(google_privacy_dlp_v2_big_query_regex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


