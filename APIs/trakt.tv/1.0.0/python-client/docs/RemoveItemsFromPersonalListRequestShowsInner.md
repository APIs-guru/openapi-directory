# RemoveItemsFromPersonalListRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddHiddenItemsRequestSeasonsInnerIds**](AddHiddenItemsRequestSeasonsInnerIds.md) |  | 
**seasons** | [**List[RemoveItemsFromCollectionRequestShowsInnerSeasonsInner]**](RemoveItemsFromCollectionRequestShowsInnerSeasonsInner.md) |  | 

## Example

```python
from openapi_client.models.remove_items_from_personal_list_request_shows_inner import RemoveItemsFromPersonalListRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveItemsFromPersonalListRequestShowsInner from a JSON string
remove_items_from_personal_list_request_shows_inner_instance = RemoveItemsFromPersonalListRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(RemoveItemsFromPersonalListRequestShowsInner.to_json())

# convert the object into a dict
remove_items_from_personal_list_request_shows_inner_dict = remove_items_from_personal_list_request_shows_inner_instance.to_dict()
# create an instance of RemoveItemsFromPersonalListRequestShowsInner from a dict
remove_items_from_personal_list_request_shows_inner_from_dict = RemoveItemsFromPersonalListRequestShowsInner.from_dict(remove_items_from_personal_list_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


