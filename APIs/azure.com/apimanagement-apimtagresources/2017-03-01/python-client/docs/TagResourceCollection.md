# TagResourceCollection

Paged Tag list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[TagResourceContract]**](TagResourceContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.tag_resource_collection import TagResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TagResourceCollection from a JSON string
tag_resource_collection_instance = TagResourceCollection.from_json(json)
# print the JSON string representation of the object
print(TagResourceCollection.to_json())

# convert the object into a dict
tag_resource_collection_dict = tag_resource_collection_instance.to_dict()
# create an instance of TagResourceCollection from a dict
tag_resource_collection_from_dict = TagResourceCollection.from_dict(tag_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


