# AppendCellsRequest

Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; &#39;row.values.&#39; should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**rows** | [**List[RowData]**](RowData.md) | The data to append. | [optional] 
**sheet_id** | **int** | The sheet ID to append the data to. | [optional] 

## Example

```python
from openapi_client.models.append_cells_request import AppendCellsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppendCellsRequest from a JSON string
append_cells_request_instance = AppendCellsRequest.from_json(json)
# print the JSON string representation of the object
print(AppendCellsRequest.to_json())

# convert the object into a dict
append_cells_request_dict = append_cells_request_instance.to_dict()
# create an instance of AppendCellsRequest from a dict
append_cells_request_from_dict = AppendCellsRequest.from_dict(append_cells_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


