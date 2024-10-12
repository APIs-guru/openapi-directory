# EmailLinkSigninResponse

Response of email signIn.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The user&#39;s email. | [optional] 
**expires_in** | **str** | Expiration time of STS id token in seconds. | [optional] 
**id_token** | **str** | The STS id token to login the newly signed in user. | [optional] 
**is_new_user** | **bool** | Whether the user is new. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#EmailLinkSigninResponse\&quot;. | [optional] [default to 'identitytoolkit#EmailLinkSigninResponse']
**local_id** | **str** | The RP local ID of the user. | [optional] 
**refresh_token** | **str** | The refresh token for the signed in user. | [optional] 

## Example

```python
from openapi_client.models.email_link_signin_response import EmailLinkSigninResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailLinkSigninResponse from a JSON string
email_link_signin_response_instance = EmailLinkSigninResponse.from_json(json)
# print the JSON string representation of the object
print(EmailLinkSigninResponse.to_json())

# convert the object into a dict
email_link_signin_response_dict = email_link_signin_response_instance.to_dict()
# create an instance of EmailLinkSigninResponse from a dict
email_link_signin_response_from_dict = EmailLinkSigninResponse.from_dict(email_link_signin_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


