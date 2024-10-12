# GooglePrivacyDlpV2DataProfileBigQueryRowSchema

The schema of data to be saved to the BigQuery table when the `DataProfileAction` is enabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_profile** | [**GooglePrivacyDlpV2ColumnDataProfile**](GooglePrivacyDlpV2ColumnDataProfile.md) |  | [optional] 
**table_profile** | [**GooglePrivacyDlpV2TableDataProfile**](GooglePrivacyDlpV2TableDataProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_data_profile_big_query_row_schema import GooglePrivacyDlpV2DataProfileBigQueryRowSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DataProfileBigQueryRowSchema from a JSON string
google_privacy_dlp_v2_data_profile_big_query_row_schema_instance = GooglePrivacyDlpV2DataProfileBigQueryRowSchema.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DataProfileBigQueryRowSchema.to_json())

# convert the object into a dict
google_privacy_dlp_v2_data_profile_big_query_row_schema_dict = google_privacy_dlp_v2_data_profile_big_query_row_schema_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DataProfileBigQueryRowSchema from a dict
google_privacy_dlp_v2_data_profile_big_query_row_schema_from_dict = GooglePrivacyDlpV2DataProfileBigQueryRowSchema.from_dict(google_privacy_dlp_v2_data_profile_big_query_row_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


