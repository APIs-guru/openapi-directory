# TableFieldSchema

A field in TableSchema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 128 characters. | [optional] 
**fields** | [**List[TableFieldSchema]**](TableFieldSchema.md) | Describes the nested schema fields if the type property is set to RECORD. | [optional] 
**mode** | **str** | The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE. | [optional] 
**type** | **str** | The field data type. Possible values include * STRING * BYTES * INTEGER * FLOAT * BOOLEAN * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY, * NUMERIC, * BIGNUMERIC, * RECORD (where RECORD indicates that the field contains a nested schema). | [optional] 

## Example

```python
from openapi_client.models.table_field_schema import TableFieldSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TableFieldSchema from a JSON string
table_field_schema_instance = TableFieldSchema.from_json(json)
# print the JSON string representation of the object
print(TableFieldSchema.to_json())

# convert the object into a dict
table_field_schema_dict = table_field_schema_instance.to_dict()
# create an instance of TableFieldSchema from a dict
table_field_schema_from_dict = TableFieldSchema.from_dict(table_field_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


