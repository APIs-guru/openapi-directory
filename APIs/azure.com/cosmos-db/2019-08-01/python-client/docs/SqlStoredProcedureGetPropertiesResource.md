# SqlStoredProcedureGetPropertiesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body of the Stored Procedure | [optional] 
**id** | **str** | Name of the Cosmos DB SQL storedProcedure | 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] [readonly] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] [readonly] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_stored_procedure_get_properties_resource import SqlStoredProcedureGetPropertiesResource

# TODO update the JSON string below
json = "{}"
# create an instance of SqlStoredProcedureGetPropertiesResource from a JSON string
sql_stored_procedure_get_properties_resource_instance = SqlStoredProcedureGetPropertiesResource.from_json(json)
# print the JSON string representation of the object
print(SqlStoredProcedureGetPropertiesResource.to_json())

# convert the object into a dict
sql_stored_procedure_get_properties_resource_dict = sql_stored_procedure_get_properties_resource_instance.to_dict()
# create an instance of SqlStoredProcedureGetPropertiesResource from a dict
sql_stored_procedure_get_properties_resource_from_dict = SqlStoredProcedureGetPropertiesResource.from_dict(sql_stored_procedure_get_properties_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


