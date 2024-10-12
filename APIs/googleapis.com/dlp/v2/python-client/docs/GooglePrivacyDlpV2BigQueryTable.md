# GooglePrivacyDlpV2BigQueryTable

Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | Dataset ID of the table. | [optional] 
**project_id** | **str** | The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call. | [optional] 
**table_id** | **str** | Name of the table. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_big_query_table import GooglePrivacyDlpV2BigQueryTable

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BigQueryTable from a JSON string
google_privacy_dlp_v2_big_query_table_instance = GooglePrivacyDlpV2BigQueryTable.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BigQueryTable.to_json())

# convert the object into a dict
google_privacy_dlp_v2_big_query_table_dict = google_privacy_dlp_v2_big_query_table_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BigQueryTable from a dict
google_privacy_dlp_v2_big_query_table_from_dict = GooglePrivacyDlpV2BigQueryTable.from_dict(google_privacy_dlp_v2_big_query_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


