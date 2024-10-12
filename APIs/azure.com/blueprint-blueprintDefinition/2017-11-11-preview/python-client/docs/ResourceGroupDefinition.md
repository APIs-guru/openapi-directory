# ResourceGroupDefinition

Represents an Azure resource group in a Blueprint definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depends_on** | **List[str]** | Artifacts which need to be deployed before this resource group. | [optional] 
**location** | **str** | Location of this resourceGroup, leave empty if the resource group location will be specified during the Blueprint assignment. | [optional] 
**metadata** | [**ParameterDefinitionMetadata**](ParameterDefinitionMetadata.md) |  | [optional] 
**name** | **str** | Name of this resourceGroup, leave empty if the resource group name will be specified during the Blueprint assignment. | [optional] 

## Example

```python
from openapi_client.models.resource_group_definition import ResourceGroupDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceGroupDefinition from a JSON string
resource_group_definition_instance = ResourceGroupDefinition.from_json(json)
# print the JSON string representation of the object
print(ResourceGroupDefinition.to_json())

# convert the object into a dict
resource_group_definition_dict = resource_group_definition_instance.to_dict()
# create an instance of ResourceGroupDefinition from a dict
resource_group_definition_from_dict = ResourceGroupDefinition.from_dict(resource_group_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


