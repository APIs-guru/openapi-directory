# DataTable

Information about the extracted table contained in a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cells** | [**List[DataTableCell]**](DataTableCell.md) | List of cells contained in the table. | 
**columns** | **int** | Number of columns. | 
**rows** | **int** | Number of rows. | 

## Example

```python
from openapi_client.models.data_table import DataTable

# TODO update the JSON string below
json = "{}"
# create an instance of DataTable from a JSON string
data_table_instance = DataTable.from_json(json)
# print the JSON string representation of the object
print(DataTable.to_json())

# convert the object into a dict
data_table_dict = data_table_instance.to_dict()
# create an instance of DataTable from a dict
data_table_from_dict = DataTable.from_dict(data_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


