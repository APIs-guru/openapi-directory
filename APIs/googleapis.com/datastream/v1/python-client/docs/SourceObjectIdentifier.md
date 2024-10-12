# SourceObjectIdentifier

Represents an identifier of an object in the data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_identifier** | [**MysqlObjectIdentifier**](MysqlObjectIdentifier.md) |  | [optional] 
**oracle_identifier** | [**OracleObjectIdentifier**](OracleObjectIdentifier.md) |  | [optional] 
**postgresql_identifier** | [**PostgresqlObjectIdentifier**](PostgresqlObjectIdentifier.md) |  | [optional] 
**sql_server_identifier** | [**SqlServerObjectIdentifier**](SqlServerObjectIdentifier.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_object_identifier import SourceObjectIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of SourceObjectIdentifier from a JSON string
source_object_identifier_instance = SourceObjectIdentifier.from_json(json)
# print the JSON string representation of the object
print(SourceObjectIdentifier.to_json())

# convert the object into a dict
source_object_identifier_dict = source_object_identifier_instance.to_dict()
# create an instance of SourceObjectIdentifier from a dict
source_object_identifier_from_dict = SourceObjectIdentifier.from_dict(source_object_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


