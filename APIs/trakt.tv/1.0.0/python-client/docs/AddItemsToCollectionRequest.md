# AddItemsToCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | [**List[AddItemsToCollectionRequestEpisodesInner]**](AddItemsToCollectionRequestEpisodesInner.md) |  | [optional] 
**movies** | [**List[AddItemsToCollectionRequestMoviesInner]**](AddItemsToCollectionRequestMoviesInner.md) |  | [optional] 
**seasons** | [**List[AddItemsToCollectionRequestSeasonsInner]**](AddItemsToCollectionRequestSeasonsInner.md) |  | [optional] 
**shows** | [**List[AddItemsToCollectionRequestShowsInner]**](AddItemsToCollectionRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_items_to_collection_request import AddItemsToCollectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToCollectionRequest from a JSON string
add_items_to_collection_request_instance = AddItemsToCollectionRequest.from_json(json)
# print the JSON string representation of the object
print(AddItemsToCollectionRequest.to_json())

# convert the object into a dict
add_items_to_collection_request_dict = add_items_to_collection_request_instance.to_dict()
# create an instance of AddItemsToCollectionRequest from a dict
add_items_to_collection_request_from_dict = AddItemsToCollectionRequest.from_dict(add_items_to_collection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


