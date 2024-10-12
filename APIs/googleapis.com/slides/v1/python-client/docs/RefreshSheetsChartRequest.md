# RefreshSheetsChartRequest

Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the chart to refresh. | [optional] 

## Example

```python
from openapi_client.models.refresh_sheets_chart_request import RefreshSheetsChartRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshSheetsChartRequest from a JSON string
refresh_sheets_chart_request_instance = RefreshSheetsChartRequest.from_json(json)
# print the JSON string representation of the object
print(RefreshSheetsChartRequest.to_json())

# convert the object into a dict
refresh_sheets_chart_request_dict = refresh_sheets_chart_request_instance.to_dict()
# create an instance of RefreshSheetsChartRequest from a dict
refresh_sheets_chart_request_from_dict = RefreshSheetsChartRequest.from_dict(refresh_sheets_chart_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


