# AddHiddenItemsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**movies** | [**List[RemoveItemsFromCollectionRequestMoviesInner]**](RemoveItemsFromCollectionRequestMoviesInner.md) |  | [optional] 
**seasons** | [**List[AddHiddenItemsRequestSeasonsInner]**](AddHiddenItemsRequestSeasonsInner.md) |  | [optional] 
**shows** | [**List[AddHiddenItemsRequestShowsInner]**](AddHiddenItemsRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_hidden_items_request import AddHiddenItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddHiddenItemsRequest from a JSON string
add_hidden_items_request_instance = AddHiddenItemsRequest.from_json(json)
# print the JSON string representation of the object
print(AddHiddenItemsRequest.to_json())

# convert the object into a dict
add_hidden_items_request_dict = add_hidden_items_request_instance.to_dict()
# create an instance of AddHiddenItemsRequest from a dict
add_hidden_items_request_from_dict = AddHiddenItemsRequest.from_dict(add_hidden_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


