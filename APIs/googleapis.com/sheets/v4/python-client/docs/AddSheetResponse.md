# AddSheetResponse

The result of adding a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SheetProperties**](SheetProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_sheet_response import AddSheetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddSheetResponse from a JSON string
add_sheet_response_instance = AddSheetResponse.from_json(json)
# print the JSON string representation of the object
print(AddSheetResponse.to_json())

# convert the object into a dict
add_sheet_response_dict = add_sheet_response_instance.to_dict()
# create an instance of AddSheetResponse from a dict
add_sheet_response_from_dict = AddSheetResponse.from_dict(add_sheet_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


