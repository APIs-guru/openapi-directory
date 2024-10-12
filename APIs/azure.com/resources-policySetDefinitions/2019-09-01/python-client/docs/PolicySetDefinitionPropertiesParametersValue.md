# PolicySetDefinitionPropertiesParametersValue

The definition of a parameter that can be provided to the policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[object]** | The allowed values for the parameter. | [optional] 
**default_value** | **object** | The default value for the parameter if no value is provided. | [optional] 
**metadata** | **Dict[str, object]** | General metadata for the parameter. | [optional] 
**type** | **str** | The data type of the parameter. | [optional] 

## Example

```python
from openapi_client.models.policy_set_definition_properties_parameters_value import PolicySetDefinitionPropertiesParametersValue

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySetDefinitionPropertiesParametersValue from a JSON string
policy_set_definition_properties_parameters_value_instance = PolicySetDefinitionPropertiesParametersValue.from_json(json)
# print the JSON string representation of the object
print(PolicySetDefinitionPropertiesParametersValue.to_json())

# convert the object into a dict
policy_set_definition_properties_parameters_value_dict = policy_set_definition_properties_parameters_value_instance.to_dict()
# create an instance of PolicySetDefinitionPropertiesParametersValue from a dict
policy_set_definition_properties_parameters_value_from_dict = PolicySetDefinitionPropertiesParametersValue.from_dict(policy_set_definition_properties_parameters_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


