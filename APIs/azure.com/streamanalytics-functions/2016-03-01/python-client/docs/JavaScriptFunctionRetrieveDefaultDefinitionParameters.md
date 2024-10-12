# JavaScriptFunctionRetrieveDefaultDefinitionParameters

The parameters needed to retrieve the default function definition for a JavaScript function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binding_retrieval_properties** | [**JavaScriptFunctionBindingRetrievalProperties**](JavaScriptFunctionBindingRetrievalProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.java_script_function_retrieve_default_definition_parameters import JavaScriptFunctionRetrieveDefaultDefinitionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of JavaScriptFunctionRetrieveDefaultDefinitionParameters from a JSON string
java_script_function_retrieve_default_definition_parameters_instance = JavaScriptFunctionRetrieveDefaultDefinitionParameters.from_json(json)
# print the JSON string representation of the object
print(JavaScriptFunctionRetrieveDefaultDefinitionParameters.to_json())

# convert the object into a dict
java_script_function_retrieve_default_definition_parameters_dict = java_script_function_retrieve_default_definition_parameters_instance.to_dict()
# create an instance of JavaScriptFunctionRetrieveDefaultDefinitionParameters from a dict
java_script_function_retrieve_default_definition_parameters_from_dict = JavaScriptFunctionRetrieveDefaultDefinitionParameters.from_dict(java_script_function_retrieve_default_definition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


