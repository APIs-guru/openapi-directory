# BatchUpdateSpreadsheetResponse

The reply for batch updating a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replies** | [**List[Response]**](Response.md) | The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty. | [optional] 
**spreadsheet_id** | **str** | The spreadsheet the updates were applied to. | [optional] 
**updated_spreadsheet** | [**Spreadsheet**](Spreadsheet.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_update_spreadsheet_response import BatchUpdateSpreadsheetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateSpreadsheetResponse from a JSON string
batch_update_spreadsheet_response_instance = BatchUpdateSpreadsheetResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateSpreadsheetResponse.to_json())

# convert the object into a dict
batch_update_spreadsheet_response_dict = batch_update_spreadsheet_response_instance.to_dict()
# create an instance of BatchUpdateSpreadsheetResponse from a dict
batch_update_spreadsheet_response_from_dict = BatchUpdateSpreadsheetResponse.from_dict(batch_update_spreadsheet_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


