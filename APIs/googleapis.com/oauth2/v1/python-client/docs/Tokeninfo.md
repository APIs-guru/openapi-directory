# Tokeninfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Who is the intended audience for this token. In general the same as issued_to. | [optional] 
**email** | **str** | The email address of the user. Present only if the email scope is present in the request. | [optional] 
**email_verified** | **bool** | Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request. | [optional] 
**expires_in** | **int** | The expiry time of the token, as number of seconds left until expiry. | [optional] 
**issued_at** | **int** | The issue time of the token, as number of seconds. | [optional] 
**issued_to** | **str** | To whom was the token issued to. In general the same as audience. | [optional] 
**issuer** | **str** | Who issued the token. | [optional] 
**nonce** | **str** | Nonce of the id token. | [optional] 
**scope** | **str** | The space separated list of scopes granted to this token. | [optional] 
**user_id** | **str** | The obfuscated user id. | [optional] 
**verified_email** | **bool** | Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request. | [optional] 

## Example

```python
from openapi_client.models.tokeninfo import Tokeninfo

# TODO update the JSON string below
json = "{}"
# create an instance of Tokeninfo from a JSON string
tokeninfo_instance = Tokeninfo.from_json(json)
# print the JSON string representation of the object
print(Tokeninfo.to_json())

# convert the object into a dict
tokeninfo_dict = tokeninfo_instance.to_dict()
# create an instance of Tokeninfo from a dict
tokeninfo_from_dict = Tokeninfo.from_dict(tokeninfo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


