# InsertTableRowsRequest

Inserts rows into a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cell_location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 
**insert_below** | **bool** | Whether to insert new rows below the reference cell location. - &#x60;True&#x60;: insert below the cell. - &#x60;False&#x60;: insert above the cell. | [optional] 
**number** | **int** | The number of rows to be inserted. Maximum 20 per request. | [optional] 
**table_object_id** | **str** | The table to insert rows into. | [optional] 

## Example

```python
from openapi_client.models.insert_table_rows_request import InsertTableRowsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertTableRowsRequest from a JSON string
insert_table_rows_request_instance = InsertTableRowsRequest.from_json(json)
# print the JSON string representation of the object
print(InsertTableRowsRequest.to_json())

# convert the object into a dict
insert_table_rows_request_dict = insert_table_rows_request_instance.to_dict()
# create an instance of InsertTableRowsRequest from a dict
insert_table_rows_request_from_dict = InsertTableRowsRequest.from_dict(insert_table_rows_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


