# GoogleCloudDataplexV1DataScanExecutionStatus

Status of the data scan execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latest_job_end_time** | **str** | The time when the latest DataScanJob ended. | [optional] 
**latest_job_start_time** | **str** | The time when the latest DataScanJob started. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_scan_execution_status import GoogleCloudDataplexV1DataScanExecutionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataScanExecutionStatus from a JSON string
google_cloud_dataplex_v1_data_scan_execution_status_instance = GoogleCloudDataplexV1DataScanExecutionStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataScanExecutionStatus.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_scan_execution_status_dict = google_cloud_dataplex_v1_data_scan_execution_status_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataScanExecutionStatus from a dict
google_cloud_dataplex_v1_data_scan_execution_status_from_dict = GoogleCloudDataplexV1DataScanExecutionStatus.from_dict(google_cloud_dataplex_v1_data_scan_execution_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


