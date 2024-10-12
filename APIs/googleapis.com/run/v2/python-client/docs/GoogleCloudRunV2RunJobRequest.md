# GoogleCloudRunV2RunJobRequest

Request message to create a new Execution of a Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. | [optional] 
**overrides** | [**GoogleCloudRunV2Overrides**](GoogleCloudRunV2Overrides.md) |  | [optional] 
**validate_only** | **bool** | Indicates that the request should be validated without actually deleting any resources. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_run_job_request import GoogleCloudRunV2RunJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2RunJobRequest from a JSON string
google_cloud_run_v2_run_job_request_instance = GoogleCloudRunV2RunJobRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2RunJobRequest.to_json())

# convert the object into a dict
google_cloud_run_v2_run_job_request_dict = google_cloud_run_v2_run_job_request_instance.to_dict()
# create an instance of GoogleCloudRunV2RunJobRequest from a dict
google_cloud_run_v2_run_job_request_from_dict = GoogleCloudRunV2RunJobRequest.from_dict(google_cloud_run_v2_run_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


