# GoogleCloudApigeeV1SecurityReport

SecurityReport saves all the information about the created security report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** | Creation time of the query. | [optional] 
**display_name** | **str** | Display Name specified by the user. | [optional] 
**envgroup_hostname** | **str** | Hostname is available only when query is executed at host level. | [optional] 
**error** | **str** | Error is set when query fails. | [optional] 
**execution_time** | **str** | ExecutionTime is available only after the query is completed. | [optional] 
**var_query_params** | [**GoogleCloudApigeeV1SecurityReportMetadata**](GoogleCloudApigeeV1SecurityReportMetadata.md) |  | [optional] 
**report_definition_id** | **str** | Report Definition ID. | [optional] 
**result** | [**GoogleCloudApigeeV1SecurityReportResultMetadata**](GoogleCloudApigeeV1SecurityReportResultMetadata.md) |  | [optional] 
**result_file_size** | **str** | ResultFileSize is available only after the query is completed. | [optional] 
**result_rows** | **str** | ResultRows is available only after the query is completed. | [optional] 
**var_self** | **str** | Self link of the query. Example: &#x60;/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd&#x60; or following format if query is running at host level: &#x60;/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd&#x60; | [optional] 
**state** | **str** | Query state could be \&quot;enqueued\&quot;, \&quot;running\&quot;, \&quot;completed\&quot;, \&quot;expired\&quot; and \&quot;failed\&quot;. | [optional] 
**updated** | **str** | Output only. Last updated timestamp for the query. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_report import GoogleCloudApigeeV1SecurityReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityReport from a JSON string
google_cloud_apigee_v1_security_report_instance = GoogleCloudApigeeV1SecurityReport.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityReport.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_report_dict = google_cloud_apigee_v1_security_report_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityReport from a dict
google_cloud_apigee_v1_security_report_from_dict = GoogleCloudApigeeV1SecurityReport.from_dict(google_cloud_apigee_v1_security_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


