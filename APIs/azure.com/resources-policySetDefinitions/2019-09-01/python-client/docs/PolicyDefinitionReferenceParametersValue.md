# PolicyDefinitionReferenceParametersValue

The value of a parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **object** | The value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.policy_definition_reference_parameters_value import PolicyDefinitionReferenceParametersValue

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDefinitionReferenceParametersValue from a JSON string
policy_definition_reference_parameters_value_instance = PolicyDefinitionReferenceParametersValue.from_json(json)
# print the JSON string representation of the object
print(PolicyDefinitionReferenceParametersValue.to_json())

# convert the object into a dict
policy_definition_reference_parameters_value_dict = policy_definition_reference_parameters_value_instance.to_dict()
# create an instance of PolicyDefinitionReferenceParametersValue from a dict
policy_definition_reference_parameters_value_from_dict = PolicyDefinitionReferenceParametersValue.from_dict(policy_definition_reference_parameters_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


