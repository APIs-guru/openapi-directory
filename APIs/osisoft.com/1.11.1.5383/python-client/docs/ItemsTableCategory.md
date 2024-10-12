# ItemsTableCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[TableCategory]**](TableCategory.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_table_category import ItemsTableCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsTableCategory from a JSON string
items_table_category_instance = ItemsTableCategory.from_json(json)
# print the JSON string representation of the object
print(ItemsTableCategory.to_json())

# convert the object into a dict
items_table_category_dict = items_table_category_instance.to_dict()
# create an instance of ItemsTableCategory from a dict
items_table_category_from_dict = ItemsTableCategory.from_dict(items_table_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


