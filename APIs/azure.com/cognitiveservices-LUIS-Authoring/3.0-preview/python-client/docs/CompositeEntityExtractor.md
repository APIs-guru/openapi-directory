# CompositeEntityExtractor

A Composite Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ChildEntity]**](ChildEntity.md) | List of child entities. | [optional] 
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 
**roles** | [**List[EntityRole]**](EntityRole.md) | List of Pattern.Any Entity Extractors. | [optional] 

## Example

```python
from openapi_client.models.composite_entity_extractor import CompositeEntityExtractor

# TODO update the JSON string below
json = "{}"
# create an instance of CompositeEntityExtractor from a JSON string
composite_entity_extractor_instance = CompositeEntityExtractor.from_json(json)
# print the JSON string representation of the object
print(CompositeEntityExtractor.to_json())

# convert the object into a dict
composite_entity_extractor_dict = composite_entity_extractor_instance.to_dict()
# create an instance of CompositeEntityExtractor from a dict
composite_entity_extractor_from_dict = CompositeEntityExtractor.from_dict(composite_entity_extractor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


