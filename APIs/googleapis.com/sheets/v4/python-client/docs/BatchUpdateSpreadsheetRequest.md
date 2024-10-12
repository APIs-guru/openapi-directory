# BatchUpdateSpreadsheetRequest

The request for updating any aspect of a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_spreadsheet_in_response** | **bool** | Determines if the update response should include the spreadsheet resource. | [optional] 
**requests** | [**List[Request]**](Request.md) | A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied. | [optional] 
**response_include_grid_data** | **bool** | True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is &#39;true&#39;. This parameter is ignored if a field mask was set in the request. | [optional] 
**response_ranges** | **List[str]** | Limits the ranges included in the response spreadsheet. Meaningful only if include_spreadsheet_in_response is &#39;true&#39;. | [optional] 

## Example

```python
from openapi_client.models.batch_update_spreadsheet_request import BatchUpdateSpreadsheetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateSpreadsheetRequest from a JSON string
batch_update_spreadsheet_request_instance = BatchUpdateSpreadsheetRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateSpreadsheetRequest.to_json())

# convert the object into a dict
batch_update_spreadsheet_request_dict = batch_update_spreadsheet_request_instance.to_dict()
# create an instance of BatchUpdateSpreadsheetRequest from a dict
batch_update_spreadsheet_request_from_dict = BatchUpdateSpreadsheetRequest.from_dict(batch_update_spreadsheet_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


