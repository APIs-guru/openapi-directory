# TagsCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Tag]**](Tag.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.tags_collection import TagsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TagsCollection from a JSON string
tags_collection_instance = TagsCollection.from_json(json)
# print the JSON string representation of the object
print(TagsCollection.to_json())

# convert the object into a dict
tags_collection_dict = tags_collection_instance.to_dict()
# create an instance of TagsCollection from a dict
tags_collection_from_dict = TagsCollection.from_dict(tags_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


