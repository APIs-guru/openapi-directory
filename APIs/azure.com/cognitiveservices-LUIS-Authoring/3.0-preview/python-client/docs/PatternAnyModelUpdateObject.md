# PatternAnyModelUpdateObject

Model object for updating a Pattern.Any entity model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_list** | **List[str]** | The Pattern.Any explicit list. | [optional] 
**name** | **str** | The model name. | [optional] 

## Example

```python
from openapi_client.models.pattern_any_model_update_object import PatternAnyModelUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PatternAnyModelUpdateObject from a JSON string
pattern_any_model_update_object_instance = PatternAnyModelUpdateObject.from_json(json)
# print the JSON string representation of the object
print(PatternAnyModelUpdateObject.to_json())

# convert the object into a dict
pattern_any_model_update_object_dict = pattern_any_model_update_object_instance.to_dict()
# create an instance of PatternAnyModelUpdateObject from a dict
pattern_any_model_update_object_from_dict = PatternAnyModelUpdateObject.from_dict(pattern_any_model_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


