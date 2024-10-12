# USqlProcedureList

A Data Lake Analytics catalog U-SQL procedure item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlProcedure]**](USqlProcedure.md) | the list of procedure in the database and schema combination | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_procedure_list import USqlProcedureList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlProcedureList from a JSON string
u_sql_procedure_list_instance = USqlProcedureList.from_json(json)
# print the JSON string representation of the object
print(USqlProcedureList.to_json())

# convert the object into a dict
u_sql_procedure_list_dict = u_sql_procedure_list_instance.to_dict()
# create an instance of USqlProcedureList from a dict
u_sql_procedure_list_from_dict = USqlProcedureList.from_dict(u_sql_procedure_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


