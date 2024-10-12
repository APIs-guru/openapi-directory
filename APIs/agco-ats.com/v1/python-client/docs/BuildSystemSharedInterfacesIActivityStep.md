# BuildSystemSharedInterfacesIActivityStep

IActivityStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **int** | ActivityID | [optional] 
**activity_step_id** | **int** | ActivityStepID | [optional] [readonly] 
**implementation_id** | **str** | Implementation ID | [optional] [readonly] 
**parameter_mappings** | [**List[BuildSystemSharedInterfacesIParameterMapping]**](BuildSystemSharedInterfacesIParameterMapping.md) | ParameterMappings | [optional] 
**run_order** | **int** | run order | [optional] 
**step_id** | **int** | step id | [optional] 
**step_name** | **str** | steo name | [optional] [readonly] 
**use_config** | **str** | UseConfig | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_interfaces_i_activity_step import BuildSystemSharedInterfacesIActivityStep

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedInterfacesIActivityStep from a JSON string
build_system_shared_interfaces_i_activity_step_instance = BuildSystemSharedInterfacesIActivityStep.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedInterfacesIActivityStep.to_json())

# convert the object into a dict
build_system_shared_interfaces_i_activity_step_dict = build_system_shared_interfaces_i_activity_step_instance.to_dict()
# create an instance of BuildSystemSharedInterfacesIActivityStep from a dict
build_system_shared_interfaces_i_activity_step_from_dict = BuildSystemSharedInterfacesIActivityStep.from_dict(build_system_shared_interfaces_i_activity_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


