# GetSpreadsheetByDataFilterRequest

The request for retrieving a Spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filters** | [**List[DataFilter]**](DataFilter.md) | The DataFilters used to select which ranges to retrieve from the spreadsheet. | [optional] 
**include_grid_data** | **bool** | True if grid data should be returned. This parameter is ignored if a field mask was set in the request. | [optional] 

## Example

```python
from openapi_client.models.get_spreadsheet_by_data_filter_request import GetSpreadsheetByDataFilterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetSpreadsheetByDataFilterRequest from a JSON string
get_spreadsheet_by_data_filter_request_instance = GetSpreadsheetByDataFilterRequest.from_json(json)
# print the JSON string representation of the object
print(GetSpreadsheetByDataFilterRequest.to_json())

# convert the object into a dict
get_spreadsheet_by_data_filter_request_dict = get_spreadsheet_by_data_filter_request_instance.to_dict()
# create an instance of GetSpreadsheetByDataFilterRequest from a dict
get_spreadsheet_by_data_filter_request_from_dict = GetSpreadsheetByDataFilterRequest.from_dict(get_spreadsheet_by_data_filter_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


