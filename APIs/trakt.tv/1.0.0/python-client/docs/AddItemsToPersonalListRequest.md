# AddItemsToPersonalListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | [**List[AddItemsToCollectionRequestEpisodesInner]**](AddItemsToCollectionRequestEpisodesInner.md) |  | [optional] 
**movies** | [**List[AddItemsToPersonalListRequestMoviesInner]**](AddItemsToPersonalListRequestMoviesInner.md) |  | [optional] 
**people** | [**List[AddItemsToPersonalListRequestPeopleInner]**](AddItemsToPersonalListRequestPeopleInner.md) |  | [optional] 
**seasons** | [**List[AddItemsToCollectionRequestSeasonsInner]**](AddItemsToCollectionRequestSeasonsInner.md) |  | [optional] 
**shows** | [**List[AddItemsToPersonalListRequestShowsInner]**](AddItemsToPersonalListRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_items_to_personal_list_request import AddItemsToPersonalListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToPersonalListRequest from a JSON string
add_items_to_personal_list_request_instance = AddItemsToPersonalListRequest.from_json(json)
# print the JSON string representation of the object
print(AddItemsToPersonalListRequest.to_json())

# convert the object into a dict
add_items_to_personal_list_request_dict = add_items_to_personal_list_request_instance.to_dict()
# create an instance of AddItemsToPersonalListRequest from a dict
add_items_to_personal_list_request_from_dict = AddItemsToPersonalListRequest.from_dict(add_items_to_personal_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


