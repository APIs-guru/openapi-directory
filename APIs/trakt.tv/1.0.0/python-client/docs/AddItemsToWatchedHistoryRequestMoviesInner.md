# AddItemsToWatchedHistoryRequestMoviesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**CheckIntoAnItemRequestMovieIds**](CheckIntoAnItemRequestMovieIds.md) |  | 
**title** | **str** |  | [optional] 
**watched_at** | **str** |  | [optional] 
**year** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.add_items_to_watched_history_request_movies_inner import AddItemsToWatchedHistoryRequestMoviesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToWatchedHistoryRequestMoviesInner from a JSON string
add_items_to_watched_history_request_movies_inner_instance = AddItemsToWatchedHistoryRequestMoviesInner.from_json(json)
# print the JSON string representation of the object
print(AddItemsToWatchedHistoryRequestMoviesInner.to_json())

# convert the object into a dict
add_items_to_watched_history_request_movies_inner_dict = add_items_to_watched_history_request_movies_inner_instance.to_dict()
# create an instance of AddItemsToWatchedHistoryRequestMoviesInner from a dict
add_items_to_watched_history_request_movies_inner_from_dict = AddItemsToWatchedHistoryRequestMoviesInner.from_dict(add_items_to_watched_history_request_movies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


