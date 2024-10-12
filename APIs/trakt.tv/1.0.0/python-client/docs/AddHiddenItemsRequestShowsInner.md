# AddHiddenItemsRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestShowsInnerIds**](AddItemsToCollectionRequestShowsInnerIds.md) |  | 
**seasons** | [**List[AddHiddenItemsRequestShowsInnerSeasonsInner]**](AddHiddenItemsRequestShowsInnerSeasonsInner.md) |  | [optional] 
**title** | **str** |  | 
**year** | **float** |  | 

## Example

```python
from openapi_client.models.add_hidden_items_request_shows_inner import AddHiddenItemsRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddHiddenItemsRequestShowsInner from a JSON string
add_hidden_items_request_shows_inner_instance = AddHiddenItemsRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(AddHiddenItemsRequestShowsInner.to_json())

# convert the object into a dict
add_hidden_items_request_shows_inner_dict = add_hidden_items_request_shows_inner_instance.to_dict()
# create an instance of AddHiddenItemsRequestShowsInner from a dict
add_hidden_items_request_shows_inner_from_dict = AddHiddenItemsRequestShowsInner.from_dict(add_hidden_items_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


