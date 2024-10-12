# GoogleCloudChannelV1alpha1RunReportJobResponse

Response message for CloudChannelReportsService.RunReportJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_job** | [**GoogleCloudChannelV1alpha1ReportJob**](GoogleCloudChannelV1alpha1ReportJob.md) |  | [optional] 
**report_metadata** | [**GoogleCloudChannelV1alpha1ReportResultsMetadata**](GoogleCloudChannelV1alpha1ReportResultsMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_run_report_job_response import GoogleCloudChannelV1alpha1RunReportJobResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1RunReportJobResponse from a JSON string
google_cloud_channel_v1alpha1_run_report_job_response_instance = GoogleCloudChannelV1alpha1RunReportJobResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1RunReportJobResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_run_report_job_response_dict = google_cloud_channel_v1alpha1_run_report_job_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1RunReportJobResponse from a dict
google_cloud_channel_v1alpha1_run_report_job_response_from_dict = GoogleCloudChannelV1alpha1RunReportJobResponse.from_dict(google_cloud_channel_v1alpha1_run_report_job_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


