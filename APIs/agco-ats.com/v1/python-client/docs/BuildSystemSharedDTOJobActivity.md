# BuildSystemSharedDTOJobActivity

A DTO for an IJobActivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **int** | The ID of the activity to be run as part of the job | [optional] 
**job_activity_id** | **int** | The ID of this job activity | [optional] 
**job_id** | **int** | The ID of the job this job activity belongs to | [optional] 
**parameter_mappings** | [**List[BuildSystemSharedDTOParameterMapping]**](BuildSystemSharedDTOParameterMapping.md) | The mapping of values from a source to be used for the activity parameters | [optional] [readonly] 
**run_order** | **int** | The order of this job activity relative to others in the job | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_dto_job_activity import BuildSystemSharedDTOJobActivity

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOJobActivity from a JSON string
build_system_shared_dto_job_activity_instance = BuildSystemSharedDTOJobActivity.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOJobActivity.to_json())

# convert the object into a dict
build_system_shared_dto_job_activity_dict = build_system_shared_dto_job_activity_instance.to_dict()
# create an instance of BuildSystemSharedDTOJobActivity from a dict
build_system_shared_dto_job_activity_from_dict = BuildSystemSharedDTOJobActivity.from_dict(build_system_shared_dto_job_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


