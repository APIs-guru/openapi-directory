# GoogleCloudDataplexV1DataScanEventPostScanActionsResult

Post scan actions result for data scan job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_export_result** | [**GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult**](GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_scan_event_post_scan_actions_result import GoogleCloudDataplexV1DataScanEventPostScanActionsResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataScanEventPostScanActionsResult from a JSON string
google_cloud_dataplex_v1_data_scan_event_post_scan_actions_result_instance = GoogleCloudDataplexV1DataScanEventPostScanActionsResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataScanEventPostScanActionsResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_scan_event_post_scan_actions_result_dict = google_cloud_dataplex_v1_data_scan_event_post_scan_actions_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataScanEventPostScanActionsResult from a dict
google_cloud_dataplex_v1_data_scan_event_post_scan_actions_result_from_dict = GoogleCloudDataplexV1DataScanEventPostScanActionsResult.from_dict(google_cloud_dataplex_v1_data_scan_event_post_scan_actions_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


