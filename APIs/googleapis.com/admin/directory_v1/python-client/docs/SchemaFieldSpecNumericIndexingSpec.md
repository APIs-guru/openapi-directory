# SchemaFieldSpecNumericIndexingSpec

Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value** | **float** | Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant. | [optional] 
**min_value** | **float** | Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant. | [optional] 

## Example

```python
from openapi_client.models.schema_field_spec_numeric_indexing_spec import SchemaFieldSpecNumericIndexingSpec

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaFieldSpecNumericIndexingSpec from a JSON string
schema_field_spec_numeric_indexing_spec_instance = SchemaFieldSpecNumericIndexingSpec.from_json(json)
# print the JSON string representation of the object
print(SchemaFieldSpecNumericIndexingSpec.to_json())

# convert the object into a dict
schema_field_spec_numeric_indexing_spec_dict = schema_field_spec_numeric_indexing_spec_instance.to_dict()
# create an instance of SchemaFieldSpecNumericIndexingSpec from a dict
schema_field_spec_numeric_indexing_spec_from_dict = SchemaFieldSpecNumericIndexingSpec.from_dict(schema_field_spec_numeric_indexing_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


