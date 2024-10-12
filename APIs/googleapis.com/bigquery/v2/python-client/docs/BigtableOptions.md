# BigtableOptions

Options specific to Google Cloud Bigtable data sources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_families** | [**List[BigtableColumnFamily]**](BigtableColumnFamily.md) | Optional. List of column families to expose in the table schema along with their types. This list restricts the column families that can be referenced in queries and specifies their value types. You can use this list to do type conversions - see the &#39;type&#39; field for more details. If you leave this list empty, all column families are present in the table schema and their values are read as BYTES. During a query only the column families referenced in that query are read from Bigtable. | [optional] 
**ignore_unspecified_column_families** | **bool** | Optional. If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false. | [optional] 
**output_column_families_as_json** | **bool** | Optional. If field is true, then each column family will be read as a single JSON column. Otherwise they are read as a repeated cell structure containing timestamp/value tuples. The default value is false. | [optional] 
**read_rowkey_as_string** | **bool** | Optional. If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false. | [optional] 

## Example

```python
from openapi_client.models.bigtable_options import BigtableOptions

# TODO update the JSON string below
json = "{}"
# create an instance of BigtableOptions from a JSON string
bigtable_options_instance = BigtableOptions.from_json(json)
# print the JSON string representation of the object
print(BigtableOptions.to_json())

# convert the object into a dict
bigtable_options_dict = bigtable_options_instance.to_dict()
# create an instance of BigtableOptions from a dict
bigtable_options_from_dict = BigtableOptions.from_dict(bigtable_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


