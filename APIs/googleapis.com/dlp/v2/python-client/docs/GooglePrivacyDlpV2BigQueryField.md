# GooglePrivacyDlpV2BigQueryField

Message defining a field of a BigQuery table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 
**table** | [**GooglePrivacyDlpV2BigQueryTable**](GooglePrivacyDlpV2BigQueryTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_big_query_field import GooglePrivacyDlpV2BigQueryField

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BigQueryField from a JSON string
google_privacy_dlp_v2_big_query_field_instance = GooglePrivacyDlpV2BigQueryField.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BigQueryField.to_json())

# convert the object into a dict
google_privacy_dlp_v2_big_query_field_dict = google_privacy_dlp_v2_big_query_field_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BigQueryField from a dict
google_privacy_dlp_v2_big_query_field_from_dict = GooglePrivacyDlpV2BigQueryField.from_dict(google_privacy_dlp_v2_big_query_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


