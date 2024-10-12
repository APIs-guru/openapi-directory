# BuildSystemSharedDTOJobRun

A DTO for an IJobRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_runs** | [**List[BuildSystemSharedDTOActivityRun]**](BuildSystemSharedDTOActivityRun.md) | The activity runs belonging to this JobRun | [optional] [readonly] 
**end_date** | **datetime** | The UTC date and time when the job completed | [optional] 
**job_id** | **int** | The ID of the job that defines the run | [optional] 
**job_run_id** | **int** | The ID of this JobRun | [optional] 
**parameters** | [**List[BuildSystemSharedDTOParameterValue]**](BuildSystemSharedDTOParameterValue.md) | The parameters used for this run of the job | [optional] [readonly] 
**start_date** | **datetime** | The UTC date and time when the job started | [optional] 
**status** | **str** | The status of this JobRun | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_dto_job_run import BuildSystemSharedDTOJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOJobRun from a JSON string
build_system_shared_dto_job_run_instance = BuildSystemSharedDTOJobRun.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOJobRun.to_json())

# convert the object into a dict
build_system_shared_dto_job_run_dict = build_system_shared_dto_job_run_instance.to_dict()
# create an instance of BuildSystemSharedDTOJobRun from a dict
build_system_shared_dto_job_run_from_dict = BuildSystemSharedDTOJobRun.from_dict(build_system_shared_dto_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


