# UserPasswordValidationPolicy

User level password validation policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_failed_attempts** | **int** | Number of failed login attempts allowed before user get locked. | [optional] 
**enable_failed_attempts_check** | **bool** | If true, failed login attempts check will be enabled. | [optional] 
**enable_password_verification** | **bool** | If true, the user must specify the current password before changing the password. This flag is supported only for MySQL. | [optional] 
**password_expiration_duration** | **str** | Expiration duration after password is updated. | [optional] 
**status** | [**PasswordStatus**](PasswordStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_password_validation_policy import UserPasswordValidationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of UserPasswordValidationPolicy from a JSON string
user_password_validation_policy_instance = UserPasswordValidationPolicy.from_json(json)
# print the JSON string representation of the object
print(UserPasswordValidationPolicy.to_json())

# convert the object into a dict
user_password_validation_policy_dict = user_password_validation_policy_instance.to_dict()
# create an instance of UserPasswordValidationPolicy from a dict
user_password_validation_policy_from_dict = UserPasswordValidationPolicy.from_dict(user_password_validation_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


