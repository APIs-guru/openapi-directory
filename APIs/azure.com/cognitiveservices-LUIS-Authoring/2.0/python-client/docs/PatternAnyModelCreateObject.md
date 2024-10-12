# PatternAnyModelCreateObject

Model object for creating a Pattern.Any entity model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_list** | **List[str]** | The Pattern.Any explicit list. | [optional] 
**name** | **str** | The model name. | [optional] 

## Example

```python
from openapi_client.models.pattern_any_model_create_object import PatternAnyModelCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PatternAnyModelCreateObject from a JSON string
pattern_any_model_create_object_instance = PatternAnyModelCreateObject.from_json(json)
# print the JSON string representation of the object
print(PatternAnyModelCreateObject.to_json())

# convert the object into a dict
pattern_any_model_create_object_dict = pattern_any_model_create_object_instance.to_dict()
# create an instance of PatternAnyModelCreateObject from a dict
pattern_any_model_create_object_from_dict = PatternAnyModelCreateObject.from_dict(pattern_any_model_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


