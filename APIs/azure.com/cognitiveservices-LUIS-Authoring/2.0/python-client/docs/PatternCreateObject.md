# PatternCreateObject

Object model for creating a Pattern feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the feature. | [optional] 
**pattern** | **str** | The Regular Expression to match. | [optional] 

## Example

```python
from openapi_client.models.pattern_create_object import PatternCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PatternCreateObject from a JSON string
pattern_create_object_instance = PatternCreateObject.from_json(json)
# print the JSON string representation of the object
print(PatternCreateObject.to_json())

# convert the object into a dict
pattern_create_object_dict = pattern_create_object_instance.to_dict()
# create an instance of PatternCreateObject from a dict
pattern_create_object_from_dict = PatternCreateObject.from_dict(pattern_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


