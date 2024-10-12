# ListItem

A single list item in a note's list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checked** | **bool** | Whether this item has been checked off or not. | [optional] 
**child_list_items** | [**List[ListItem]**](ListItem.md) | If set, list of list items nested under this list item. Only one level of nesting is allowed. | [optional] 
**text** | [**TextContent**](TextContent.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_item import ListItem

# TODO update the JSON string below
json = "{}"
# create an instance of ListItem from a JSON string
list_item_instance = ListItem.from_json(json)
# print the JSON string representation of the object
print(ListItem.to_json())

# convert the object into a dict
list_item_dict = list_item_instance.to_dict()
# create an instance of ListItem from a dict
list_item_from_dict = ListItem.from_dict(list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


