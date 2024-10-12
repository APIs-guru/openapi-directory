# ScopeJobProperties

Scope job properties used when submitting and retrieving Scope jobs. (Only for use internally with Scope job type.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifier** | **str** | The list of email addresses, separated by semi-colons, to notify when the job reaches a terminal state. | [optional] 
**resources** | [**List[ScopeJobResource]**](ScopeJobResource.md) | The list of resources that are required by the job. | [optional] [readonly] 
**root_process_node_id** | **str** | The ID used to identify the job manager coordinating job execution. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**total_compilation_time** | **str** | The total time this job spent compiling. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**total_paused_time** | **str** | The total time this job spent paused. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**total_queued_time** | **str** | The total time this job spent queued. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**total_running_time** | **str** | The total time this job spent executing. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 
**user_algebra_path** | **str** | The algebra file path after the job has completed. | [optional] [readonly] 
**yarn_application_id** | **str** | The ID used to identify the yarn application executing the job. This value should not be set by the user and will be ignored if it is. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scope_job_properties import ScopeJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeJobProperties from a JSON string
scope_job_properties_instance = ScopeJobProperties.from_json(json)
# print the JSON string representation of the object
print(ScopeJobProperties.to_json())

# convert the object into a dict
scope_job_properties_dict = scope_job_properties_instance.to_dict()
# create an instance of ScopeJobProperties from a dict
scope_job_properties_from_dict = ScopeJobProperties.from_dict(scope_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


