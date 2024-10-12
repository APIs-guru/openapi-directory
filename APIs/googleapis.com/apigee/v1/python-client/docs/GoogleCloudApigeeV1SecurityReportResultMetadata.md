# GoogleCloudApigeeV1SecurityReportResultMetadata

Contains informations about the security report results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires** | **str** | Output only. Expire_time is set to 7 days after report creation. Query result will be unaccessable after this time. Example: \&quot;2021-05-04T13:38:52-07:00\&quot; | [optional] [readonly] 
**var_self** | **str** | Self link of the query results. Example: &#x60;/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result&#x60; or following format if query is running at host level: &#x60;/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_report_result_metadata import GoogleCloudApigeeV1SecurityReportResultMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityReportResultMetadata from a JSON string
google_cloud_apigee_v1_security_report_result_metadata_instance = GoogleCloudApigeeV1SecurityReportResultMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityReportResultMetadata.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_report_result_metadata_dict = google_cloud_apigee_v1_security_report_result_metadata_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityReportResultMetadata from a dict
google_cloud_apigee_v1_security_report_result_metadata_from_dict = GoogleCloudApigeeV1SecurityReportResultMetadata.from_dict(google_cloud_apigee_v1_security_report_result_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


