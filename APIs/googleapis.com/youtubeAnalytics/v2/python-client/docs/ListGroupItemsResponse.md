# ListGroupItemsResponse

Response message for GroupsService.ListGroupItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Errors**](Errors.md) |  | [optional] 
**etag** | **str** | The Etag of this resource. | [optional] 
**items** | [**List[GroupItem]**](GroupItem.md) | A list of groups that match the API request parameters. Each item in the list represents a &#x60;groupItem&#x60; resource. | [optional] 
**kind** | **str** | Identifies the API resource&#39;s type. The value will be &#x60;youtube#groupItemListResponse&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_group_items_response import ListGroupItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGroupItemsResponse from a JSON string
list_group_items_response_instance = ListGroupItemsResponse.from_json(json)
# print the JSON string representation of the object
print(ListGroupItemsResponse.to_json())

# convert the object into a dict
list_group_items_response_dict = list_group_items_response_instance.to_dict()
# create an instance of ListGroupItemsResponse from a dict
list_group_items_response_from_dict = ListGroupItemsResponse.from_dict(list_group_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


