# ItemsItemElement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ItemElement]**](ItemElement.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_item_element import ItemsItemElement

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsItemElement from a JSON string
items_item_element_instance = ItemsItemElement.from_json(json)
# print the JSON string representation of the object
print(ItemsItemElement.to_json())

# convert the object into a dict
items_item_element_dict = items_item_element_instance.to_dict()
# create an instance of ItemsItemElement from a dict
items_item_element_from_dict = ItemsItemElement.from_dict(items_item_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


