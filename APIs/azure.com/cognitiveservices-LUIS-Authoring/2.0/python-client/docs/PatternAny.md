# PatternAny

Pattern.Any Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_list** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**roles** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.pattern_any import PatternAny

# TODO update the JSON string below
json = "{}"
# create an instance of PatternAny from a JSON string
pattern_any_instance = PatternAny.from_json(json)
# print the JSON string representation of the object
print(PatternAny.to_json())

# convert the object into a dict
pattern_any_dict = pattern_any_instance.to_dict()
# create an instance of PatternAny from a dict
pattern_any_from_dict = PatternAny.from_dict(pattern_any_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


