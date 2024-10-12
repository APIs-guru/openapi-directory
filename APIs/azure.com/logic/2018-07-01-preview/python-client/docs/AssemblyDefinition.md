# AssemblyDefinition

The assembly definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AssemblyProperties**](AssemblyProperties.md) |  | 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assembly_definition import AssemblyDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of AssemblyDefinition from a JSON string
assembly_definition_instance = AssemblyDefinition.from_json(json)
# print the JSON string representation of the object
print(AssemblyDefinition.to_json())

# convert the object into a dict
assembly_definition_dict = assembly_definition_instance.to_dict()
# create an instance of AssemblyDefinition from a dict
assembly_definition_from_dict = AssemblyDefinition.from_dict(assembly_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


