# InsertTableColumnRequest

Inserts an empty column into a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insert_right** | **bool** | Whether to insert new column to the right of the reference cell location. - &#x60;True&#x60;: insert to the right. - &#x60;False&#x60;: insert to the left. | [optional] 
**table_cell_location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.insert_table_column_request import InsertTableColumnRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertTableColumnRequest from a JSON string
insert_table_column_request_instance = InsertTableColumnRequest.from_json(json)
# print the JSON string representation of the object
print(InsertTableColumnRequest.to_json())

# convert the object into a dict
insert_table_column_request_dict = insert_table_column_request_instance.to_dict()
# create an instance of InsertTableColumnRequest from a dict
insert_table_column_request_from_dict = InsertTableColumnRequest.from_dict(insert_table_column_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


