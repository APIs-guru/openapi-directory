# CopySheetToAnotherSpreadsheetRequest

The request to copy a sheet across spreadsheets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_spreadsheet_id** | **str** | The ID of the spreadsheet to copy the sheet to. | [optional] 

## Example

```python
from openapi_client.models.copy_sheet_to_another_spreadsheet_request import CopySheetToAnotherSpreadsheetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CopySheetToAnotherSpreadsheetRequest from a JSON string
copy_sheet_to_another_spreadsheet_request_instance = CopySheetToAnotherSpreadsheetRequest.from_json(json)
# print the JSON string representation of the object
print(CopySheetToAnotherSpreadsheetRequest.to_json())

# convert the object into a dict
copy_sheet_to_another_spreadsheet_request_dict = copy_sheet_to_another_spreadsheet_request_instance.to_dict()
# create an instance of CopySheetToAnotherSpreadsheetRequest from a dict
copy_sheet_to_another_spreadsheet_request_from_dict = CopySheetToAnotherSpreadsheetRequest.from_dict(copy_sheet_to_another_spreadsheet_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


