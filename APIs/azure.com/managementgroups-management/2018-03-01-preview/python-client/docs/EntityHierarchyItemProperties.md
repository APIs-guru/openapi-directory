# EntityHierarchyItemProperties

The generic properties of a management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[EntityHierarchyItem]**](EntityHierarchyItem.md) | The list of children. | [optional] 
**display_name** | **str** | The friendly name of the management group. | [optional] 
**permissions** | [**Permissions**](Permissions.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_hierarchy_item_properties import EntityHierarchyItemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EntityHierarchyItemProperties from a JSON string
entity_hierarchy_item_properties_instance = EntityHierarchyItemProperties.from_json(json)
# print the JSON string representation of the object
print(EntityHierarchyItemProperties.to_json())

# convert the object into a dict
entity_hierarchy_item_properties_dict = entity_hierarchy_item_properties_instance.to_dict()
# create an instance of EntityHierarchyItemProperties from a dict
entity_hierarchy_item_properties_from_dict = EntityHierarchyItemProperties.from_dict(entity_hierarchy_item_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


