# GooglePrivacyDlpV2BigQueryOptions

Options defining BigQuery table and row identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_fields** | [**List[GooglePrivacyDlpV2FieldId]**](GooglePrivacyDlpV2FieldId.md) | References to fields excluded from scanning. This allows you to skip inspection of entire columns which you know have no findings. When inspecting a table, we recommend that you inspect all columns. Otherwise, findings might be affected because hints from excluded columns will not be used. | [optional] 
**identifying_fields** | [**List[GooglePrivacyDlpV2FieldId]**](GooglePrivacyDlpV2FieldId.md) | Table fields that may uniquely identify a row within the table. When &#x60;actions.saveFindings.outputConfig.table&#x60; is specified, the values of columns specified here are available in the output table under &#x60;location.content_locations.record_location.record_key.id_values&#x60;. Nested fields such as &#x60;person.birthdate.year&#x60; are allowed. | [optional] 
**included_fields** | [**List[GooglePrivacyDlpV2FieldId]**](GooglePrivacyDlpV2FieldId.md) | Limit scanning only to these fields. When inspecting a table, we recommend that you inspect all columns. Otherwise, findings might be affected because hints from excluded columns will not be used. | [optional] 
**rows_limit** | **str** | Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig. | [optional] 
**rows_limit_percent** | **int** | Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig. Caution: A [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#bq-sampling) is causing the &#x60;rowsLimitPercent&#x60; field to behave unexpectedly. We recommend using &#x60;rowsLimit&#x60; instead. | [optional] 
**sample_method** | **str** | How to sample the data. | [optional] 
**table_reference** | [**GooglePrivacyDlpV2BigQueryTable**](GooglePrivacyDlpV2BigQueryTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_big_query_options import GooglePrivacyDlpV2BigQueryOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BigQueryOptions from a JSON string
google_privacy_dlp_v2_big_query_options_instance = GooglePrivacyDlpV2BigQueryOptions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BigQueryOptions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_big_query_options_dict = google_privacy_dlp_v2_big_query_options_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BigQueryOptions from a dict
google_privacy_dlp_v2_big_query_options_from_dict = GooglePrivacyDlpV2BigQueryOptions.from_dict(google_privacy_dlp_v2_big_query_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


