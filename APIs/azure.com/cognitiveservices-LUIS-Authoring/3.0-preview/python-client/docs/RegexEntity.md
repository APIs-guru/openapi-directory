# RegexEntity

Regular Expression Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**regex_pattern** | **str** |  | [optional] 
**roles** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.regex_entity import RegexEntity

# TODO update the JSON string below
json = "{}"
# create an instance of RegexEntity from a JSON string
regex_entity_instance = RegexEntity.from_json(json)
# print the JSON string representation of the object
print(RegexEntity.to_json())

# convert the object into a dict
regex_entity_dict = regex_entity_instance.to_dict()
# create an instance of RegexEntity from a dict
regex_entity_from_dict = RegexEntity.from_dict(regex_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


