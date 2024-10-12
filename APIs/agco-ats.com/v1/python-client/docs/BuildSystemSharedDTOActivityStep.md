# BuildSystemSharedDTOActivityStep

A DTO for an IActivityStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **int** | The id of the activity this activity step belongs to | [optional] 
**activity_step_id** | **int** | The id of this activity step | [optional] 
**implementation_id** | **str** | The implementation id which is used to look up the step implementation | [optional] 
**parameter_mappings** | [**List[BuildSystemSharedDTOParameterMapping]**](BuildSystemSharedDTOParameterMapping.md) | The mapping of values from a source to be used for the step parameters | [optional] [readonly] 
**run_order** | **int** | The order of this activity step relative to other activity steps | [optional] 
**step_id** | **int** | The id of the step | [optional] 
**step_name** | **str** | The name of the step | [optional] 
**use_config** | **str** | Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_dto_activity_step import BuildSystemSharedDTOActivityStep

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOActivityStep from a JSON string
build_system_shared_dto_activity_step_instance = BuildSystemSharedDTOActivityStep.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOActivityStep.to_json())

# convert the object into a dict
build_system_shared_dto_activity_step_dict = build_system_shared_dto_activity_step_instance.to_dict()
# create an instance of BuildSystemSharedDTOActivityStep from a dict
build_system_shared_dto_activity_step_from_dict = BuildSystemSharedDTOActivityStep.from_dict(build_system_shared_dto_activity_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


