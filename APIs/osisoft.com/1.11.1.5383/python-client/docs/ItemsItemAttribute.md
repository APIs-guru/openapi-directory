# ItemsItemAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ItemAttribute]**](ItemAttribute.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_item_attribute import ItemsItemAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsItemAttribute from a JSON string
items_item_attribute_instance = ItemsItemAttribute.from_json(json)
# print the JSON string representation of the object
print(ItemsItemAttribute.to_json())

# convert the object into a dict
items_item_attribute_dict = items_item_attribute_instance.to_dict()
# create an instance of ItemsItemAttribute from a dict
items_item_attribute_from_dict = ItemsItemAttribute.from_dict(items_item_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


