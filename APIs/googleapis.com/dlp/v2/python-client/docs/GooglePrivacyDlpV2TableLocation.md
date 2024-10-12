# GooglePrivacyDlpV2TableLocation

Location of a finding within a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_index** | **str** | The zero-based index of the row where the finding is located. Only populated for resources that have a natural ordering, not BigQuery. In BigQuery, to identify the row a finding came from, populate BigQueryOptions.identifying_fields with your primary key column names and when you store the findings the value of those columns will be stored inside of Finding. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_table_location import GooglePrivacyDlpV2TableLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TableLocation from a JSON string
google_privacy_dlp_v2_table_location_instance = GooglePrivacyDlpV2TableLocation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TableLocation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_table_location_dict = google_privacy_dlp_v2_table_location_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TableLocation from a dict
google_privacy_dlp_v2_table_location_from_dict = GooglePrivacyDlpV2TableLocation.from_dict(google_privacy_dlp_v2_table_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


