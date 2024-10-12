# SignupNewUserResponse

Response of signing up new user, creating anonymous user or anonymous user reauth.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the user. | [optional] 
**email** | **str** | The email of the user. | [optional] 
**expires_in** | **str** | If idToken is STS id token, then this field will be expiration time of STS id token in seconds. | [optional] 
**id_token** | **str** | The Gitkit id token to login the newly sign up user. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#SignupNewUserResponse\&quot;. | [optional] [default to 'identitytoolkit#SignupNewUserResponse']
**local_id** | **str** | The RP local ID of the user. | [optional] 
**refresh_token** | **str** | If idToken is STS id token, then this field will be refresh token. | [optional] 

## Example

```python
from openapi_client.models.signup_new_user_response import SignupNewUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SignupNewUserResponse from a JSON string
signup_new_user_response_instance = SignupNewUserResponse.from_json(json)
# print the JSON string representation of the object
print(SignupNewUserResponse.to_json())

# convert the object into a dict
signup_new_user_response_dict = signup_new_user_response_instance.to_dict()
# create an instance of SignupNewUserResponse from a dict
signup_new_user_response_from_dict = SignupNewUserResponse.from_dict(signup_new_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


