# CreatePolicyInput

Protection profile input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreatePolicyInputProperties**](CreatePolicyInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_policy_input import CreatePolicyInput

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePolicyInput from a JSON string
create_policy_input_instance = CreatePolicyInput.from_json(json)
# print the JSON string representation of the object
print(CreatePolicyInput.to_json())

# convert the object into a dict
create_policy_input_dict = create_policy_input_instance.to_dict()
# create an instance of CreatePolicyInput from a dict
create_policy_input_from_dict = CreatePolicyInput.from_dict(create_policy_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


