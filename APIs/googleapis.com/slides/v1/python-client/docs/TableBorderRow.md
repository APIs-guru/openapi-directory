# TableBorderRow

Contents of each border row in a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_border_cells** | [**List[TableBorderCell]**](TableBorderCell.md) | Properties of each border cell. When a border&#39;s adjacent table cells are merged, it is not included in the response. | [optional] 

## Example

```python
from openapi_client.models.table_border_row import TableBorderRow

# TODO update the JSON string below
json = "{}"
# create an instance of TableBorderRow from a JSON string
table_border_row_instance = TableBorderRow.from_json(json)
# print the JSON string representation of the object
print(TableBorderRow.to_json())

# convert the object into a dict
table_border_row_dict = table_border_row_instance.to_dict()
# create an instance of TableBorderRow from a dict
table_border_row_from_dict = TableBorderRow.from_dict(table_border_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


