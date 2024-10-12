# ColumnFamilyStats

Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_cells_per_column** | **float** | How many cells are present per column qualifier in this column family, averaged over all rows containing any column in the column family. e.g. For column family \&quot;family\&quot; in a table with 3 rows: * A row with 3 cells in \&quot;family:col\&quot; and 1 cell in \&quot;other:col\&quot; (3 cells / 1 column in \&quot;family\&quot;) * A row with 1 cell in \&quot;family:col\&quot;, 7 cells in \&quot;family:other_col\&quot;, and 7 cells in \&quot;other:data\&quot; (8 cells / 2 columns in \&quot;family\&quot;) * A row with 3 cells in \&quot;other:col\&quot; (0 columns in \&quot;family\&quot;, \&quot;family\&quot; not present) would report (3 + 8 + 0)/(1 + 2 + 0) &#x3D; 3.66 in this field. | [optional] 
**average_columns_per_row** | **float** | How many column qualifiers are present in this column family, averaged over all rows in the table. e.g. For column family \&quot;family\&quot; in a table with 3 rows: * A row with cells in \&quot;family:col\&quot; and \&quot;other:col\&quot; (1 column in \&quot;family\&quot;) * A row with cells in \&quot;family:col\&quot;, \&quot;family:other_col\&quot;, and \&quot;other:data\&quot; (2 columns in \&quot;family\&quot;) * A row with cells in \&quot;other:col\&quot; (0 columns in \&quot;family\&quot;, \&quot;family\&quot; not present) would report (1 + 2 + 0)/3 &#x3D; 1.5 in this field. | [optional] 
**logical_data_bytes** | **str** | How much space the data in the column family occupies. This is roughly how many bytes would be needed to read the contents of the entire column family (e.g. by streaming all contents out). | [optional] 

## Example

```python
from openapi_client.models.column_family_stats import ColumnFamilyStats

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnFamilyStats from a JSON string
column_family_stats_instance = ColumnFamilyStats.from_json(json)
# print the JSON string representation of the object
print(ColumnFamilyStats.to_json())

# convert the object into a dict
column_family_stats_dict = column_family_stats_instance.to_dict()
# create an instance of ColumnFamilyStats from a dict
column_family_stats_from_dict = ColumnFamilyStats.from_dict(column_family_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


