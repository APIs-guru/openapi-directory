# HierarchicalEntityExtractor

Hierarchical Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ChildEntity]**](ChildEntity.md) | List of child entities. | [optional] 
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 

## Example

```python
from openapi_client.models.hierarchical_entity_extractor import HierarchicalEntityExtractor

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchicalEntityExtractor from a JSON string
hierarchical_entity_extractor_instance = HierarchicalEntityExtractor.from_json(json)
# print the JSON string representation of the object
print(HierarchicalEntityExtractor.to_json())

# convert the object into a dict
hierarchical_entity_extractor_dict = hierarchical_entity_extractor_instance.to_dict()
# create an instance of HierarchicalEntityExtractor from a dict
hierarchical_entity_extractor_from_dict = HierarchicalEntityExtractor.from_dict(hierarchical_entity_extractor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


