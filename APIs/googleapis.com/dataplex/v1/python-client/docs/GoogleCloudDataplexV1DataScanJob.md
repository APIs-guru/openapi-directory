# GoogleCloudDataplexV1DataScanJob

A DataScanJob represents an instance of DataScan execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_profile_result** | [**GoogleCloudDataplexV1DataProfileResult**](GoogleCloudDataplexV1DataProfileResult.md) |  | [optional] 
**data_profile_spec** | [**GoogleCloudDataplexV1DataProfileSpec**](GoogleCloudDataplexV1DataProfileSpec.md) |  | [optional] 
**data_quality_result** | [**GoogleCloudDataplexV1DataQualityResult**](GoogleCloudDataplexV1DataQualityResult.md) |  | [optional] 
**data_quality_spec** | [**GoogleCloudDataplexV1DataQualitySpec**](GoogleCloudDataplexV1DataQualitySpec.md) |  | [optional] 
**end_time** | **str** | Output only. The time when the DataScanJob ended. | [optional] [readonly] 
**message** | **str** | Output only. Additional information about the current state. | [optional] [readonly] 
**name** | **str** | Output only. The relative resource name of the DataScanJob, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}/jobs/{job_id}, where project refers to a project_id or project_number and location_id refers to a GCP region. | [optional] [readonly] 
**start_time** | **str** | Output only. The time when the DataScanJob was started. | [optional] [readonly] 
**state** | **str** | Output only. Execution state for the DataScanJob. | [optional] [readonly] 
**type** | **str** | Output only. The type of the parent DataScan. | [optional] [readonly] 
**uid** | **str** | Output only. System generated globally unique ID for the DataScanJob. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_scan_job import GoogleCloudDataplexV1DataScanJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataScanJob from a JSON string
google_cloud_dataplex_v1_data_scan_job_instance = GoogleCloudDataplexV1DataScanJob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataScanJob.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_scan_job_dict = google_cloud_dataplex_v1_data_scan_job_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataScanJob from a dict
google_cloud_dataplex_v1_data_scan_job_from_dict = GoogleCloudDataplexV1DataScanJob.from_dict(google_cloud_dataplex_v1_data_scan_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


