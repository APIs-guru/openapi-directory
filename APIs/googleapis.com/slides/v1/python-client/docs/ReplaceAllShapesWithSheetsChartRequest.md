# ReplaceAllShapesWithSheetsChartRequest

Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_id** | **int** | The ID of the specific chart in the Google Sheets spreadsheet. | [optional] 
**contains_text** | [**SubstringMatchCriteria**](SubstringMatchCriteria.md) |  | [optional] 
**linking_mode** | **str** | The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked. | [optional] 
**page_object_ids** | **List[str]** | If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn&#39;t exist in the presentation. | [optional] 
**spreadsheet_id** | **str** | The ID of the Google Sheets spreadsheet that contains the chart. | [optional] 

## Example

```python
from openapi_client.models.replace_all_shapes_with_sheets_chart_request import ReplaceAllShapesWithSheetsChartRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceAllShapesWithSheetsChartRequest from a JSON string
replace_all_shapes_with_sheets_chart_request_instance = ReplaceAllShapesWithSheetsChartRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceAllShapesWithSheetsChartRequest.to_json())

# convert the object into a dict
replace_all_shapes_with_sheets_chart_request_dict = replace_all_shapes_with_sheets_chart_request_instance.to_dict()
# create an instance of ReplaceAllShapesWithSheetsChartRequest from a dict
replace_all_shapes_with_sheets_chart_request_from_dict = ReplaceAllShapesWithSheetsChartRequest.from_dict(replace_all_shapes_with_sheets_chart_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


