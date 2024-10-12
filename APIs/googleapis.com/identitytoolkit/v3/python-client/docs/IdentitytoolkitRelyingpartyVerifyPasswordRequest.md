# IdentitytoolkitRelyingpartyVerifyPasswordRequest

Request to verify the password.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**captcha_challenge** | **str** | The captcha challenge. | [optional] 
**captcha_response** | **str** | Response to the captcha. | [optional] 
**delegated_project_number** | **str** | GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. | [optional] 
**email** | **str** | The email of the user. | [optional] 
**id_token** | **str** | The GITKit token of the authenticated user. | [optional] 
**instance_id** | **str** | Instance id token of the app. | [optional] 
**password** | **str** | The password inputed by the user. | [optional] 
**pending_id_token** | **str** | The GITKit token for the non-trusted IDP, which is to be confirmed by the user. | [optional] 
**return_secure_token** | **bool** | Whether return sts id token and refresh token instead of gitkit token. | [optional] 
**tenant_id** | **str** | For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. | [optional] 
**tenant_project_number** | **str** | Tenant project number to be used for idp discovery. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_verify_password_request import IdentitytoolkitRelyingpartyVerifyPasswordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyVerifyPasswordRequest from a JSON string
identitytoolkit_relyingparty_verify_password_request_instance = IdentitytoolkitRelyingpartyVerifyPasswordRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyVerifyPasswordRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_verify_password_request_dict = identitytoolkit_relyingparty_verify_password_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyVerifyPasswordRequest from a dict
identitytoolkit_relyingparty_verify_password_request_from_dict = IdentitytoolkitRelyingpartyVerifyPasswordRequest.from_dict(identitytoolkit_relyingparty_verify_password_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


