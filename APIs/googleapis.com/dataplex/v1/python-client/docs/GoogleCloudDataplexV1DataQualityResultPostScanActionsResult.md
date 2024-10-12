# GoogleCloudDataplexV1DataQualityResultPostScanActionsResult

The result of post scan actions of DataQualityScan job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_export_result** | [**GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult**](GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_result_post_scan_actions_result import GoogleCloudDataplexV1DataQualityResultPostScanActionsResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityResultPostScanActionsResult from a JSON string
google_cloud_dataplex_v1_data_quality_result_post_scan_actions_result_instance = GoogleCloudDataplexV1DataQualityResultPostScanActionsResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityResultPostScanActionsResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_result_post_scan_actions_result_dict = google_cloud_dataplex_v1_data_quality_result_post_scan_actions_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityResultPostScanActionsResult from a dict
google_cloud_dataplex_v1_data_quality_result_post_scan_actions_result_from_dict = GoogleCloudDataplexV1DataQualityResultPostScanActionsResult.from_dict(google_cloud_dataplex_v1_data_quality_result_post_scan_actions_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


