# ItemsItemPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ItemPoint]**](ItemPoint.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_item_point import ItemsItemPoint

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsItemPoint from a JSON string
items_item_point_instance = ItemsItemPoint.from_json(json)
# print the JSON string representation of the object
print(ItemsItemPoint.to_json())

# convert the object into a dict
items_item_point_dict = items_item_point_instance.to_dict()
# create an instance of ItemsItemPoint from a dict
items_item_point_from_dict = ItemsItemPoint.from_dict(items_item_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


