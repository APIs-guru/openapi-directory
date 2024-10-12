# BuildSystemSharedDTOActivityRunStatus

A DTO for an IActivityRunStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_step** | **int** | The activity step currently executing, indicated by numeric order | [optional] 
**status** | **str** | The status of the ActivityRun | [optional] 
**step_progress** | **int** | The percent progress from the currently executing step.  This value shall be null if progress is not available | [optional] 
**step_status** | **str** | The status text from the currently executing step | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_dto_activity_run_status import BuildSystemSharedDTOActivityRunStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOActivityRunStatus from a JSON string
build_system_shared_dto_activity_run_status_instance = BuildSystemSharedDTOActivityRunStatus.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOActivityRunStatus.to_json())

# convert the object into a dict
build_system_shared_dto_activity_run_status_dict = build_system_shared_dto_activity_run_status_instance.to_dict()
# create an instance of BuildSystemSharedDTOActivityRunStatus from a dict
build_system_shared_dto_activity_run_status_from_dict = BuildSystemSharedDTOActivityRunStatus.from_dict(build_system_shared_dto_activity_run_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


