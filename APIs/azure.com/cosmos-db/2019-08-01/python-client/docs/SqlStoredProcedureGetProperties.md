# SqlStoredProcedureGetProperties

The properties of an Azure Cosmos DB StoredProcedure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**SqlStoredProcedureGetPropertiesResource**](SqlStoredProcedureGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.sql_stored_procedure_get_properties import SqlStoredProcedureGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlStoredProcedureGetProperties from a JSON string
sql_stored_procedure_get_properties_instance = SqlStoredProcedureGetProperties.from_json(json)
# print the JSON string representation of the object
print(SqlStoredProcedureGetProperties.to_json())

# convert the object into a dict
sql_stored_procedure_get_properties_dict = sql_stored_procedure_get_properties_instance.to_dict()
# create an instance of SqlStoredProcedureGetProperties from a dict
sql_stored_procedure_get_properties_from_dict = SqlStoredProcedureGetProperties.from_dict(sql_stored_procedure_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


