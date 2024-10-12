# RemoveItemsFromCollectionRequestMoviesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**CheckIntoAnItemRequestMovieIds**](CheckIntoAnItemRequestMovieIds.md) |  | 
**title** | **str** |  | [optional] 
**year** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.remove_items_from_collection_request_movies_inner import RemoveItemsFromCollectionRequestMoviesInner

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveItemsFromCollectionRequestMoviesInner from a JSON string
remove_items_from_collection_request_movies_inner_instance = RemoveItemsFromCollectionRequestMoviesInner.from_json(json)
# print the JSON string representation of the object
print(RemoveItemsFromCollectionRequestMoviesInner.to_json())

# convert the object into a dict
remove_items_from_collection_request_movies_inner_dict = remove_items_from_collection_request_movies_inner_instance.to_dict()
# create an instance of RemoveItemsFromCollectionRequestMoviesInner from a dict
remove_items_from_collection_request_movies_inner_from_dict = RemoveItemsFromCollectionRequestMoviesInner.from_dict(remove_items_from_collection_request_movies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


