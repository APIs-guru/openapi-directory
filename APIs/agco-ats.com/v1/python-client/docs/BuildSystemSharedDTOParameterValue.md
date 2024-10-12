# BuildSystemSharedDTOParameterValue

A DTO for an IParameterValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | The parameter direction (Input or Output) | [optional] 
**name** | **str** | The name of the parameter this value is for | [optional] 
**value** | **str** | The parameter value in string representation | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_dto_parameter_value import BuildSystemSharedDTOParameterValue

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOParameterValue from a JSON string
build_system_shared_dto_parameter_value_instance = BuildSystemSharedDTOParameterValue.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOParameterValue.to_json())

# convert the object into a dict
build_system_shared_dto_parameter_value_dict = build_system_shared_dto_parameter_value_instance.to_dict()
# create an instance of BuildSystemSharedDTOParameterValue from a dict
build_system_shared_dto_parameter_value_from_dict = BuildSystemSharedDTOParameterValue.from_dict(build_system_shared_dto_parameter_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


