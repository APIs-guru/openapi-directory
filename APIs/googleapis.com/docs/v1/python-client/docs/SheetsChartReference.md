# SheetsChartReference

A reference to a linked chart embedded from Google Sheets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_id** | **int** | The ID of the specific chart in the Google Sheets spreadsheet that&#39;s embedded. | [optional] 
**spreadsheet_id** | **str** | The ID of the Google Sheets spreadsheet that contains the source chart. | [optional] 

## Example

```python
from openapi_client.models.sheets_chart_reference import SheetsChartReference

# TODO update the JSON string below
json = "{}"
# create an instance of SheetsChartReference from a JSON string
sheets_chart_reference_instance = SheetsChartReference.from_json(json)
# print the JSON string representation of the object
print(SheetsChartReference.to_json())

# convert the object into a dict
sheets_chart_reference_dict = sheets_chart_reference_instance.to_dict()
# create an instance of SheetsChartReference from a dict
sheets_chart_reference_from_dict = SheetsChartReference.from_dict(sheets_chart_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


