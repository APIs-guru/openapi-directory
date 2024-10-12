# SqlUserDefinedFunctionListResult

The List operation response, that contains the userDefinedFunctions and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SqlUserDefinedFunctionGetResults]**](SqlUserDefinedFunctionGetResults.md) | List of userDefinedFunctions and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_user_defined_function_list_result import SqlUserDefinedFunctionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SqlUserDefinedFunctionListResult from a JSON string
sql_user_defined_function_list_result_instance = SqlUserDefinedFunctionListResult.from_json(json)
# print the JSON string representation of the object
print(SqlUserDefinedFunctionListResult.to_json())

# convert the object into a dict
sql_user_defined_function_list_result_dict = sql_user_defined_function_list_result_instance.to_dict()
# create an instance of SqlUserDefinedFunctionListResult from a dict
sql_user_defined_function_list_result_from_dict = SqlUserDefinedFunctionListResult.from_dict(sql_user_defined_function_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


