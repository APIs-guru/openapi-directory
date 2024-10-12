# ScalarFunctionProperties

The properties that are associated with a scalar function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScalarFunctionConfiguration**](ScalarFunctionConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.scalar_function_properties import ScalarFunctionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScalarFunctionProperties from a JSON string
scalar_function_properties_instance = ScalarFunctionProperties.from_json(json)
# print the JSON string representation of the object
print(ScalarFunctionProperties.to_json())

# convert the object into a dict
scalar_function_properties_dict = scalar_function_properties_instance.to_dict()
# create an instance of ScalarFunctionProperties from a dict
scalar_function_properties_from_dict = ScalarFunctionProperties.from_dict(scalar_function_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


