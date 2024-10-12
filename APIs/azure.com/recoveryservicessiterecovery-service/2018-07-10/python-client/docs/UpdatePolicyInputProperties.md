# UpdatePolicyInputProperties

Policy update properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replication_provider_settings** | [**PolicyProviderSpecificInput**](PolicyProviderSpecificInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_policy_input_properties import UpdatePolicyInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePolicyInputProperties from a JSON string
update_policy_input_properties_instance = UpdatePolicyInputProperties.from_json(json)
# print the JSON string representation of the object
print(UpdatePolicyInputProperties.to_json())

# convert the object into a dict
update_policy_input_properties_dict = update_policy_input_properties_instance.to_dict()
# create an instance of UpdatePolicyInputProperties from a dict
update_policy_input_properties_from_dict = UpdatePolicyInputProperties.from_dict(update_policy_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


