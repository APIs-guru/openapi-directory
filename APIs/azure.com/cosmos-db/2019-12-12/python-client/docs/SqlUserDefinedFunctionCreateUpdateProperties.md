# SqlUserDefinedFunctionCreateUpdateProperties

Properties to create and update Azure Cosmos DB userDefinedFunction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **Dict[str, str]** | CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are \&quot;If-Match\&quot;, \&quot;If-None-Match\&quot;, \&quot;Session-Token\&quot; and \&quot;Throughput\&quot; | 
**resource** | [**SqlUserDefinedFunctionResource**](SqlUserDefinedFunctionResource.md) |  | 

## Example

```python
from openapi_client.models.sql_user_defined_function_create_update_properties import SqlUserDefinedFunctionCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlUserDefinedFunctionCreateUpdateProperties from a JSON string
sql_user_defined_function_create_update_properties_instance = SqlUserDefinedFunctionCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(SqlUserDefinedFunctionCreateUpdateProperties.to_json())

# convert the object into a dict
sql_user_defined_function_create_update_properties_dict = sql_user_defined_function_create_update_properties_instance.to_dict()
# create an instance of SqlUserDefinedFunctionCreateUpdateProperties from a dict
sql_user_defined_function_create_update_properties_from_dict = SqlUserDefinedFunctionCreateUpdateProperties.from_dict(sql_user_defined_function_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


