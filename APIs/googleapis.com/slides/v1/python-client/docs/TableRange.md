# TableRange

A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_span** | **int** | The column span of the table range. | [optional] 
**location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 
**row_span** | **int** | The row span of the table range. | [optional] 

## Example

```python
from openapi_client.models.table_range import TableRange

# TODO update the JSON string below
json = "{}"
# create an instance of TableRange from a JSON string
table_range_instance = TableRange.from_json(json)
# print the JSON string representation of the object
print(TableRange.to_json())

# convert the object into a dict
table_range_dict = table_range_instance.to_dict()
# create an instance of TableRange from a dict
table_range_from_dict = TableRange.from_dict(table_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


