# RemoveItemsFromCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | [**List[AddItemsToCollectionRequestEpisodesInner]**](AddItemsToCollectionRequestEpisodesInner.md) |  | [optional] 
**movies** | [**List[RemoveItemsFromCollectionRequestMoviesInner]**](RemoveItemsFromCollectionRequestMoviesInner.md) |  | [optional] 
**seasons** | [**List[AddItemsToCollectionRequestSeasonsInner]**](AddItemsToCollectionRequestSeasonsInner.md) |  | [optional] 
**shows** | [**List[RemoveItemsFromCollectionRequestShowsInner]**](RemoveItemsFromCollectionRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.remove_items_from_collection_request import RemoveItemsFromCollectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveItemsFromCollectionRequest from a JSON string
remove_items_from_collection_request_instance = RemoveItemsFromCollectionRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveItemsFromCollectionRequest.to_json())

# convert the object into a dict
remove_items_from_collection_request_dict = remove_items_from_collection_request_instance.to_dict()
# create an instance of RemoveItemsFromCollectionRequest from a dict
remove_items_from_collection_request_from_dict = RemoveItemsFromCollectionRequest.from_dict(remove_items_from_collection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


