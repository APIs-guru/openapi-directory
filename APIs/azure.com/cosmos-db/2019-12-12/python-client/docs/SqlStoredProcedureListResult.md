# SqlStoredProcedureListResult

The List operation response, that contains the storedProcedures and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SqlStoredProcedureGetResults]**](SqlStoredProcedureGetResults.md) | List of storedProcedures and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_stored_procedure_list_result import SqlStoredProcedureListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SqlStoredProcedureListResult from a JSON string
sql_stored_procedure_list_result_instance = SqlStoredProcedureListResult.from_json(json)
# print the JSON string representation of the object
print(SqlStoredProcedureListResult.to_json())

# convert the object into a dict
sql_stored_procedure_list_result_dict = sql_stored_procedure_list_result_instance.to_dict()
# create an instance of SqlStoredProcedureListResult from a dict
sql_stored_procedure_list_result_from_dict = SqlStoredProcedureListResult.from_dict(sql_stored_procedure_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


