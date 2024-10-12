# SharedBlueprintProperties

Shared Schema for both blueprintProperties and publishedBlueprintProperties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**Dict[str, ParameterDefinition]**](ParameterDefinition.md) | A dictionary hold parameter name and its metadata. | [optional] 
**resource_groups** | [**Dict[str, ResourceGroupDefinition]**](ResourceGroupDefinition.md) | A dictionary which maps resource group placeholders to the resource groups which will be created. | [optional] 
**status** | [**BlueprintStatus**](BlueprintStatus.md) |  | [optional] 
**target_scope** | **str** | The scope where this blueprint definition can be assigned. | [optional] 
**description** | **str** | Multi-line explain this resource. | [optional] 
**display_name** | **str** | One-liner string explain this resource. | [optional] 

## Example

```python
from openapi_client.models.shared_blueprint_properties import SharedBlueprintProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SharedBlueprintProperties from a JSON string
shared_blueprint_properties_instance = SharedBlueprintProperties.from_json(json)
# print the JSON string representation of the object
print(SharedBlueprintProperties.to_json())

# convert the object into a dict
shared_blueprint_properties_dict = shared_blueprint_properties_instance.to_dict()
# create an instance of SharedBlueprintProperties from a dict
shared_blueprint_properties_from_dict = SharedBlueprintProperties.from_dict(shared_blueprint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


