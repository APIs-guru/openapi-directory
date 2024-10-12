# BuildSystemSharedInterfacesIJobRun

interface of JobRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_runs** | [**List[BuildSystemSharedInterfacesIActivityRun]**](BuildSystemSharedInterfacesIActivityRun.md) | ActivityRuns | [optional] 
**end_date** | **datetime** | end date | [optional] 
**job_id** | **int** | job id | [optional] 
**job_run_id** | **int** | JobRunID | [optional] [readonly] 
**parameters** | [**List[BuildSystemSharedInterfacesIParameterValue]**](BuildSystemSharedInterfacesIParameterValue.md) | Parameters | [optional] [readonly] 
**start_date** | **datetime** | Start Date | [optional] 
**status** | **str** | status | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_interfaces_i_job_run import BuildSystemSharedInterfacesIJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedInterfacesIJobRun from a JSON string
build_system_shared_interfaces_i_job_run_instance = BuildSystemSharedInterfacesIJobRun.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedInterfacesIJobRun.to_json())

# convert the object into a dict
build_system_shared_interfaces_i_job_run_dict = build_system_shared_interfaces_i_job_run_instance.to_dict()
# create an instance of BuildSystemSharedInterfacesIJobRun from a dict
build_system_shared_interfaces_i_job_run_from_dict = BuildSystemSharedInterfacesIJobRun.from_dict(build_system_shared_interfaces_i_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


