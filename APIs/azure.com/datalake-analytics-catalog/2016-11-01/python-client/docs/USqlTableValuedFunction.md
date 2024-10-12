# USqlTableValuedFunction

A Data Lake Analytics catalog U-SQL table valued function item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | the name of the database. | [optional] 
**definition** | **str** | the definition of the table valued function. | [optional] 
**schema_name** | **str** | the name of the schema associated with this database. | [optional] 
**tvf_name** | **str** | the name of the table valued function. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_valued_function import USqlTableValuedFunction

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTableValuedFunction from a JSON string
u_sql_table_valued_function_instance = USqlTableValuedFunction.from_json(json)
# print the JSON string representation of the object
print(USqlTableValuedFunction.to_json())

# convert the object into a dict
u_sql_table_valued_function_dict = u_sql_table_valued_function_instance.to_dict()
# create an instance of USqlTableValuedFunction from a dict
u_sql_table_valued_function_from_dict = USqlTableValuedFunction.from_dict(u_sql_table_valued_function_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


