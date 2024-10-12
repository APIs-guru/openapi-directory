# AddItemsToCollectionRequestMoviesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | **str** |  | [optional] 
**audio_channels** | **str** |  | [optional] 
**collected_at** | **str** |  | [optional] 
**hdr** | **str** |  | [optional] 
**ids** | [**CheckIntoAnItemRequestMovieIds**](CheckIntoAnItemRequestMovieIds.md) |  | 
**media_type** | **str** |  | [optional] 
**resolution** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**year** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.add_items_to_collection_request_movies_inner import AddItemsToCollectionRequestMoviesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToCollectionRequestMoviesInner from a JSON string
add_items_to_collection_request_movies_inner_instance = AddItemsToCollectionRequestMoviesInner.from_json(json)
# print the JSON string representation of the object
print(AddItemsToCollectionRequestMoviesInner.to_json())

# convert the object into a dict
add_items_to_collection_request_movies_inner_dict = add_items_to_collection_request_movies_inner_instance.to_dict()
# create an instance of AddItemsToCollectionRequestMoviesInner from a dict
add_items_to_collection_request_movies_inner_from_dict = AddItemsToCollectionRequestMoviesInner.from_dict(add_items_to_collection_request_movies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


