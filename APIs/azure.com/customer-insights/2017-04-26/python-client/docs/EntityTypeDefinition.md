# EntityTypeDefinition

Describes an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_entity_set_name** | **str** | The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object. | [optional] 
**entity_type** | **str** | Type of entity. | [optional] 
**fields** | [**List[PropertyDefinition]**](PropertyDefinition.md) | The properties of the Profile. | [optional] 
**instances_count** | **int** | The instance count. | [optional] 
**last_changed_utc** | **datetime** | The last changed time for the type definition. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**schema_item_type_link** | **str** | The schema org link. This helps ACI identify and suggest semantic models. | [optional] 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 
**timestamp_field_name** | **str** | The timestamp property name. Represents the time when the interaction or profile update happened. | [optional] 
**type_name** | **str** | The name of the entity. | [optional] 
**attributes** | **Dict[str, List[str]]** | The attributes for the Type. | [optional] 
**description** | **Dict[str, str]** | Localized descriptions for the property. | [optional] 
**display_name** | **Dict[str, str]** | Localized display names for the property. | [optional] 
**large_image** | **str** | Large Image associated with the Property or EntityType. | [optional] 
**localized_attributes** | **Dict[str, Dict[str, str]]** | Any custom localized attributes for the Type. | [optional] 
**medium_image** | **str** | Medium Image associated with the Property or EntityType. | [optional] 
**small_image** | **str** | Small Image associated with the Property or EntityType. | [optional] 

## Example

```python
from openapi_client.models.entity_type_definition import EntityTypeDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of EntityTypeDefinition from a JSON string
entity_type_definition_instance = EntityTypeDefinition.from_json(json)
# print the JSON string representation of the object
print(EntityTypeDefinition.to_json())

# convert the object into a dict
entity_type_definition_dict = entity_type_definition_instance.to_dict()
# create an instance of EntityTypeDefinition from a dict
entity_type_definition_from_dict = EntityTypeDefinition.from_dict(entity_type_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


