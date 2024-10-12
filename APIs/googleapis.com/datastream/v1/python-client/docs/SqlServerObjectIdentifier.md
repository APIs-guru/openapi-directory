# SqlServerObjectIdentifier

SQLServer data source object identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | **str** | Required. The schema name. | [optional] 
**table** | **str** | Required. The table name. | [optional] 

## Example

```python
from openapi_client.models.sql_server_object_identifier import SqlServerObjectIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerObjectIdentifier from a JSON string
sql_server_object_identifier_instance = SqlServerObjectIdentifier.from_json(json)
# print the JSON string representation of the object
print(SqlServerObjectIdentifier.to_json())

# convert the object into a dict
sql_server_object_identifier_dict = sql_server_object_identifier_instance.to_dict()
# create an instance of SqlServerObjectIdentifier from a dict
sql_server_object_identifier_from_dict = SqlServerObjectIdentifier.from_dict(sql_server_object_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


