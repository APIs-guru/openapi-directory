# UpdateTableCellStyleRequest

Updates the style of a range of table cells.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;tableCellStyle&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the table cell background color, set &#x60;fields&#x60; to &#x60;\&quot;backgroundColor\&quot;&#x60;. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. | [optional] 
**table_cell_style** | [**TableCellStyle**](TableCellStyle.md) |  | [optional] 
**table_range** | [**TableRange**](TableRange.md) |  | [optional] 
**table_start_location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_table_cell_style_request import UpdateTableCellStyleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTableCellStyleRequest from a JSON string
update_table_cell_style_request_instance = UpdateTableCellStyleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTableCellStyleRequest.to_json())

# convert the object into a dict
update_table_cell_style_request_dict = update_table_cell_style_request_instance.to_dict()
# create an instance of UpdateTableCellStyleRequest from a dict
update_table_cell_style_request_from_dict = UpdateTableCellStyleRequest.from_dict(update_table_cell_style_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


