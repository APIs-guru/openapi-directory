# PatternUpdateObject

Object model for updating an existing Pattern feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_active** | **bool** | Indicates if the Pattern feature is enabled. | [optional] [default to True]
**name** | **str** | Name of the feature. | [optional] 
**pattern** | **str** | The Regular Expression to match. | [optional] 

## Example

```python
from openapi_client.models.pattern_update_object import PatternUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PatternUpdateObject from a JSON string
pattern_update_object_instance = PatternUpdateObject.from_json(json)
# print the JSON string representation of the object
print(PatternUpdateObject.to_json())

# convert the object into a dict
pattern_update_object_dict = pattern_update_object_instance.to_dict()
# create an instance of PatternUpdateObject from a dict
pattern_update_object_from_dict = PatternUpdateObject.from_dict(pattern_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


