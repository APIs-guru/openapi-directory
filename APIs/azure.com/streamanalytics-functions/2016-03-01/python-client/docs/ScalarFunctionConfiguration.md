# ScalarFunctionConfiguration

Describes the configuration of the scalar function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binding** | [**FunctionBinding**](FunctionBinding.md) |  | [optional] 
**inputs** | [**List[FunctionInput]**](FunctionInput.md) | A list of inputs describing the parameters of the function. | [optional] 
**output** | [**FunctionOutput**](FunctionOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.scalar_function_configuration import ScalarFunctionConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ScalarFunctionConfiguration from a JSON string
scalar_function_configuration_instance = ScalarFunctionConfiguration.from_json(json)
# print the JSON string representation of the object
print(ScalarFunctionConfiguration.to_json())

# convert the object into a dict
scalar_function_configuration_dict = scalar_function_configuration_instance.to_dict()
# create an instance of ScalarFunctionConfiguration from a dict
scalar_function_configuration_from_dict = ScalarFunctionConfiguration.from_dict(scalar_function_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


