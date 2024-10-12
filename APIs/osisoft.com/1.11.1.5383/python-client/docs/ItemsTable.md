# ItemsTable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Table]**](Table.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_table import ItemsTable

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsTable from a JSON string
items_table_instance = ItemsTable.from_json(json)
# print the JSON string representation of the object
print(ItemsTable.to_json())

# convert the object into a dict
items_table_dict = items_table_instance.to_dict()
# create an instance of ItemsTable from a dict
items_table_from_dict = ItemsTable.from_dict(items_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


