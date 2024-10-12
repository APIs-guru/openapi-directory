# SqlStoredProcedureResource

Cosmos DB SQL storedProcedure resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body of the Stored Procedure | [optional] 
**id** | **str** | Name of the Cosmos DB SQL storedProcedure | 

## Example

```python
from openapi_client.models.sql_stored_procedure_resource import SqlStoredProcedureResource

# TODO update the JSON string below
json = "{}"
# create an instance of SqlStoredProcedureResource from a JSON string
sql_stored_procedure_resource_instance = SqlStoredProcedureResource.from_json(json)
# print the JSON string representation of the object
print(SqlStoredProcedureResource.to_json())

# convert the object into a dict
sql_stored_procedure_resource_dict = sql_stored_procedure_resource_instance.to_dict()
# create an instance of SqlStoredProcedureResource from a dict
sql_stored_procedure_resource_from_dict = SqlStoredProcedureResource.from_dict(sql_stored_procedure_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


