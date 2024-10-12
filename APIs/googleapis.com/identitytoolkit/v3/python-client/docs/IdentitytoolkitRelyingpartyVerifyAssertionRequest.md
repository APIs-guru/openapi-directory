# IdentitytoolkitRelyingpartyVerifyAssertionRequest

Request to verify the IDP assertion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_create** | **bool** | When it&#39;s true, automatically creates a new account if the user doesn&#39;t exist. When it&#39;s false, allows existing user to sign in normally and throws exception if the user doesn&#39;t exist. | [optional] 
**delegated_project_number** | **str** | GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. | [optional] 
**id_token** | **str** | The GITKit token of the authenticated user. | [optional] 
**instance_id** | **str** | Instance id token of the app. | [optional] 
**pending_id_token** | **str** | The GITKit token for the non-trusted IDP pending to be confirmed by the user. | [optional] 
**post_body** | **str** | The post body if the request is a HTTP POST. | [optional] 
**request_uri** | **str** | The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP. | [optional] 
**return_idp_credential** | **bool** | Whether return 200 and IDP credential rather than throw exception when federated id is already linked. | [optional] 
**return_refresh_token** | **bool** | Whether to return refresh tokens. | [optional] 
**return_secure_token** | **bool** | Whether return sts id token and refresh token instead of gitkit token. | [optional] 
**session_id** | **str** | Session ID, which should match the one in previous createAuthUri request. | [optional] 
**tenant_id** | **str** | For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. | [optional] 
**tenant_project_number** | **str** | Tenant project number to be used for idp discovery. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_verify_assertion_request import IdentitytoolkitRelyingpartyVerifyAssertionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyVerifyAssertionRequest from a JSON string
identitytoolkit_relyingparty_verify_assertion_request_instance = IdentitytoolkitRelyingpartyVerifyAssertionRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyVerifyAssertionRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_verify_assertion_request_dict = identitytoolkit_relyingparty_verify_assertion_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyVerifyAssertionRequest from a dict
identitytoolkit_relyingparty_verify_assertion_request_from_dict = IdentitytoolkitRelyingpartyVerifyAssertionRequest.from_dict(identitytoolkit_relyingparty_verify_assertion_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


