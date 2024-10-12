# TableBorderCell

The properties of each border cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 
**table_border_properties** | [**TableBorderProperties**](TableBorderProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_border_cell import TableBorderCell

# TODO update the JSON string below
json = "{}"
# create an instance of TableBorderCell from a JSON string
table_border_cell_instance = TableBorderCell.from_json(json)
# print the JSON string representation of the object
print(TableBorderCell.to_json())

# convert the object into a dict
table_border_cell_dict = table_border_cell_instance.to_dict()
# create an instance of TableBorderCell from a dict
table_border_cell_from_dict = TableBorderCell.from_dict(table_border_cell_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


