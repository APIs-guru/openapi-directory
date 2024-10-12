# TagCollection

Paged Tag list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[TagListByProduct200ResponseValueInner]**](TagListByProduct200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.tag_collection import TagCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TagCollection from a JSON string
tag_collection_instance = TagCollection.from_json(json)
# print the JSON string representation of the object
print(TagCollection.to_json())

# convert the object into a dict
tag_collection_dict = tag_collection_instance.to_dict()
# create an instance of TagCollection from a dict
tag_collection_from_dict = TagCollection.from_dict(tag_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


