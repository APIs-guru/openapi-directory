# PostgresqlObjectIdentifier

PostgreSQL data source object identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | **str** | Required. The schema name. | [optional] 
**table** | **str** | Required. The table name. | [optional] 

## Example

```python
from openapi_client.models.postgresql_object_identifier import PostgresqlObjectIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of PostgresqlObjectIdentifier from a JSON string
postgresql_object_identifier_instance = PostgresqlObjectIdentifier.from_json(json)
# print the JSON string representation of the object
print(PostgresqlObjectIdentifier.to_json())

# convert the object into a dict
postgresql_object_identifier_dict = postgresql_object_identifier_instance.to_dict()
# create an instance of PostgresqlObjectIdentifier from a dict
postgresql_object_identifier_from_dict = PostgresqlObjectIdentifier.from_dict(postgresql_object_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


