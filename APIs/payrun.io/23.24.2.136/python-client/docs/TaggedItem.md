# TaggedItem

The tags' tagged item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.tagged_item import TaggedItem

# TODO update the JSON string below
json = "{}"
# create an instance of TaggedItem from a JSON string
tagged_item_instance = TaggedItem.from_json(json)
# print the JSON string representation of the object
print(TaggedItem.to_json())

# convert the object into a dict
tagged_item_dict = tagged_item_instance.to_dict()
# create an instance of TaggedItem from a dict
tagged_item_from_dict = TaggedItem.from_dict(tagged_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


