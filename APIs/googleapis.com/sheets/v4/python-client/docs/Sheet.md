# Sheet

A sheet in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banded_ranges** | [**List[BandedRange]**](BandedRange.md) | The banded (alternating colors) ranges on this sheet. | [optional] 
**basic_filter** | [**BasicFilter**](BasicFilter.md) |  | [optional] 
**charts** | [**List[EmbeddedChart]**](EmbeddedChart.md) | The specifications of every chart on this sheet. | [optional] 
**column_groups** | [**List[DimensionGroup]**](DimensionGroup.md) | All column groups on this sheet, ordered by increasing range start index, then by group depth. | [optional] 
**conditional_formats** | [**List[ConditionalFormatRule]**](ConditionalFormatRule.md) | The conditional format rules in this sheet. | [optional] 
**data** | [**List[GridData]**](GridData.md) | Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing &#x60;Sheet1&#x60;, and the spreadsheet was requested with ranges &#x60;Sheet1!A1:C10&#x60; and &#x60;Sheet1!D15:E20&#x60;, then the first GridData will have a startRow/startColumn of &#x60;0&#x60;, while the second one will have &#x60;startRow 14&#x60; (zero-based row 15), and &#x60;startColumn 3&#x60; (zero-based column D). For a DATA_SOURCE sheet, you can not request a specific range, the GridData contains all the values. | [optional] 
**developer_metadata** | [**List[DeveloperMetadata]**](DeveloperMetadata.md) | The developer metadata associated with a sheet. | [optional] 
**filter_views** | [**List[FilterView]**](FilterView.md) | The filter views in this sheet. | [optional] 
**merges** | [**List[GridRange]**](GridRange.md) | The ranges that are merged together. | [optional] 
**properties** | [**SheetProperties**](SheetProperties.md) |  | [optional] 
**protected_ranges** | [**List[ProtectedRange]**](ProtectedRange.md) | The protected ranges in this sheet. | [optional] 
**row_groups** | [**List[DimensionGroup]**](DimensionGroup.md) | All row groups on this sheet, ordered by increasing range start index, then by group depth. | [optional] 
**slicers** | [**List[Slicer]**](Slicer.md) | The slicers on this sheet. | [optional] 

## Example

```python
from openapi_client.models.sheet import Sheet

# TODO update the JSON string below
json = "{}"
# create an instance of Sheet from a JSON string
sheet_instance = Sheet.from_json(json)
# print the JSON string representation of the object
print(Sheet.to_json())

# convert the object into a dict
sheet_dict = sheet_instance.to_dict()
# create an instance of Sheet from a dict
sheet_from_dict = Sheet.from_dict(sheet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


