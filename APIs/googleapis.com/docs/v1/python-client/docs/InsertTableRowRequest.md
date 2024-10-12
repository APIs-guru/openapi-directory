# InsertTableRowRequest

Inserts an empty row into a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insert_below** | **bool** | Whether to insert new row below the reference cell location. - &#x60;True&#x60;: insert below the cell. - &#x60;False&#x60;: insert above the cell. | [optional] 
**table_cell_location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.insert_table_row_request import InsertTableRowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertTableRowRequest from a JSON string
insert_table_row_request_instance = InsertTableRowRequest.from_json(json)
# print the JSON string representation of the object
print(InsertTableRowRequest.to_json())

# convert the object into a dict
insert_table_row_request_dict = insert_table_row_request_instance.to_dict()
# create an instance of InsertTableRowRequest from a dict
insert_table_row_request_from_dict = InsertTableRowRequest.from_dict(insert_table_row_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


