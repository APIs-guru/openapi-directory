# BuildSystemSharedDTOActivityRun

A DTO for an IActivityRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_run_id** | **int** | The identifier for the ActivityRun | [optional] 
**end_date** | **datetime** | Read Only. The UTC date and time when the activity completed | [optional] 
**job_activity_id** | **int** | Read Only. The ID of the Job Activity that defines this activity run | [optional] 
**job_run_id** | **int** | Read Only. The ID of the JobRun under which this ActivityRun is executing | [optional] 
**parameters** | [**List[BuildSystemSharedDTOParameterValue]**](BuildSystemSharedDTOParameterValue.md) | The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated. | [optional] [readonly] 
**start_date** | **datetime** | Read Only. The UTC date and time when the activity started | [optional] 
**status** | [**BuildSystemSharedDTOActivityRunStatus**](BuildSystemSharedDTOActivityRunStatus.md) |  | 
**steps** | [**List[BuildSystemSharedDTOActivityStep]**](BuildSystemSharedDTOActivityStep.md) | Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep | [optional] [readonly] 

## Example

```python
from openapi_client.models.build_system_shared_dto_activity_run import BuildSystemSharedDTOActivityRun

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOActivityRun from a JSON string
build_system_shared_dto_activity_run_instance = BuildSystemSharedDTOActivityRun.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOActivityRun.to_json())

# convert the object into a dict
build_system_shared_dto_activity_run_dict = build_system_shared_dto_activity_run_instance.to_dict()
# create an instance of BuildSystemSharedDTOActivityRun from a dict
build_system_shared_dto_activity_run_from_dict = BuildSystemSharedDTOActivityRun.from_dict(build_system_shared_dto_activity_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


