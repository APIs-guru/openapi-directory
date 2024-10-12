# DeleteTableColumnRequest

Deletes a column from a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cell_location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 
**table_object_id** | **str** | The table to delete columns from. | [optional] 

## Example

```python
from openapi_client.models.delete_table_column_request import DeleteTableColumnRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteTableColumnRequest from a JSON string
delete_table_column_request_instance = DeleteTableColumnRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteTableColumnRequest.to_json())

# convert the object into a dict
delete_table_column_request_dict = delete_table_column_request_instance.to_dict()
# create an instance of DeleteTableColumnRequest from a dict
delete_table_column_request_from_dict = DeleteTableColumnRequest.from_dict(delete_table_column_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


