# Tag

The key and value for a [tag](https://cloud.google.com/resource-manager/docs/tags/tags-overview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag_key** | **str** | TagKey namespaced name, in the format of {ORG_ID}/{TAG_KEY_SHORT_NAME}. | [optional] 
**tag_value** | **str** | TagValue namespaced name, in the format of {ORG_ID}/{TAG_KEY_SHORT_NAME}/{TAG_VALUE_SHORT_NAME}. | [optional] 
**tag_value_id** | **str** | TagValue ID, in the format of tagValues/{TAG_VALUE_ID}. | [optional] 

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


