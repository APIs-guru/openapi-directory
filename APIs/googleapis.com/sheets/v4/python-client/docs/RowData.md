# RowData

Data about each cell in a row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[CellData]**](CellData.md) | The values in the row, one per column. | [optional] 

## Example

```python
from openapi_client.models.row_data import RowData

# TODO update the JSON string below
json = "{}"
# create an instance of RowData from a JSON string
row_data_instance = RowData.from_json(json)
# print the JSON string representation of the object
print(RowData.to_json())

# convert the object into a dict
row_data_dict = row_data_instance.to_dict()
# create an instance of RowData from a dict
row_data_from_dict = RowData.from_dict(row_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


