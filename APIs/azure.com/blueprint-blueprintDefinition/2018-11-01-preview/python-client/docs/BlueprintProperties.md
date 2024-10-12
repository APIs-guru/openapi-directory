# BlueprintProperties

Schema for blueprint definition properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layout** | **object** | Layout view of the blueprint definition for UI reference. | [optional] 
**versions** | **object** | Published versions of this blueprint definition. | [optional] 
**parameters** | [**Dict[str, ParameterDefinition]**](ParameterDefinition.md) | A dictionary hold parameter name and its metadata. | [optional] 
**resource_groups** | [**Dict[str, ResourceGroupDefinition]**](ResourceGroupDefinition.md) | A dictionary which maps resource group placeholders to the resource groups which will be created. | [optional] 
**status** | [**BlueprintStatus**](BlueprintStatus.md) |  | [optional] 
**target_scope** | **str** | The scope where this blueprint definition can be assigned. | [optional] 
**description** | **str** | Multi-line explain this resource. | [optional] 
**display_name** | **str** | One-liner string explain this resource. | [optional] 

## Example

```python
from openapi_client.models.blueprint_properties import BlueprintProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BlueprintProperties from a JSON string
blueprint_properties_instance = BlueprintProperties.from_json(json)
# print the JSON string representation of the object
print(BlueprintProperties.to_json())

# convert the object into a dict
blueprint_properties_dict = blueprint_properties_instance.to_dict()
# create an instance of BlueprintProperties from a dict
blueprint_properties_from_dict = BlueprintProperties.from_dict(blueprint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


