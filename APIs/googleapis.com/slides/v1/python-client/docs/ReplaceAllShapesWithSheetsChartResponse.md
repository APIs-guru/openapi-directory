# ReplaceAllShapesWithSheetsChartResponse

The result of replacing shapes with a Google Sheets chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occurrences_changed** | **int** | The number of shapes replaced with charts. | [optional] 

## Example

```python
from openapi_client.models.replace_all_shapes_with_sheets_chart_response import ReplaceAllShapesWithSheetsChartResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceAllShapesWithSheetsChartResponse from a JSON string
replace_all_shapes_with_sheets_chart_response_instance = ReplaceAllShapesWithSheetsChartResponse.from_json(json)
# print the JSON string representation of the object
print(ReplaceAllShapesWithSheetsChartResponse.to_json())

# convert the object into a dict
replace_all_shapes_with_sheets_chart_response_dict = replace_all_shapes_with_sheets_chart_response_instance.to_dict()
# create an instance of ReplaceAllShapesWithSheetsChartResponse from a dict
replace_all_shapes_with_sheets_chart_response_from_dict = ReplaceAllShapesWithSheetsChartResponse.from_dict(replace_all_shapes_with_sheets_chart_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


