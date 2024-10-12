# IdentitytoolkitRelyingpartyEmailLinkSigninRequest

Request to sign in with email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the user. | [optional] 
**id_token** | **str** | Token for linking flow. | [optional] 
**oob_code** | **str** | The confirmation code. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_email_link_signin_request import IdentitytoolkitRelyingpartyEmailLinkSigninRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyEmailLinkSigninRequest from a JSON string
identitytoolkit_relyingparty_email_link_signin_request_instance = IdentitytoolkitRelyingpartyEmailLinkSigninRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyEmailLinkSigninRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_email_link_signin_request_dict = identitytoolkit_relyingparty_email_link_signin_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyEmailLinkSigninRequest from a dict
identitytoolkit_relyingparty_email_link_signin_request_from_dict = IdentitytoolkitRelyingpartyEmailLinkSigninRequest.from_dict(identitytoolkit_relyingparty_email_link_signin_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


