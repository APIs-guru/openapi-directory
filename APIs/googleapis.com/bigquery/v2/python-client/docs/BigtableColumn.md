# BigtableColumn

Information related to a Bigtable column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | Optional. The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. &#39;encoding&#39; can also be set at the column family level. However, the setting at this level takes precedence if &#39;encoding&#39; is set at both levels. | [optional] 
**field_name** | **str** | Optional. If the qualifier is not a valid BigQuery field identifier i.e. does not match a-zA-Z*, a valid identifier must be provided as the column field name and is used as field name in queries. | [optional] 
**only_read_latest** | **bool** | Optional. If this is set, only the latest version of value in this column are exposed. &#39;onlyReadLatest&#39; can also be set at the column family level. However, the setting at this level takes precedence if &#39;onlyReadLatest&#39; is set at both levels. | [optional] 
**qualifier_encoded** | **bytearray** | [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match a-zA-Z*, a valid identifier must be provided as field_name. | [optional] 
**qualifier_string** | **str** | Qualifier string. | [optional] 
**type** | **str** | Optional. The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): * BYTES * STRING * INTEGER * FLOAT * BOOLEAN * JSON Default type is BYTES. &#39;type&#39; can also be set at the column family level. However, the setting at this level takes precedence if &#39;type&#39; is set at both levels. | [optional] 

## Example

```python
from openapi_client.models.bigtable_column import BigtableColumn

# TODO update the JSON string below
json = "{}"
# create an instance of BigtableColumn from a JSON string
bigtable_column_instance = BigtableColumn.from_json(json)
# print the JSON string representation of the object
print(BigtableColumn.to_json())

# convert the object into a dict
bigtable_column_dict = bigtable_column_instance.to_dict()
# create an instance of BigtableColumn from a dict
bigtable_column_from_dict = BigtableColumn.from_dict(bigtable_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


