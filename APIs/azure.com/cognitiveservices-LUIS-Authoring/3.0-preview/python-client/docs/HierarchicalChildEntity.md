# HierarchicalChildEntity

A Hierarchical Child Entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**readable_type** | [**ReadableType**](ReadableType.md) |  | [optional] 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 
**children** | [**List[ChildEntity]**](ChildEntity.md) | List of children | [optional] 
**id** | **str** | The ID (GUID) belonging to a child entity. | 
**instance_of** | **str** | Instance of Model. | [optional] 
**name** | **str** | The name of a child entity. | [optional] 

## Example

```python
from openapi_client.models.hierarchical_child_entity import HierarchicalChildEntity

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchicalChildEntity from a JSON string
hierarchical_child_entity_instance = HierarchicalChildEntity.from_json(json)
# print the JSON string representation of the object
print(HierarchicalChildEntity.to_json())

# convert the object into a dict
hierarchical_child_entity_dict = hierarchical_child_entity_instance.to_dict()
# create an instance of HierarchicalChildEntity from a dict
hierarchical_child_entity_from_dict = HierarchicalChildEntity.from_dict(hierarchical_child_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


