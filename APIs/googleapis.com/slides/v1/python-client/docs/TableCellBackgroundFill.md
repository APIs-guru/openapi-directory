# TableCellBackgroundFill

The table cell background fill.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_state** | **str** | The background fill property state. Updating the fill on a table cell will implicitly update this field to &#x60;RENDERED&#x60;, unless another value is specified in the same request. To have no fill on a table cell, set this field to &#x60;NOT_RENDERED&#x60;. In this case, any other fill fields set in the same request will be ignored. | [optional] 
**solid_fill** | [**SolidFill**](SolidFill.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_cell_background_fill import TableCellBackgroundFill

# TODO update the JSON string below
json = "{}"
# create an instance of TableCellBackgroundFill from a JSON string
table_cell_background_fill_instance = TableCellBackgroundFill.from_json(json)
# print the JSON string representation of the object
print(TableCellBackgroundFill.to_json())

# convert the object into a dict
table_cell_background_fill_dict = table_cell_background_fill_instance.to_dict()
# create an instance of TableCellBackgroundFill from a dict
table_cell_background_fill_from_dict = TableCellBackgroundFill.from_dict(table_cell_background_fill_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


