# USqlTableValuedFunctionList

A Data Lake Analytics catalog U-SQL table valued function item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlTableValuedFunction]**](USqlTableValuedFunction.md) | the list of table valued functions in the database and schema combination | [optional] [readonly] 
**count** | **int** | the count of items in the list. | [optional] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_valued_function_list import USqlTableValuedFunctionList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTableValuedFunctionList from a JSON string
u_sql_table_valued_function_list_instance = USqlTableValuedFunctionList.from_json(json)
# print the JSON string representation of the object
print(USqlTableValuedFunctionList.to_json())

# convert the object into a dict
u_sql_table_valued_function_list_dict = u_sql_table_valued_function_list_instance.to_dict()
# create an instance of USqlTableValuedFunctionList from a dict
u_sql_table_valued_function_list_from_dict = USqlTableValuedFunctionList.from_dict(u_sql_table_valued_function_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


