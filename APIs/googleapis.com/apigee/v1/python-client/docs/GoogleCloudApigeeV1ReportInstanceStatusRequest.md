# GoogleCloudApigeeV1ReportInstanceStatusRequest

Request for ReportInstanceStatus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_uid** | **str** | A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes with the same instance ID. | [optional] 
**report_time** | **str** | The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An instance should space out it&#39;s status reports so that clock skew does not play a factor. | [optional] 
**resources** | [**List[GoogleCloudApigeeV1ResourceStatus]**](GoogleCloudApigeeV1ResourceStatus.md) | Status for config resources | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_report_instance_status_request import GoogleCloudApigeeV1ReportInstanceStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ReportInstanceStatusRequest from a JSON string
google_cloud_apigee_v1_report_instance_status_request_instance = GoogleCloudApigeeV1ReportInstanceStatusRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ReportInstanceStatusRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_report_instance_status_request_dict = google_cloud_apigee_v1_report_instance_status_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ReportInstanceStatusRequest from a dict
google_cloud_apigee_v1_report_instance_status_request_from_dict = GoogleCloudApigeeV1ReportInstanceStatusRequest.from_dict(google_cloud_apigee_v1_report_instance_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


