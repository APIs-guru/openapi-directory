# RepeatCellRequest

Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cell** | [**CellData**](CellData.md) |  | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;cell&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.repeat_cell_request import RepeatCellRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RepeatCellRequest from a JSON string
repeat_cell_request_instance = RepeatCellRequest.from_json(json)
# print the JSON string representation of the object
print(RepeatCellRequest.to_json())

# convert the object into a dict
repeat_cell_request_dict = repeat_cell_request_instance.to_dict()
# create an instance of RepeatCellRequest from a dict
repeat_cell_request_from_dict = RepeatCellRequest.from_dict(repeat_cell_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


