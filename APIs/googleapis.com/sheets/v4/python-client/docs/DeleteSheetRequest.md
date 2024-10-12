# DeleteSheetRequest

Deletes the requested sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sheet_id** | **int** | The ID of the sheet to delete. If the sheet is of DATA_SOURCE type, the associated DataSource is also deleted. | [optional] 

## Example

```python
from openapi_client.models.delete_sheet_request import DeleteSheetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteSheetRequest from a JSON string
delete_sheet_request_instance = DeleteSheetRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteSheetRequest.to_json())

# convert the object into a dict
delete_sheet_request_dict = delete_sheet_request_instance.to_dict()
# create an instance of DeleteSheetRequest from a dict
delete_sheet_request_from_dict = DeleteSheetRequest.from_dict(delete_sheet_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


