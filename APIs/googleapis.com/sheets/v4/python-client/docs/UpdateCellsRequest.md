# UpdateCellsRequest

Updates all cells in a range with new data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; &#39;row.values.&#39; should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**rows** | [**List[RowData]**](RowData.md) | The data to write. | [optional] 
**start** | [**GridCoordinate**](GridCoordinate.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_cells_request import UpdateCellsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCellsRequest from a JSON string
update_cells_request_instance = UpdateCellsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCellsRequest.to_json())

# convert the object into a dict
update_cells_request_dict = update_cells_request_instance.to_dict()
# create an instance of UpdateCellsRequest from a dict
update_cells_request_from_dict = UpdateCellsRequest.from_dict(update_cells_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


