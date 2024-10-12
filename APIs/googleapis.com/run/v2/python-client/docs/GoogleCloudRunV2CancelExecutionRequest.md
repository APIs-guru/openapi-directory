# GoogleCloudRunV2CancelExecutionRequest

Request message for deleting an Execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates. | [optional] 
**validate_only** | **bool** | Indicates that the request should be validated without actually cancelling any resources. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_cancel_execution_request import GoogleCloudRunV2CancelExecutionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2CancelExecutionRequest from a JSON string
google_cloud_run_v2_cancel_execution_request_instance = GoogleCloudRunV2CancelExecutionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2CancelExecutionRequest.to_json())

# convert the object into a dict
google_cloud_run_v2_cancel_execution_request_dict = google_cloud_run_v2_cancel_execution_request_instance.to_dict()
# create an instance of GoogleCloudRunV2CancelExecutionRequest from a dict
google_cloud_run_v2_cancel_execution_request_from_dict = GoogleCloudRunV2CancelExecutionRequest.from_dict(google_cloud_run_v2_cancel_execution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


