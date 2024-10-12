# ListItemsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Item]**](Item.md) |  | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_items_response import ListItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListItemsResponse from a JSON string
list_items_response_instance = ListItemsResponse.from_json(json)
# print the JSON string representation of the object
print(ListItemsResponse.to_json())

# convert the object into a dict
list_items_response_dict = list_items_response_instance.to_dict()
# create an instance of ListItemsResponse from a dict
list_items_response_from_dict = ListItemsResponse.from_dict(list_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


