# DuplicateSheetRequest

Duplicates the contents of a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insert_sheet_index** | **int** | The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented. | [optional] 
**new_sheet_id** | **int** | If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative. | [optional] 
**new_sheet_name** | **str** | The name of the new sheet. If empty, a new name is chosen for you. | [optional] 
**source_sheet_id** | **int** | The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes. | [optional] 

## Example

```python
from openapi_client.models.duplicate_sheet_request import DuplicateSheetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DuplicateSheetRequest from a JSON string
duplicate_sheet_request_instance = DuplicateSheetRequest.from_json(json)
# print the JSON string representation of the object
print(DuplicateSheetRequest.to_json())

# convert the object into a dict
duplicate_sheet_request_dict = duplicate_sheet_request_instance.to_dict()
# create an instance of DuplicateSheetRequest from a dict
duplicate_sheet_request_from_dict = DuplicateSheetRequest.from_dict(duplicate_sheet_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


