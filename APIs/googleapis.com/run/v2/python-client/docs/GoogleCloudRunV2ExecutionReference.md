# GoogleCloudRunV2ExecutionReference

Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_time** | **str** | Creation timestamp of the execution. | [optional] 
**create_time** | **str** | Creation timestamp of the execution. | [optional] 
**name** | **str** | Name of the execution. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_execution_reference import GoogleCloudRunV2ExecutionReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ExecutionReference from a JSON string
google_cloud_run_v2_execution_reference_instance = GoogleCloudRunV2ExecutionReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ExecutionReference.to_json())

# convert the object into a dict
google_cloud_run_v2_execution_reference_dict = google_cloud_run_v2_execution_reference_instance.to_dict()
# create an instance of GoogleCloudRunV2ExecutionReference from a dict
google_cloud_run_v2_execution_reference_from_dict = GoogleCloudRunV2ExecutionReference.from_dict(google_cloud_run_v2_execution_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


