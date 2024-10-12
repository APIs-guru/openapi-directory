# OracleSchema

Oracle schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oracle_tables** | [**List[OracleTable]**](OracleTable.md) | Tables in the schema. | [optional] 
**var_schema** | **str** | Schema name. | [optional] 

## Example

```python
from openapi_client.models.oracle_schema import OracleSchema

# TODO update the JSON string below
json = "{}"
# create an instance of OracleSchema from a JSON string
oracle_schema_instance = OracleSchema.from_json(json)
# print the JSON string representation of the object
print(OracleSchema.to_json())

# convert the object into a dict
oracle_schema_dict = oracle_schema_instance.to_dict()
# create an instance of OracleSchema from a dict
oracle_schema_from_dict = OracleSchema.from_dict(oracle_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


