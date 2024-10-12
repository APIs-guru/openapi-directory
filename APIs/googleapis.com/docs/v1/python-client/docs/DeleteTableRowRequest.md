# DeleteTableRowRequest

Deletes a row from a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_cell_location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_table_row_request import DeleteTableRowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteTableRowRequest from a JSON string
delete_table_row_request_instance = DeleteTableRowRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteTableRowRequest.to_json())

# convert the object into a dict
delete_table_row_request_dict = delete_table_row_request_instance.to_dict()
# create an instance of DeleteTableRowRequest from a dict
delete_table_row_request_from_dict = DeleteTableRowRequest.from_dict(delete_table_row_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


