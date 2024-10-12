# BuildSystemSharedDTOParameter

A DTO for an IParameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | The parameter direction (Input or Output) | [optional] 
**name** | **str** | The name of the parameter | [optional] 
**type** | **str** | The data type of the parameter | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_dto_parameter import BuildSystemSharedDTOParameter

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOParameter from a JSON string
build_system_shared_dto_parameter_instance = BuildSystemSharedDTOParameter.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOParameter.to_json())

# convert the object into a dict
build_system_shared_dto_parameter_dict = build_system_shared_dto_parameter_instance.to_dict()
# create an instance of BuildSystemSharedDTOParameter from a dict
build_system_shared_dto_parameter_from_dict = BuildSystemSharedDTOParameter.from_dict(build_system_shared_dto_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


