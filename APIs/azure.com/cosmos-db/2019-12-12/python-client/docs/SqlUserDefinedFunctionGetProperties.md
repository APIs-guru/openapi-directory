# SqlUserDefinedFunctionGetProperties

The properties of an Azure Cosmos DB userDefinedFunction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**SqlUserDefinedFunctionGetPropertiesResource**](SqlUserDefinedFunctionGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.sql_user_defined_function_get_properties import SqlUserDefinedFunctionGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlUserDefinedFunctionGetProperties from a JSON string
sql_user_defined_function_get_properties_instance = SqlUserDefinedFunctionGetProperties.from_json(json)
# print the JSON string representation of the object
print(SqlUserDefinedFunctionGetProperties.to_json())

# convert the object into a dict
sql_user_defined_function_get_properties_dict = sql_user_defined_function_get_properties_instance.to_dict()
# create an instance of SqlUserDefinedFunctionGetProperties from a dict
sql_user_defined_function_get_properties_from_dict = SqlUserDefinedFunctionGetProperties.from_dict(sql_user_defined_function_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


