# AddItemsToPersonalListRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddHiddenItemsRequestSeasonsInnerIds**](AddHiddenItemsRequestSeasonsInnerIds.md) |  | 
**notes** | **str** |  | [optional] 
**seasons** | [**List[RemoveItemsFromCollectionRequestShowsInnerSeasonsInner]**](RemoveItemsFromCollectionRequestShowsInnerSeasonsInner.md) |  | 

## Example

```python
from openapi_client.models.add_items_to_personal_list_request_shows_inner import AddItemsToPersonalListRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToPersonalListRequestShowsInner from a JSON string
add_items_to_personal_list_request_shows_inner_instance = AddItemsToPersonalListRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(AddItemsToPersonalListRequestShowsInner.to_json())

# convert the object into a dict
add_items_to_personal_list_request_shows_inner_dict = add_items_to_personal_list_request_shows_inner_instance.to_dict()
# create an instance of AddItemsToPersonalListRequestShowsInner from a dict
add_items_to_personal_list_request_shows_inner_from_dict = AddItemsToPersonalListRequestShowsInner.from_dict(add_items_to_personal_list_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


