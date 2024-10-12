# TagsObject

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.tags_object import TagsObject

# TODO update the JSON string below
json = "{}"
# create an instance of TagsObject from a JSON string
tags_object_instance = TagsObject.from_json(json)
# print the JSON string representation of the object
print(TagsObject.to_json())

# convert the object into a dict
tags_object_dict = tags_object_instance.to_dict()
# create an instance of TagsObject from a dict
tags_object_from_dict = TagsObject.from_dict(tags_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


