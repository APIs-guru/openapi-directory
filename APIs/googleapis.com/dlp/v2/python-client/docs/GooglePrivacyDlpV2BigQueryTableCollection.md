# GooglePrivacyDlpV2BigQueryTableCollection

Specifies a collection of BigQuery tables. Used for Discovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_regexes** | [**GooglePrivacyDlpV2BigQueryRegexes**](GooglePrivacyDlpV2BigQueryRegexes.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_big_query_table_collection import GooglePrivacyDlpV2BigQueryTableCollection

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BigQueryTableCollection from a JSON string
google_privacy_dlp_v2_big_query_table_collection_instance = GooglePrivacyDlpV2BigQueryTableCollection.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BigQueryTableCollection.to_json())

# convert the object into a dict
google_privacy_dlp_v2_big_query_table_collection_dict = google_privacy_dlp_v2_big_query_table_collection_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BigQueryTableCollection from a dict
google_privacy_dlp_v2_big_query_table_collection_from_dict = GooglePrivacyDlpV2BigQueryTableCollection.from_dict(google_privacy_dlp_v2_big_query_table_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


