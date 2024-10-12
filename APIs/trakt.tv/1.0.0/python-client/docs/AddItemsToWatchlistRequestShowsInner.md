# AddItemsToWatchlistRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestShowsInnerIds**](AddItemsToCollectionRequestShowsInnerIds.md) |  | 
**notes** | **str** |  | [optional] 
**seasons** | [**List[RemoveItemsFromCollectionRequestShowsInnerSeasonsInner]**](RemoveItemsFromCollectionRequestShowsInnerSeasonsInner.md) |  | 
**title** | **str** |  | 
**year** | **float** |  | 

## Example

```python
from openapi_client.models.add_items_to_watchlist_request_shows_inner import AddItemsToWatchlistRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToWatchlistRequestShowsInner from a JSON string
add_items_to_watchlist_request_shows_inner_instance = AddItemsToWatchlistRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(AddItemsToWatchlistRequestShowsInner.to_json())

# convert the object into a dict
add_items_to_watchlist_request_shows_inner_dict = add_items_to_watchlist_request_shows_inner_instance.to_dict()
# create an instance of AddItemsToWatchlistRequestShowsInner from a dict
add_items_to_watchlist_request_shows_inner_from_dict = AddItemsToWatchlistRequestShowsInner.from_dict(add_items_to_watchlist_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


