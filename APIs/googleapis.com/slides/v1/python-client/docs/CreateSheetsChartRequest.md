# CreateSheetsChartRequest

Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_id** | **int** | The ID of the specific chart in the Google Sheets spreadsheet. | [optional] 
**element_properties** | [**PageElementProperties**](PageElementProperties.md) |  | [optional] 
**linking_mode** | **str** | The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked. | [optional] 
**object_id** | **str** | A user-supplied object ID. If specified, the ID must be unique among all pages and page elements in the presentation. The ID should start with a word character [a-zA-Z0-9_] and then followed by any number of the following characters [a-zA-Z0-9_-:]. The length of the ID should not be less than 5 or greater than 50. If empty, a unique identifier will be generated. | [optional] 
**spreadsheet_id** | **str** | The ID of the Google Sheets spreadsheet that contains the chart. You might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys). | [optional] 

## Example

```python
from openapi_client.models.create_sheets_chart_request import CreateSheetsChartRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSheetsChartRequest from a JSON string
create_sheets_chart_request_instance = CreateSheetsChartRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSheetsChartRequest.to_json())

# convert the object into a dict
create_sheets_chart_request_dict = create_sheets_chart_request_instance.to_dict()
# create an instance of CreateSheetsChartRequest from a dict
create_sheets_chart_request_from_dict = CreateSheetsChartRequest.from_dict(create_sheets_chart_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


