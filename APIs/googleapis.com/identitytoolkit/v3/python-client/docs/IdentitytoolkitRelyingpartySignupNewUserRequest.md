# IdentitytoolkitRelyingpartySignupNewUserRequest

Request to signup new user, create anonymous user or anonymous user reauth.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**captcha_challenge** | **str** | The captcha challenge. | [optional] 
**captcha_response** | **str** | Response to the captcha. | [optional] 
**disabled** | **bool** | Whether to disable the user. Only can be used by service account. | [optional] 
**display_name** | **str** | The name of the user. | [optional] 
**email** | **str** | The email of the user. | [optional] 
**email_verified** | **bool** | Mark the email as verified or not. Only can be used by service account. | [optional] 
**id_token** | **str** | The GITKit token of the authenticated user. | [optional] 
**instance_id** | **str** | Instance id token of the app. | [optional] 
**local_id** | **str** | Privileged caller can create user with specified user id. | [optional] 
**password** | **str** | The new password of the user. | [optional] 
**phone_number** | **str** | Privileged caller can create user with specified phone number. | [optional] 
**photo_url** | **str** | The photo url of the user. | [optional] 
**tenant_id** | **str** | For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. | [optional] 
**tenant_project_number** | **str** | Tenant project number to be used for idp discovery. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_signup_new_user_request import IdentitytoolkitRelyingpartySignupNewUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartySignupNewUserRequest from a JSON string
identitytoolkit_relyingparty_signup_new_user_request_instance = IdentitytoolkitRelyingpartySignupNewUserRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartySignupNewUserRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_signup_new_user_request_dict = identitytoolkit_relyingparty_signup_new_user_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartySignupNewUserRequest from a dict
identitytoolkit_relyingparty_signup_new_user_request_from_dict = IdentitytoolkitRelyingpartySignupNewUserRequest.from_dict(identitytoolkit_relyingparty_signup_new_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


