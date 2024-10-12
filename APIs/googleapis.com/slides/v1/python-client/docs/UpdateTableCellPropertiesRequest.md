# UpdateTableCellPropertiesRequest

Update the properties of a TableCell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;tableCellProperties&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the table cell background solid fill color, set &#x60;fields&#x60; to &#x60;\&quot;tableCellBackgroundFill.solidFill.color\&quot;&#x60;. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. | [optional] 
**object_id** | **str** | The object ID of the table. | [optional] 
**table_cell_properties** | [**TableCellProperties**](TableCellProperties.md) |  | [optional] 
**table_range** | [**TableRange**](TableRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_table_cell_properties_request import UpdateTableCellPropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTableCellPropertiesRequest from a JSON string
update_table_cell_properties_request_instance = UpdateTableCellPropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTableCellPropertiesRequest.to_json())

# convert the object into a dict
update_table_cell_properties_request_dict = update_table_cell_properties_request_instance.to_dict()
# create an instance of UpdateTableCellPropertiesRequest from a dict
update_table_cell_properties_request_from_dict = UpdateTableCellPropertiesRequest.from_dict(update_table_cell_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


