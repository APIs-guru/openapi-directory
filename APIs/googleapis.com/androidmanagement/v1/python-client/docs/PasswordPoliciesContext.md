# PasswordPoliciesContext

Additional context for non-compliance related to password policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password_policy_scope** | **str** | The scope of non-compliant password. | [optional] 

## Example

```python
from openapi_client.models.password_policies_context import PasswordPoliciesContext

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordPoliciesContext from a JSON string
password_policies_context_instance = PasswordPoliciesContext.from_json(json)
# print the JSON string representation of the object
print(PasswordPoliciesContext.to_json())

# convert the object into a dict
password_policies_context_dict = password_policies_context_instance.to_dict()
# create an instance of PasswordPoliciesContext from a dict
password_policies_context_from_dict = PasswordPoliciesContext.from_dict(password_policies_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


