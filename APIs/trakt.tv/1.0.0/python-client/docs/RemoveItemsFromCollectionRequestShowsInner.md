# RemoveItemsFromCollectionRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestShowsInnerIds**](AddItemsToCollectionRequestShowsInnerIds.md) |  | 
**seasons** | [**List[RemoveItemsFromCollectionRequestShowsInnerSeasonsInner]**](RemoveItemsFromCollectionRequestShowsInnerSeasonsInner.md) |  | 
**title** | **str** |  | 
**year** | **float** |  | 

## Example

```python
from openapi_client.models.remove_items_from_collection_request_shows_inner import RemoveItemsFromCollectionRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveItemsFromCollectionRequestShowsInner from a JSON string
remove_items_from_collection_request_shows_inner_instance = RemoveItemsFromCollectionRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(RemoveItemsFromCollectionRequestShowsInner.to_json())

# convert the object into a dict
remove_items_from_collection_request_shows_inner_dict = remove_items_from_collection_request_shows_inner_instance.to_dict()
# create an instance of RemoveItemsFromCollectionRequestShowsInner from a dict
remove_items_from_collection_request_shows_inner_from_dict = RemoveItemsFromCollectionRequestShowsInner.from_dict(remove_items_from_collection_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


