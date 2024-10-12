# GoogleCloudChannelV1RunReportJobResponse

Response message for CloudChannelReportsService.RunReportJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_job** | [**GoogleCloudChannelV1ReportJob**](GoogleCloudChannelV1ReportJob.md) |  | [optional] 
**report_metadata** | [**GoogleCloudChannelV1ReportResultsMetadata**](GoogleCloudChannelV1ReportResultsMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_run_report_job_response import GoogleCloudChannelV1RunReportJobResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1RunReportJobResponse from a JSON string
google_cloud_channel_v1_run_report_job_response_instance = GoogleCloudChannelV1RunReportJobResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1RunReportJobResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_run_report_job_response_dict = google_cloud_channel_v1_run_report_job_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1RunReportJobResponse from a dict
google_cloud_channel_v1_run_report_job_response_from_dict = GoogleCloudChannelV1RunReportJobResponse.from_dict(google_cloud_channel_v1_run_report_job_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


