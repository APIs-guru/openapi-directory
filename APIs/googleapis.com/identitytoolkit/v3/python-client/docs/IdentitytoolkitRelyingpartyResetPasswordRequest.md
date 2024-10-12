# IdentitytoolkitRelyingpartyResetPasswordRequest

Request to reset the password.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the user. | [optional] 
**new_password** | **str** | The new password inputted by the user. | [optional] 
**old_password** | **str** | The old password inputted by the user. | [optional] 
**oob_code** | **str** | The confirmation code. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_reset_password_request import IdentitytoolkitRelyingpartyResetPasswordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyResetPasswordRequest from a JSON string
identitytoolkit_relyingparty_reset_password_request_instance = IdentitytoolkitRelyingpartyResetPasswordRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyResetPasswordRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_reset_password_request_dict = identitytoolkit_relyingparty_reset_password_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyResetPasswordRequest from a dict
identitytoolkit_relyingparty_reset_password_request_from_dict = IdentitytoolkitRelyingpartyResetPasswordRequest.from_dict(identitytoolkit_relyingparty_reset_password_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


