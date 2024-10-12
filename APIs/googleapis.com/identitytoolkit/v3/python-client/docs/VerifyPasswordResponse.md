# VerifyPasswordResponse

Request of verifying the password.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the user. | [optional] 
**email** | **str** | The email returned by the IdP. NOTE: The federated login user may not own the email. | [optional] 
**expires_in** | **str** | If idToken is STS id token, then this field will be expiration time of STS id token in seconds. | [optional] 
**id_token** | **str** | The GITKit token for authenticated user. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#VerifyPasswordResponse\&quot;. | [optional] [default to 'identitytoolkit#VerifyPasswordResponse']
**local_id** | **str** | The RP local ID if it&#39;s already been mapped to the IdP account identified by the federated ID. | [optional] 
**oauth_access_token** | **str** | The OAuth2 access token. | [optional] 
**oauth_authorization_code** | **str** | The OAuth2 authorization code. | [optional] 
**oauth_expire_in** | **int** | The lifetime in seconds of the OAuth2 access token. | [optional] 
**photo_url** | **str** | The URI of the user&#39;s photo at IdP | [optional] 
**refresh_token** | **str** | If idToken is STS id token, then this field will be refresh token. | [optional] 
**registered** | **bool** | Whether the email is registered. | [optional] 

## Example

```python
from openapi_client.models.verify_password_response import VerifyPasswordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyPasswordResponse from a JSON string
verify_password_response_instance = VerifyPasswordResponse.from_json(json)
# print the JSON string representation of the object
print(VerifyPasswordResponse.to_json())

# convert the object into a dict
verify_password_response_dict = verify_password_response_instance.to_dict()
# create an instance of VerifyPasswordResponse from a dict
verify_password_response_from_dict = VerifyPasswordResponse.from_dict(verify_password_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


