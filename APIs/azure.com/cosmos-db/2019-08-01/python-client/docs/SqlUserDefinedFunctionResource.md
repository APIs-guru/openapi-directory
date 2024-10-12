# SqlUserDefinedFunctionResource

Cosmos DB SQL userDefinedFunction resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body of the User Defined Function | [optional] 
**id** | **str** | Name of the Cosmos DB SQL userDefinedFunction | 

## Example

```python
from openapi_client.models.sql_user_defined_function_resource import SqlUserDefinedFunctionResource

# TODO update the JSON string below
json = "{}"
# create an instance of SqlUserDefinedFunctionResource from a JSON string
sql_user_defined_function_resource_instance = SqlUserDefinedFunctionResource.from_json(json)
# print the JSON string representation of the object
print(SqlUserDefinedFunctionResource.to_json())

# convert the object into a dict
sql_user_defined_function_resource_dict = sql_user_defined_function_resource_instance.to_dict()
# create an instance of SqlUserDefinedFunctionResource from a dict
sql_user_defined_function_resource_from_dict = SqlUserDefinedFunctionResource.from_dict(sql_user_defined_function_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


