# GoogleCloudChannelV1ReportStatus

Status of a report generation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The report generation&#39;s completion time. | [optional] 
**start_time** | **str** | The report generation&#39;s start time. | [optional] 
**state** | **str** | The current state of the report generation process. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_report_status import GoogleCloudChannelV1ReportStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ReportStatus from a JSON string
google_cloud_channel_v1_report_status_instance = GoogleCloudChannelV1ReportStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ReportStatus.to_json())

# convert the object into a dict
google_cloud_channel_v1_report_status_dict = google_cloud_channel_v1_report_status_instance.to_dict()
# create an instance of GoogleCloudChannelV1ReportStatus from a dict
google_cloud_channel_v1_report_status_from_dict = GoogleCloudChannelV1ReportStatus.from_dict(google_cloud_channel_v1_report_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


