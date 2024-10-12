# PatternAnyEntityExtractor

Pattern.Any Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_list** | [**List[ExplicitListItem]**](ExplicitListItem.md) | List of explicit (exception) list items | [optional] 
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 
**roles** | [**List[EntityRole]**](EntityRole.md) | List of Pattern.Any Entity Extractors. | [optional] 

## Example

```python
from openapi_client.models.pattern_any_entity_extractor import PatternAnyEntityExtractor

# TODO update the JSON string below
json = "{}"
# create an instance of PatternAnyEntityExtractor from a JSON string
pattern_any_entity_extractor_instance = PatternAnyEntityExtractor.from_json(json)
# print the JSON string representation of the object
print(PatternAnyEntityExtractor.to_json())

# convert the object into a dict
pattern_any_entity_extractor_dict = pattern_any_entity_extractor_instance.to_dict()
# create an instance of PatternAnyEntityExtractor from a dict
pattern_any_entity_extractor_from_dict = PatternAnyEntityExtractor.from_dict(pattern_any_entity_extractor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


