# DataSourceTable

A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as \"Extract\" in the Sheets editor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_selection_type** | **str** | The type to select columns for the data source table. Defaults to SELECTED. | [optional] 
**columns** | [**List[DataSourceColumnReference]**](DataSourceColumnReference.md) | Columns selected for the data source table. The column_selection_type must be SELECTED. | [optional] 
**data_execution_status** | [**DataExecutionStatus**](DataExecutionStatus.md) |  | [optional] 
**data_source_id** | **str** | The ID of the data source the data source table is associated with. | [optional] 
**filter_specs** | [**List[FilterSpec]**](FilterSpec.md) | Filter specifications in the data source table. | [optional] 
**row_limit** | **int** | The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit. | [optional] 
**sort_specs** | [**List[SortSpec]**](SortSpec.md) | Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order. | [optional] 

## Example

```python
from openapi_client.models.data_source_table import DataSourceTable

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceTable from a JSON string
data_source_table_instance = DataSourceTable.from_json(json)
# print the JSON string representation of the object
print(DataSourceTable.to_json())

# convert the object into a dict
data_source_table_dict = data_source_table_instance.to_dict()
# create an instance of DataSourceTable from a dict
data_source_table_from_dict = DataSourceTable.from_dict(data_source_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


