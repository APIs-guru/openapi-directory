# BuildSystemSharedDTOParameterMapping

A DTO for an IParameterMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the parameter this mapping applies to | [optional] 
**source** | **str** | The source of the value.  The meaning of this value is determined by the source type.  When the source type is “Constant” then source is the value formatted as a string.  When the source type is “Variable” then the source is the name of the variable | [optional] 
**source_type** | **str** | The source type used for supplying the parameter | [optional] 

## Example

```python
from openapi_client.models.build_system_shared_dto_parameter_mapping import BuildSystemSharedDTOParameterMapping

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOParameterMapping from a JSON string
build_system_shared_dto_parameter_mapping_instance = BuildSystemSharedDTOParameterMapping.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOParameterMapping.to_json())

# convert the object into a dict
build_system_shared_dto_parameter_mapping_dict = build_system_shared_dto_parameter_mapping_instance.to_dict()
# create an instance of BuildSystemSharedDTOParameterMapping from a dict
build_system_shared_dto_parameter_mapping_from_dict = BuildSystemSharedDTOParameterMapping.from_dict(build_system_shared_dto_parameter_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


