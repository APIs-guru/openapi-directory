# PivotValue

The definition of how a value in a pivot table should be calculated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculated_display_type** | **str** | If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as \&quot;Show As\&quot; in the value section of a pivot table. | [optional] 
**data_source_column_reference** | [**DataSourceColumnReference**](DataSourceColumnReference.md) |  | [optional] 
**formula** | **str** | A custom formula to calculate the value. The formula must start with an &#x60;&#x3D;&#x60; character. | [optional] 
**name** | **str** | A name to use for the value. | [optional] 
**source_column_offset** | **int** | The column offset of the source range that this value reads from. For example, if the source was &#x60;C10:E15&#x60;, a &#x60;sourceColumnOffset&#x60; of &#x60;0&#x60; means this value refers to column &#x60;C&#x60;, whereas the offset &#x60;1&#x60; would refer to column &#x60;D&#x60;. | [optional] 
**summarize_function** | **str** | A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then &#x60;CUSTOM&#x60; is not supported. | [optional] 

## Example

```python
from openapi_client.models.pivot_value import PivotValue

# TODO update the JSON string below
json = "{}"
# create an instance of PivotValue from a JSON string
pivot_value_instance = PivotValue.from_json(json)
# print the JSON string representation of the object
print(PivotValue.to_json())

# convert the object into a dict
pivot_value_dict = pivot_value_instance.to_dict()
# create an instance of PivotValue from a dict
pivot_value_from_dict = PivotValue.from_dict(pivot_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


