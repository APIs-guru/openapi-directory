# TagsResource

A container holding only the Tags for a resource, allowing the user to update the tags on a QueryPack instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.tags_resource import TagsResource

# TODO update the JSON string below
json = "{}"
# create an instance of TagsResource from a JSON string
tags_resource_instance = TagsResource.from_json(json)
# print the JSON string representation of the object
print(TagsResource.to_json())

# convert the object into a dict
tags_resource_dict = tags_resource_instance.to_dict()
# create an instance of TagsResource from a dict
tags_resource_from_dict = TagsResource.from_dict(tags_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


