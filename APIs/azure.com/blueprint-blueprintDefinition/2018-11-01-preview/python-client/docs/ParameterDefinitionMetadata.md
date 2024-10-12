# ParameterDefinitionMetadata

User-friendly properties for this parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of this parameter/resourceGroup. | [optional] 
**display_name** | **str** | DisplayName of this parameter/resourceGroup. | [optional] 
**strong_type** | **str** | StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location. | [optional] 

## Example

```python
from openapi_client.models.parameter_definition_metadata import ParameterDefinitionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterDefinitionMetadata from a JSON string
parameter_definition_metadata_instance = ParameterDefinitionMetadata.from_json(json)
# print the JSON string representation of the object
print(ParameterDefinitionMetadata.to_json())

# convert the object into a dict
parameter_definition_metadata_dict = parameter_definition_metadata_instance.to_dict()
# create an instance of ParameterDefinitionMetadata from a dict
parameter_definition_metadata_from_dict = ParameterDefinitionMetadata.from_dict(parameter_definition_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


