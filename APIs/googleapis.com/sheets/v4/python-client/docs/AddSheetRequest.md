# AddSheetRequest

Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SheetProperties**](SheetProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_sheet_request import AddSheetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddSheetRequest from a JSON string
add_sheet_request_instance = AddSheetRequest.from_json(json)
# print the JSON string representation of the object
print(AddSheetRequest.to_json())

# convert the object into a dict
add_sheet_request_dict = add_sheet_request_instance.to_dict()
# create an instance of AddSheetRequest from a dict
add_sheet_request_from_dict = AddSheetRequest.from_dict(add_sheet_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


