# SheetProperties

Properties of a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_sheet_properties** | [**DataSourceSheetProperties**](DataSourceSheetProperties.md) |  | [optional] 
**grid_properties** | [**GridProperties**](GridProperties.md) |  | [optional] 
**hidden** | **bool** | True if the sheet is hidden in the UI, false if it&#39;s visible. | [optional] 
**index** | **int** | The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in \&quot;before the move\&quot; indexes. For example, if there were three sheets (S1, S2, S3) in order to move S1 ahead of S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to the sheets current index or if the requested new index is equal to the current sheet index + 1. | [optional] 
**right_to_left** | **bool** | True if the sheet is an RTL sheet instead of an LTR sheet. | [optional] 
**sheet_id** | **int** | The ID of the sheet. Must be non-negative. This field cannot be changed once set. | [optional] 
**sheet_type** | **str** | The type of sheet. Defaults to GRID. This field cannot be changed once set. | [optional] 
**tab_color** | [**Color**](Color.md) |  | [optional] 
**tab_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**title** | **str** | The name of the sheet. | [optional] 

## Example

```python
from openapi_client.models.sheet_properties import SheetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SheetProperties from a JSON string
sheet_properties_instance = SheetProperties.from_json(json)
# print the JSON string representation of the object
print(SheetProperties.to_json())

# convert the object into a dict
sheet_properties_dict = sheet_properties_instance.to_dict()
# create an instance of SheetProperties from a dict
sheet_properties_from_dict = SheetProperties.from_dict(sheet_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


