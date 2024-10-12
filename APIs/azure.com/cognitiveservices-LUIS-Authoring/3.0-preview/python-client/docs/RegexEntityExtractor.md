# RegexEntityExtractor

Regular Expression Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regex_pattern** | **str** | The Regular Expression entity pattern. | [optional] 
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 
**roles** | [**List[EntityRole]**](EntityRole.md) | List of Pattern.Any Entity Extractors. | [optional] 

## Example

```python
from openapi_client.models.regex_entity_extractor import RegexEntityExtractor

# TODO update the JSON string below
json = "{}"
# create an instance of RegexEntityExtractor from a JSON string
regex_entity_extractor_instance = RegexEntityExtractor.from_json(json)
# print the JSON string representation of the object
print(RegexEntityExtractor.to_json())

# convert the object into a dict
regex_entity_extractor_dict = regex_entity_extractor_instance.to_dict()
# create an instance of RegexEntityExtractor from a dict
regex_entity_extractor_from_dict = RegexEntityExtractor.from_dict(regex_entity_extractor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


