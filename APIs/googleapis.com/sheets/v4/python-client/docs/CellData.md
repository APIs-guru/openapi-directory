# CellData

Data about a specific cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_formula** | [**DataSourceFormula**](DataSourceFormula.md) |  | [optional] 
**data_source_table** | [**DataSourceTable**](DataSourceTable.md) |  | [optional] 
**data_validation** | [**DataValidationRule**](DataValidationRule.md) |  | [optional] 
**effective_format** | [**CellFormat**](CellFormat.md) |  | [optional] 
**effective_value** | [**ExtendedValue**](ExtendedValue.md) |  | [optional] 
**formatted_value** | **str** | The formatted value of the cell. This is the value as it&#39;s shown to the user. This field is read-only. | [optional] 
**hyperlink** | **str** | A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a &#x60;&#x3D;HYPERLINK&#x60; formula in the userEnteredValue.formulaValue field. A cell-level link can also be set from the userEnteredFormat.textFormat field. Alternatively, set a hyperlink in the textFormatRun.format.link field that spans the entire cell. | [optional] 
**note** | **str** | Any note on the cell. | [optional] 
**pivot_table** | [**PivotTable**](PivotTable.md) |  | [optional] 
**text_format_runs** | [**List[TextFormatRun]**](TextFormatRun.md) | Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed. When writing, the new runs will overwrite any prior runs. When writing a new user_entered_value, previous runs are erased. | [optional] 
**user_entered_format** | [**CellFormat**](CellFormat.md) |  | [optional] 
**user_entered_value** | [**ExtendedValue**](ExtendedValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.cell_data import CellData

# TODO update the JSON string below
json = "{}"
# create an instance of CellData from a JSON string
cell_data_instance = CellData.from_json(json)
# print the JSON string representation of the object
print(CellData.to_json())

# convert the object into a dict
cell_data_dict = cell_data_instance.to_dict()
# create an instance of CellData from a dict
cell_data_from_dict = CellData.from_dict(cell_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


