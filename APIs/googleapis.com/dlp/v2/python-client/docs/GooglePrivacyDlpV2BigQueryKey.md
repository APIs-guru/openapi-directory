# GooglePrivacyDlpV2BigQueryKey

Row key for identifying a record in BigQuery table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_number** | **str** | Row number inferred at the time the table was scanned. This value is nondeterministic, cannot be queried, and may be null for inspection jobs. To locate findings within a table, specify &#x60;inspect_job.storage_config.big_query_options.identifying_fields&#x60; in &#x60;CreateDlpJobRequest&#x60;. | [optional] 
**table_reference** | [**GooglePrivacyDlpV2BigQueryTable**](GooglePrivacyDlpV2BigQueryTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_big_query_key import GooglePrivacyDlpV2BigQueryKey

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BigQueryKey from a JSON string
google_privacy_dlp_v2_big_query_key_instance = GooglePrivacyDlpV2BigQueryKey.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BigQueryKey.to_json())

# convert the object into a dict
google_privacy_dlp_v2_big_query_key_dict = google_privacy_dlp_v2_big_query_key_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BigQueryKey from a dict
google_privacy_dlp_v2_big_query_key_from_dict = GooglePrivacyDlpV2BigQueryKey.from_dict(google_privacy_dlp_v2_big_query_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


