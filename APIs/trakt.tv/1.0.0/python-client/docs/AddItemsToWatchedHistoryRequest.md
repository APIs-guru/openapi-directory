# AddItemsToWatchedHistoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | [**List[AddItemsToWatchedHistoryRequestEpisodesInner]**](AddItemsToWatchedHistoryRequestEpisodesInner.md) |  | [optional] 
**movies** | [**List[AddItemsToWatchedHistoryRequestMoviesInner]**](AddItemsToWatchedHistoryRequestMoviesInner.md) |  | [optional] 
**seasons** | [**List[AddItemsToWatchedHistoryRequestSeasonsInner]**](AddItemsToWatchedHistoryRequestSeasonsInner.md) |  | [optional] 
**shows** | [**List[AddItemsToWatchedHistoryRequestShowsInner]**](AddItemsToWatchedHistoryRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_items_to_watched_history_request import AddItemsToWatchedHistoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToWatchedHistoryRequest from a JSON string
add_items_to_watched_history_request_instance = AddItemsToWatchedHistoryRequest.from_json(json)
# print the JSON string representation of the object
print(AddItemsToWatchedHistoryRequest.to_json())

# convert the object into a dict
add_items_to_watched_history_request_dict = add_items_to_watched_history_request_instance.to_dict()
# create an instance of AddItemsToWatchedHistoryRequest from a dict
add_items_to_watched_history_request_from_dict = AddItemsToWatchedHistoryRequest.from_dict(add_items_to_watched_history_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


