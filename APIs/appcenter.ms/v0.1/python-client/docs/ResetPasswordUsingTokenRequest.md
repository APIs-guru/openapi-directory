# ResetPasswordUsingTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_password** | **str** | The new password. Needs to be at least 8 characters long and contain at least one lower- and one uppercase letter. | 
**token** | **str** | The reset password token that was sent to the user | 

## Example

```python
from openapi_client.models.reset_password_using_token_request import ResetPasswordUsingTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResetPasswordUsingTokenRequest from a JSON string
reset_password_using_token_request_instance = ResetPasswordUsingTokenRequest.from_json(json)
# print the JSON string representation of the object
print(ResetPasswordUsingTokenRequest.to_json())

# convert the object into a dict
reset_password_using_token_request_dict = reset_password_using_token_request_instance.to_dict()
# create an instance of ResetPasswordUsingTokenRequest from a dict
reset_password_using_token_request_from_dict = ResetPasswordUsingTokenRequest.from_dict(reset_password_using_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


