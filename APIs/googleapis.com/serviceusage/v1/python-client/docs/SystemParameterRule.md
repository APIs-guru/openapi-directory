# SystemParameterRule

Define a system parameter rule mapping system parameter definitions to methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**List[SystemParameter]**](SystemParameter.md) | Define parameters. Multiple names may be defined for a parameter. For a given method call, only one of them should be used. If multiple names are used the behavior is implementation-dependent. If none of the specified names are present the behavior is parameter-dependent. | [optional] 
**selector** | **str** | Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all methods in all APIs. Refer to selector for syntax details. | [optional] 

## Example

```python
from openapi_client.models.system_parameter_rule import SystemParameterRule

# TODO update the JSON string below
json = "{}"
# create an instance of SystemParameterRule from a JSON string
system_parameter_rule_instance = SystemParameterRule.from_json(json)
# print the JSON string representation of the object
print(SystemParameterRule.to_json())

# convert the object into a dict
system_parameter_rule_dict = system_parameter_rule_instance.to_dict()
# create an instance of SystemParameterRule from a dict
system_parameter_rule_from_dict = SystemParameterRule.from_dict(system_parameter_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


