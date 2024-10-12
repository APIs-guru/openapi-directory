# TableCellProperties

The properties of the TableCell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_alignment** | **str** | The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor. | [optional] 
**table_cell_background_fill** | [**TableCellBackgroundFill**](TableCellBackgroundFill.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_cell_properties import TableCellProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableCellProperties from a JSON string
table_cell_properties_instance = TableCellProperties.from_json(json)
# print the JSON string representation of the object
print(TableCellProperties.to_json())

# convert the object into a dict
table_cell_properties_dict = table_cell_properties_instance.to_dict()
# create an instance of TableCellProperties from a dict
table_cell_properties_from_dict = TableCellProperties.from_dict(table_cell_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


