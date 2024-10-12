# PasswordValidationPolicy

Database instance local user password validation policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complexity** | **str** | The complexity of the password. | [optional] 
**disallow_compromised_credentials** | **bool** | This field is deprecated and will be removed in a future version of the API. | [optional] 
**disallow_username_substring** | **bool** | Disallow username as a part of the password. | [optional] 
**enable_password_policy** | **bool** | Whether the password policy is enabled or not. | [optional] 
**min_length** | **int** | Minimum number of characters allowed. | [optional] 
**password_change_interval** | **str** | Minimum interval after which the password can be changed. This flag is only supported for PostgreSQL. | [optional] 
**reuse_interval** | **int** | Number of previous passwords that cannot be reused. | [optional] 

## Example

```python
from openapi_client.models.password_validation_policy import PasswordValidationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordValidationPolicy from a JSON string
password_validation_policy_instance = PasswordValidationPolicy.from_json(json)
# print the JSON string representation of the object
print(PasswordValidationPolicy.to_json())

# convert the object into a dict
password_validation_policy_dict = password_validation_policy_instance.to_dict()
# create an instance of PasswordValidationPolicy from a dict
password_validation_policy_from_dict = PasswordValidationPolicy.from_dict(password_validation_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


