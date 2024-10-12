# DuplicateSheetResponse

The result of duplicating a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SheetProperties**](SheetProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.duplicate_sheet_response import DuplicateSheetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DuplicateSheetResponse from a JSON string
duplicate_sheet_response_instance = DuplicateSheetResponse.from_json(json)
# print the JSON string representation of the object
print(DuplicateSheetResponse.to_json())

# convert the object into a dict
duplicate_sheet_response_dict = duplicate_sheet_response_instance.to_dict()
# create an instance of DuplicateSheetResponse from a dict
duplicate_sheet_response_from_dict = DuplicateSheetResponse.from_dict(duplicate_sheet_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


