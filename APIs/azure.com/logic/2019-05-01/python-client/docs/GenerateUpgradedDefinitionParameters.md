# GenerateUpgradedDefinitionParameters

The parameters to generate upgraded definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_schema_version** | **str** | The target schema version. | [optional] 

## Example

```python
from openapi_client.models.generate_upgraded_definition_parameters import GenerateUpgradedDefinitionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUpgradedDefinitionParameters from a JSON string
generate_upgraded_definition_parameters_instance = GenerateUpgradedDefinitionParameters.from_json(json)
# print the JSON string representation of the object
print(GenerateUpgradedDefinitionParameters.to_json())

# convert the object into a dict
generate_upgraded_definition_parameters_dict = generate_upgraded_definition_parameters_instance.to_dict()
# create an instance of GenerateUpgradedDefinitionParameters from a dict
generate_upgraded_definition_parameters_from_dict = GenerateUpgradedDefinitionParameters.from_dict(generate_upgraded_definition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


