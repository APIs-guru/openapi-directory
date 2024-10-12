# CreatePolicyInputProperties

Policy creation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_input** | [**PolicyProviderSpecificInput**](PolicyProviderSpecificInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_policy_input_properties import CreatePolicyInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePolicyInputProperties from a JSON string
create_policy_input_properties_instance = CreatePolicyInputProperties.from_json(json)
# print the JSON string representation of the object
print(CreatePolicyInputProperties.to_json())

# convert the object into a dict
create_policy_input_properties_dict = create_policy_input_properties_instance.to_dict()
# create an instance of CreatePolicyInputProperties from a dict
create_policy_input_properties_from_dict = CreatePolicyInputProperties.from_dict(create_policy_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


