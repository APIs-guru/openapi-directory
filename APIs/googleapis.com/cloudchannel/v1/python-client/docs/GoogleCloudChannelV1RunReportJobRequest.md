# GoogleCloudChannelV1RunReportJobRequest

Request message for CloudChannelReportsService.RunReportJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**GoogleCloudChannelV1DateRange**](GoogleCloudChannelV1DateRange.md) |  | [optional] 
**filter** | **str** | Optional. A structured string that defines conditions on dimension columns to restrict the report output. Filters support logical operators (AND, OR, NOT) and conditional operators (&#x3D;, !&#x3D;, &lt;, &gt;, &lt;&#x3D;, and &gt;&#x3D;) using &#x60;column_id&#x60; as keys. For example: &#x60;(customer:\&quot;accounts/C123abc/customers/S456def\&quot; OR customer:\&quot;accounts/C123abc/customers/S789ghi\&quot;) AND invoice_start_date.year &gt;&#x3D; 2022&#x60; | [optional] 
**language_code** | **str** | Optional. The BCP-47 language code, such as \&quot;en-US\&quot;. If specified, the response is localized to the corresponding language code if the original data sources support it. Default is \&quot;en-US\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_run_report_job_request import GoogleCloudChannelV1RunReportJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1RunReportJobRequest from a JSON string
google_cloud_channel_v1_run_report_job_request_instance = GoogleCloudChannelV1RunReportJobRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1RunReportJobRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_run_report_job_request_dict = google_cloud_channel_v1_run_report_job_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1RunReportJobRequest from a dict
google_cloud_channel_v1_run_report_job_request_from_dict = GoogleCloudChannelV1RunReportJobRequest.from_dict(google_cloud_channel_v1_run_report_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


