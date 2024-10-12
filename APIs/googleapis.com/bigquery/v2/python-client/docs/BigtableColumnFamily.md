# BigtableColumnFamily

Information related to a Bigtable column family.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[BigtableColumn]**](BigtableColumn.md) | Optional. Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value) pairs. All columns whose qualifier matches a qualifier in this list can be accessed as .. Other columns can be accessed as a list through .Column field. | [optional] 
**encoding** | **str** | Optional. The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in &#39;columns&#39; and specifying an encoding for it. | [optional] 
**family_id** | **str** | Identifier of the column family. | [optional] 
**only_read_latest** | **bool** | Optional. If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in &#39;columns&#39; and specifying a different setting for that column. | [optional] 
**type** | **str** | Optional. The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): * BYTES * STRING * INTEGER * FLOAT * BOOLEAN * JSON Default type is BYTES. This can be overridden for a specific column by listing that column in &#39;columns&#39; and specifying a type for it. | [optional] 

## Example

```python
from openapi_client.models.bigtable_column_family import BigtableColumnFamily

# TODO update the JSON string below
json = "{}"
# create an instance of BigtableColumnFamily from a JSON string
bigtable_column_family_instance = BigtableColumnFamily.from_json(json)
# print the JSON string representation of the object
print(BigtableColumnFamily.to_json())

# convert the object into a dict
bigtable_column_family_dict = bigtable_column_family_instance.to_dict()
# create an instance of BigtableColumnFamily from a dict
bigtable_column_family_from_dict = BigtableColumnFamily.from_dict(bigtable_column_family_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


