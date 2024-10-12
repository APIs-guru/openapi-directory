# USqlProcedure

A Data Lake Analytics catalog U-SQL procedure item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | the name of the database. | [optional] 
**definition** | **str** | the defined query of the procedure. | [optional] 
**proc_name** | **str** | the name of the procedure. | [optional] 
**schema_name** | **str** | the name of the schema associated with this procedure and database. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_procedure import USqlProcedure

# TODO update the JSON string below
json = "{}"
# create an instance of USqlProcedure from a JSON string
u_sql_procedure_instance = USqlProcedure.from_json(json)
# print the JSON string representation of the object
print(USqlProcedure.to_json())

# convert the object into a dict
u_sql_procedure_dict = u_sql_procedure_instance.to_dict()
# create an instance of USqlProcedure from a dict
u_sql_procedure_from_dict = USqlProcedure.from_dict(u_sql_procedure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


