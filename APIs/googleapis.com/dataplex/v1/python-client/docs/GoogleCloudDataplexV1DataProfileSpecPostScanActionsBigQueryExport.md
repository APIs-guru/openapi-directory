# GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport

The configuration of BigQuery export post scan action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results_table** | **str** | Optional. The BigQuery table to export DataProfileScan results to. Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_spec_post_scan_actions_big_query_export import GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport from a JSON string
google_cloud_dataplex_v1_data_profile_spec_post_scan_actions_big_query_export_instance = GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_spec_post_scan_actions_big_query_export_dict = google_cloud_dataplex_v1_data_profile_spec_post_scan_actions_big_query_export_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport from a dict
google_cloud_dataplex_v1_data_profile_spec_post_scan_actions_big_query_export_from_dict = GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport.from_dict(google_cloud_dataplex_v1_data_profile_spec_post_scan_actions_big_query_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


