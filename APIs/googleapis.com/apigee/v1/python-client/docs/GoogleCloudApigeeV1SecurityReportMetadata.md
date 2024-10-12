# GoogleCloudApigeeV1SecurityReportMetadata

Metadata for the security report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **List[str]** | Dimensions of the SecurityReport. | [optional] 
**end_timestamp** | **str** | End timestamp of the query range. | [optional] 
**metrics** | **List[str]** | Metrics of the SecurityReport. Example: [\&quot;name:bot_count,func:sum,alias:sum_bot_count\&quot;] | [optional] 
**mime_type** | **str** | MIME type / Output format. | [optional] 
**start_timestamp** | **str** | Start timestamp of the query range. | [optional] 
**time_unit** | **str** | Query GroupBy time unit. Example: \&quot;seconds\&quot;, \&quot;minute\&quot;, \&quot;hour\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_report_metadata import GoogleCloudApigeeV1SecurityReportMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityReportMetadata from a JSON string
google_cloud_apigee_v1_security_report_metadata_instance = GoogleCloudApigeeV1SecurityReportMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityReportMetadata.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_report_metadata_dict = google_cloud_apigee_v1_security_report_metadata_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityReportMetadata from a dict
google_cloud_apigee_v1_security_report_metadata_from_dict = GoogleCloudApigeeV1SecurityReportMetadata.from_dict(google_cloud_apigee_v1_security_report_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


