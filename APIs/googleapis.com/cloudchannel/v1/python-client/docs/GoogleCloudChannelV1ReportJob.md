# GoogleCloudChannelV1ReportJob

The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The resource name of a report job. Name uses the format: &#x60;accounts/{account_id}/reportJobs/{report_job_id}&#x60; | [optional] 
**report_status** | [**GoogleCloudChannelV1ReportStatus**](GoogleCloudChannelV1ReportStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_report_job import GoogleCloudChannelV1ReportJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ReportJob from a JSON string
google_cloud_channel_v1_report_job_instance = GoogleCloudChannelV1ReportJob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ReportJob.to_json())

# convert the object into a dict
google_cloud_channel_v1_report_job_dict = google_cloud_channel_v1_report_job_instance.to_dict()
# create an instance of GoogleCloudChannelV1ReportJob from a dict
google_cloud_channel_v1_report_job_from_dict = GoogleCloudChannelV1ReportJob.from_dict(google_cloud_channel_v1_report_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


