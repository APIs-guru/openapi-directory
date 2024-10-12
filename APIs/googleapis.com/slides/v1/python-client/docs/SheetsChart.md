# SheetsChart

A PageElement kind representing a linked chart embedded from Google Sheets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_id** | **int** | The ID of the specific chart in the Google Sheets spreadsheet that is embedded. | [optional] 
**content_url** | **str** | The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation&#39;s sharing settings change. | [optional] 
**sheets_chart_properties** | [**SheetsChartProperties**](SheetsChartProperties.md) |  | [optional] 
**spreadsheet_id** | **str** | The ID of the Google Sheets spreadsheet that contains the source chart. | [optional] 

## Example

```python
from openapi_client.models.sheets_chart import SheetsChart

# TODO update the JSON string below
json = "{}"
# create an instance of SheetsChart from a JSON string
sheets_chart_instance = SheetsChart.from_json(json)
# print the JSON string representation of the object
print(SheetsChart.to_json())

# convert the object into a dict
sheets_chart_dict = sheets_chart_instance.to_dict()
# create an instance of SheetsChart from a dict
sheets_chart_from_dict = SheetsChart.from_dict(sheets_chart_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


