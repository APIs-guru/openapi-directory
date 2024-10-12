# AddItemsToCollectionRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestShowsInnerIds**](AddItemsToCollectionRequestShowsInnerIds.md) |  | 
**seasons** | [**List[AddItemsToCollectionRequestShowsInnerSeasonsInner]**](AddItemsToCollectionRequestShowsInnerSeasonsInner.md) |  | 
**title** | **str** |  | 
**year** | **float** |  | 

## Example

```python
from openapi_client.models.add_items_to_collection_request_shows_inner import AddItemsToCollectionRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToCollectionRequestShowsInner from a JSON string
add_items_to_collection_request_shows_inner_instance = AddItemsToCollectionRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(AddItemsToCollectionRequestShowsInner.to_json())

# convert the object into a dict
add_items_to_collection_request_shows_inner_dict = add_items_to_collection_request_shows_inner_instance.to_dict()
# create an instance of AddItemsToCollectionRequestShowsInner from a dict
add_items_to_collection_request_shows_inner_from_dict = AddItemsToCollectionRequestShowsInner.from_dict(add_items_to_collection_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


