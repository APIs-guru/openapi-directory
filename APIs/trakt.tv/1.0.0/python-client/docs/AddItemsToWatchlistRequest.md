# AddItemsToWatchlistRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | [**List[AddItemsToCollectionRequestEpisodesInner]**](AddItemsToCollectionRequestEpisodesInner.md) |  | [optional] 
**movies** | [**List[AddItemsToPersonalRecommendationsRequestMoviesInner]**](AddItemsToPersonalRecommendationsRequestMoviesInner.md) |  | [optional] 
**seasons** | [**List[AddItemsToCollectionRequestSeasonsInner]**](AddItemsToCollectionRequestSeasonsInner.md) |  | [optional] 
**shows** | [**List[AddItemsToWatchlistRequestShowsInner]**](AddItemsToWatchlistRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_items_to_watchlist_request import AddItemsToWatchlistRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToWatchlistRequest from a JSON string
add_items_to_watchlist_request_instance = AddItemsToWatchlistRequest.from_json(json)
# print the JSON string representation of the object
print(AddItemsToWatchlistRequest.to_json())

# convert the object into a dict
add_items_to_watchlist_request_dict = add_items_to_watchlist_request_instance.to_dict()
# create an instance of AddItemsToWatchlistRequest from a dict
add_items_to_watchlist_request_from_dict = AddItemsToWatchlistRequest.from_dict(add_items_to_watchlist_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


