# RemoveItemsFromPersonalListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | [**List[AddItemsToCollectionRequestEpisodesInner]**](AddItemsToCollectionRequestEpisodesInner.md) |  | [optional] 
**movies** | [**List[RemoveItemsFromPersonalListRequestMoviesInner]**](RemoveItemsFromPersonalListRequestMoviesInner.md) |  | [optional] 
**people** | [**List[AddItemsToPersonalListRequestPeopleInner]**](AddItemsToPersonalListRequestPeopleInner.md) |  | [optional] 
**seasons** | [**List[AddItemsToCollectionRequestSeasonsInner]**](AddItemsToCollectionRequestSeasonsInner.md) |  | [optional] 
**shows** | [**List[RemoveItemsFromPersonalListRequestShowsInner]**](RemoveItemsFromPersonalListRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.remove_items_from_personal_list_request import RemoveItemsFromPersonalListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveItemsFromPersonalListRequest from a JSON string
remove_items_from_personal_list_request_instance = RemoveItemsFromPersonalListRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveItemsFromPersonalListRequest.to_json())

# convert the object into a dict
remove_items_from_personal_list_request_dict = remove_items_from_personal_list_request_instance.to_dict()
# create an instance of RemoveItemsFromPersonalListRequest from a dict
remove_items_from_personal_list_request_from_dict = RemoveItemsFromPersonalListRequest.from_dict(remove_items_from_personal_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


