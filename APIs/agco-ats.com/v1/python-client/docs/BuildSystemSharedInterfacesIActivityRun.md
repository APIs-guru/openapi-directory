# BuildSystemSharedInterfacesIActivityRun

IActivityRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_run_id** | **int** | ActivityRunID | [optional] [readonly] 
**end_date** | **datetime** | EndDate | [optional] [readonly] 
**job_activity_id** | **int** | JobActivityID | [optional] [readonly] 
**job_run_id** | **int** | JobRunID | [optional] [readonly] 
**parameters** | [**List[BuildSystemSharedInterfacesIParameterValue]**](BuildSystemSharedInterfacesIParameterValue.md) | Parameters | [optional] 
**start_date** | **datetime** | StartDate | [optional] [readonly] 
**status** | [**BuildSystemSharedInterfacesIActivityRunStatus**](BuildSystemSharedInterfacesIActivityRunStatus.md) |  | [optional] 
**steps** | [**List[BuildSystemSharedInterfacesIActivityStep]**](BuildSystemSharedInterfacesIActivityStep.md) | Steps | [optional] [readonly] 

## Example

```python
from openapi_client.models.build_system_shared_interfaces_i_activity_run import BuildSystemSharedInterfacesIActivityRun

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedInterfacesIActivityRun from a JSON string
build_system_shared_interfaces_i_activity_run_instance = BuildSystemSharedInterfacesIActivityRun.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedInterfacesIActivityRun.to_json())

# convert the object into a dict
build_system_shared_interfaces_i_activity_run_dict = build_system_shared_interfaces_i_activity_run_instance.to_dict()
# create an instance of BuildSystemSharedInterfacesIActivityRun from a dict
build_system_shared_interfaces_i_activity_run_from_dict = BuildSystemSharedInterfacesIActivityRun.from_dict(build_system_shared_interfaces_i_activity_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


