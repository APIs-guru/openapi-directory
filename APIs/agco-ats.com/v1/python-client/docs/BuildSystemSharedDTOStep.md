# BuildSystemSharedDTOStep

Step

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_required** | **bool** | Indicates if the step requires configuration values to be provided by the build agent | 
**deleted** | **bool** | Read Only.  Indicates if the record is deleted. | [optional] 
**description** | **str** | A description of the step to be presented to a user | [optional] 
**implementation_id** | **str** | The implementation ID used to lookup the step implementation when it is executed | 
**name** | **str** | The name of the step | 
**parameters** | [**List[BuildSystemSharedDTOParameter]**](BuildSystemSharedDTOParameter.md) | The parameters for this step | [optional] [readonly] 
**step_id** | **int** | The ID of the step | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_dto_step import BuildSystemSharedDTOStep

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOStep from a JSON string
build_system_shared_dto_step_instance = BuildSystemSharedDTOStep.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOStep.to_json())

# convert the object into a dict
build_system_shared_dto_step_dict = build_system_shared_dto_step_instance.to_dict()
# create an instance of BuildSystemSharedDTOStep from a dict
build_system_shared_dto_step_from_dict = BuildSystemSharedDTOStep.from_dict(build_system_shared_dto_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


