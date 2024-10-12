# InsertTableColumnsRequest

Inserts columns into a table. Other columns in the table will be resized to fit the new column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cell_location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 
**insert_right** | **bool** | Whether to insert new columns to the right of the reference cell location. - &#x60;True&#x60;: insert to the right. - &#x60;False&#x60;: insert to the left. | [optional] 
**number** | **int** | The number of columns to be inserted. Maximum 20 per request. | [optional] 
**table_object_id** | **str** | The table to insert columns into. | [optional] 

## Example

```python
from openapi_client.models.insert_table_columns_request import InsertTableColumnsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertTableColumnsRequest from a JSON string
insert_table_columns_request_instance = InsertTableColumnsRequest.from_json(json)
# print the JSON string representation of the object
print(InsertTableColumnsRequest.to_json())

# convert the object into a dict
insert_table_columns_request_dict = insert_table_columns_request_instance.to_dict()
# create an instance of InsertTableColumnsRequest from a dict
insert_table_columns_request_from_dict = InsertTableColumnsRequest.from_dict(insert_table_columns_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


