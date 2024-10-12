# GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult

The result of BigQuery export post scan action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Output only. Additional information about the BigQuery exporting. | [optional] [readonly] 
**state** | **str** | Output only. Execution state for the BigQuery exporting. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_result_post_scan_actions_result_big_query_export_result import GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult from a JSON string
google_cloud_dataplex_v1_data_profile_result_post_scan_actions_result_big_query_export_result_instance = GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_result_post_scan_actions_result_big_query_export_result_dict = google_cloud_dataplex_v1_data_profile_result_post_scan_actions_result_big_query_export_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult from a dict
google_cloud_dataplex_v1_data_profile_result_post_scan_actions_result_big_query_export_result_from_dict = GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult.from_dict(google_cloud_dataplex_v1_data_profile_result_post_scan_actions_result_big_query_export_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


