# UpdatePolicyInput

Update policy input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdatePolicyInputProperties**](UpdatePolicyInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_policy_input import UpdatePolicyInput

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePolicyInput from a JSON string
update_policy_input_instance = UpdatePolicyInput.from_json(json)
# print the JSON string representation of the object
print(UpdatePolicyInput.to_json())

# convert the object into a dict
update_policy_input_dict = update_policy_input_instance.to_dict()
# create an instance of UpdatePolicyInput from a dict
update_policy_input_from_dict = UpdatePolicyInput.from_dict(update_policy_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


