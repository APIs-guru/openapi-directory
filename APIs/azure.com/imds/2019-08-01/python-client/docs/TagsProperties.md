# TagsProperties

This contains the properties of the tags in a tagsList.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This is the name of the tag. It is equivalent to the key in the key-value pair format. | [optional] 
**value** | **str** | This is the value of the tag. It is, as expected, equivalent to the value in the key-value pair format. | [optional] 

## Example

```python
from openapi_client.models.tags_properties import TagsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TagsProperties from a JSON string
tags_properties_instance = TagsProperties.from_json(json)
# print the JSON string representation of the object
print(TagsProperties.to_json())

# convert the object into a dict
tags_properties_dict = tags_properties_instance.to_dict()
# create an instance of TagsProperties from a dict
tags_properties_from_dict = TagsProperties.from_dict(tags_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


