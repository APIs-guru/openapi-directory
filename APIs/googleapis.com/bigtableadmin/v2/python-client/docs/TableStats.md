# TableStats

Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_cells_per_column** | **float** | How many cells are present per column (column family, column qualifier) combinations, averaged over all columns in all rows in the table. e.g. A table with 2 rows: * A row with 3 cells in \&quot;family:col\&quot; and 1 cell in \&quot;other:col\&quot; (4 cells / 2 columns) * A row with 1 cell in \&quot;family:col\&quot;, 7 cells in \&quot;family:other_col\&quot;, and 7 cells in \&quot;other:data\&quot; (15 cells / 3 columns) would report (4 + 15)/(2 + 3) &#x3D; 3.8 in this field. | [optional] 
**average_columns_per_row** | **float** | How many (column family, column qualifier) combinations are present per row in the table, averaged over all rows in the table. e.g. A table with 2 rows: * A row with cells in \&quot;family:col\&quot; and \&quot;other:col\&quot; (2 distinct columns) * A row with cells in \&quot;family:col\&quot;, \&quot;family:other_col\&quot;, and \&quot;other:data\&quot; (3 distinct columns) would report (2 + 3)/2 &#x3D; 2.5 in this field. | [optional] 
**logical_data_bytes** | **str** | This is roughly how many bytes would be needed to read the entire table (e.g. by streaming all contents out). | [optional] 
**row_count** | **str** | How many rows are in the table. | [optional] 

## Example

```python
from openapi_client.models.table_stats import TableStats

# TODO update the JSON string below
json = "{}"
# create an instance of TableStats from a JSON string
table_stats_instance = TableStats.from_json(json)
# print the JSON string representation of the object
print(TableStats.to_json())

# convert the object into a dict
table_stats_dict = table_stats_instance.to_dict()
# create an instance of TableStats from a dict
table_stats_from_dict = TableStats.from_dict(table_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


