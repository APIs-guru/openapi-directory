# ReportRowDimensionValue

Representation of a dimension value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_label** | **str** | The localized string representation of the value. If unspecified, the display label should be derived from the value. | [optional] 
**value** | **str** | Dimension value in the format specified in the report&#39;s spec Dimension enum. | [optional] 

## Example

```python
from openapi_client.models.report_row_dimension_value import ReportRowDimensionValue

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRowDimensionValue from a JSON string
report_row_dimension_value_instance = ReportRowDimensionValue.from_json(json)
# print the JSON string representation of the object
print(ReportRowDimensionValue.to_json())

# convert the object into a dict
report_row_dimension_value_dict = report_row_dimension_value_instance.to_dict()
# create an instance of ReportRowDimensionValue from a dict
report_row_dimension_value_from_dict = ReportRowDimensionValue.from_dict(report_row_dimension_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


