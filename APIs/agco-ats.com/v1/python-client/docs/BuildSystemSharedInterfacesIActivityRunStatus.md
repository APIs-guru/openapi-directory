# BuildSystemSharedInterfacesIActivityRunStatus

Declares members of objects that communicate the progress of an               asynchronous activity run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_step** | **int** | Gets or sets the number of the step the activity is currently running. | [optional] 
**status** | **str** | Gets or sets the status of the activity run. | [optional] 
**step_progress** | **int** | Gets or sets a measurement of the current progress of the current step. | [optional] 
**step_status** | **str** | Gets or sets a description of the current status of the currently               running step. | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_interfaces_i_activity_run_status import BuildSystemSharedInterfacesIActivityRunStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedInterfacesIActivityRunStatus from a JSON string
build_system_shared_interfaces_i_activity_run_status_instance = BuildSystemSharedInterfacesIActivityRunStatus.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedInterfacesIActivityRunStatus.to_json())

# convert the object into a dict
build_system_shared_interfaces_i_activity_run_status_dict = build_system_shared_interfaces_i_activity_run_status_instance.to_dict()
# create an instance of BuildSystemSharedInterfacesIActivityRunStatus from a dict
build_system_shared_interfaces_i_activity_run_status_from_dict = BuildSystemSharedInterfacesIActivityRunStatus.from_dict(build_system_shared_interfaces_i_activity_run_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


