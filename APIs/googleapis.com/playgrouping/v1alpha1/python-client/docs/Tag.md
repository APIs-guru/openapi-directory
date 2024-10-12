# Tag

A tag is associated with exactly one package name and user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_value** | **bool** | A boolean value of the tag. | [optional] 
**int64_value** | **str** | A signed 64-bit integer value of the tag. | [optional] 
**key** | **str** | Required. Key for the tag. | [optional] 
**string_value** | **str** | A string value of the tag. | [optional] 
**time_value** | **str** | A time value of the tag. | [optional] 

## Example

```python
from openapi_client.models.tag import Tag

# TODO update the JSON string below
json = "{}"
# create an instance of Tag from a JSON string
tag_instance = Tag.from_json(json)
# print the JSON string representation of the object
print(Tag.to_json())

# convert the object into a dict
tag_dict = tag_instance.to_dict()
# create an instance of Tag from a dict
tag_from_dict = Tag.from_dict(tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


