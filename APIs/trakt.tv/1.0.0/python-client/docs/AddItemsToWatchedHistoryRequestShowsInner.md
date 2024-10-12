# AddItemsToWatchedHistoryRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestShowsInnerIds**](AddItemsToCollectionRequestShowsInnerIds.md) |  | 
**seasons** | [**List[AddItemsToWatchedHistoryRequestShowsInnerSeasonsInner]**](AddItemsToWatchedHistoryRequestShowsInnerSeasonsInner.md) |  | 
**title** | **str** |  | 
**year** | **float** |  | 

## Example

```python
from openapi_client.models.add_items_to_watched_history_request_shows_inner import AddItemsToWatchedHistoryRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToWatchedHistoryRequestShowsInner from a JSON string
add_items_to_watched_history_request_shows_inner_instance = AddItemsToWatchedHistoryRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(AddItemsToWatchedHistoryRequestShowsInner.to_json())

# convert the object into a dict
add_items_to_watched_history_request_shows_inner_dict = add_items_to_watched_history_request_shows_inner_instance.to_dict()
# create an instance of AddItemsToWatchedHistoryRequestShowsInner from a dict
add_items_to_watched_history_request_shows_inner_from_dict = AddItemsToWatchedHistoryRequestShowsInner.from_dict(add_items_to_watched_history_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


