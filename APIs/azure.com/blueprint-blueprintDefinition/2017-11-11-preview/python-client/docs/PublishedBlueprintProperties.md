# PublishedBlueprintProperties

Schema for published Blueprint properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blueprint_name** | **str** | Name of the Blueprint definition. | [optional] 
**change_notes** | **str** | Version-specific change notes | [optional] 
**parameters** | [**Dict[str, ParameterDefinition]**](ParameterDefinition.md) | A dictionary hold parameter name and it&#39;s metadata. | [optional] 
**resource_groups** | [**Dict[str, ResourceGroupDefinition]**](ResourceGroupDefinition.md) | A dictionary which maps resource group placeholders to the resource groups which will be created. | [optional] 
**status** | [**BlueprintStatus**](BlueprintStatus.md) |  | [optional] 
**target_scope** | **str** | The scope where this Blueprint can be applied. | [optional] 
**description** | **str** | Multi-line explain this resource. | [optional] 
**display_name** | **str** | One-liner string explain this resource. | [optional] 

## Example

```python
from openapi_client.models.published_blueprint_properties import PublishedBlueprintProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PublishedBlueprintProperties from a JSON string
published_blueprint_properties_instance = PublishedBlueprintProperties.from_json(json)
# print the JSON string representation of the object
print(PublishedBlueprintProperties.to_json())

# convert the object into a dict
published_blueprint_properties_dict = published_blueprint_properties_instance.to_dict()
# create an instance of PublishedBlueprintProperties from a dict
published_blueprint_properties_from_dict = PublishedBlueprintProperties.from_dict(published_blueprint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


