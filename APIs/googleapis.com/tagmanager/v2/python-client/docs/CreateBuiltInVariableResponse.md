# CreateBuiltInVariableResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in_variable** | [**List[BuiltInVariable]**](BuiltInVariable.md) | List of created built-in variables. | [optional] 

## Example

```python
from openapi_client.models.create_built_in_variable_response import CreateBuiltInVariableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBuiltInVariableResponse from a JSON string
create_built_in_variable_response_instance = CreateBuiltInVariableResponse.from_json(json)
# print the JSON string representation of the object
print(CreateBuiltInVariableResponse.to_json())

# convert the object into a dict
create_built_in_variable_response_dict = create_built_in_variable_response_instance.to_dict()
# create an instance of CreateBuiltInVariableResponse from a dict
create_built_in_variable_response_from_dict = CreateBuiltInVariableResponse.from_dict(create_built_in_variable_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


