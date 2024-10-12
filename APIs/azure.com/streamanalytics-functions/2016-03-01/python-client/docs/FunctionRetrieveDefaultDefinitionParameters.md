# FunctionRetrieveDefaultDefinitionParameters

Parameters used to specify the type of function to retrieve the default definition for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binding_type** | **str** | Indicates the function binding type. | [optional] 

## Example

```python
from openapi_client.models.function_retrieve_default_definition_parameters import FunctionRetrieveDefaultDefinitionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionRetrieveDefaultDefinitionParameters from a JSON string
function_retrieve_default_definition_parameters_instance = FunctionRetrieveDefaultDefinitionParameters.from_json(json)
# print the JSON string representation of the object
print(FunctionRetrieveDefaultDefinitionParameters.to_json())

# convert the object into a dict
function_retrieve_default_definition_parameters_dict = function_retrieve_default_definition_parameters_instance.to_dict()
# create an instance of FunctionRetrieveDefaultDefinitionParameters from a dict
function_retrieve_default_definition_parameters_from_dict = FunctionRetrieveDefaultDefinitionParameters.from_dict(function_retrieve_default_definition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


