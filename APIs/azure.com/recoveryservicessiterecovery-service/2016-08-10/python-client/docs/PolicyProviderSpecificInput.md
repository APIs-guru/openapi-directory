# PolicyProviderSpecificInput

Base class for provider specific input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.policy_provider_specific_input import PolicyProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyProviderSpecificInput from a JSON string
policy_provider_specific_input_instance = PolicyProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(PolicyProviderSpecificInput.to_json())

# convert the object into a dict
policy_provider_specific_input_dict = policy_provider_specific_input_instance.to_dict()
# create an instance of PolicyProviderSpecificInput from a dict
policy_provider_specific_input_from_dict = PolicyProviderSpecificInput.from_dict(policy_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


