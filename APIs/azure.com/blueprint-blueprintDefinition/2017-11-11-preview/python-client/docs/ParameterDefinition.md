# ParameterDefinition

Represent a parameter with constrains and metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[object]** | Array of allowed values for this parameter. | [optional] 
**default_value** | **object** | Default Value for this parameter. | [optional] 
**metadata** | [**ParameterDefinitionMetadata**](ParameterDefinitionMetadata.md) |  | [optional] 
**type** | **str** | Allowed data types for Azure Resource Manager template parameters. | 

## Example

```python
from openapi_client.models.parameter_definition import ParameterDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterDefinition from a JSON string
parameter_definition_instance = ParameterDefinition.from_json(json)
# print the JSON string representation of the object
print(ParameterDefinition.to_json())

# convert the object into a dict
parameter_definition_dict = parameter_definition_instance.to_dict()
# create an instance of ParameterDefinition from a dict
parameter_definition_from_dict = ParameterDefinition.from_dict(parameter_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


