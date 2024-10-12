# EntityHierarchyItem

The management group details for the hierarchy view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**name** | **str** | The name of the management group. For example, 00000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**properties** | [**EntityHierarchyItemProperties**](EntityHierarchyItemProperties.md) |  | [optional] 
**type** | **str** | The type of the resource.  For example, /providers/Microsoft.Management/managementGroups | [optional] [readonly] 

## Example

```python
from openapi_client.models.entity_hierarchy_item import EntityHierarchyItem

# TODO update the JSON string below
json = "{}"
# create an instance of EntityHierarchyItem from a JSON string
entity_hierarchy_item_instance = EntityHierarchyItem.from_json(json)
# print the JSON string representation of the object
print(EntityHierarchyItem.to_json())

# convert the object into a dict
entity_hierarchy_item_dict = entity_hierarchy_item_instance.to_dict()
# create an instance of EntityHierarchyItem from a dict
entity_hierarchy_item_from_dict = EntityHierarchyItem.from_dict(entity_hierarchy_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


