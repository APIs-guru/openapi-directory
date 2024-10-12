# SetAccountInfoResponse

Respone of setting the account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the user. | [optional] 
**email** | **str** | The email of the user. | [optional] 
**email_verified** | **bool** | If email has been verified. | [optional] 
**expires_in** | **str** | If idToken is STS id token, then this field will be expiration time of STS id token in seconds. | [optional] 
**id_token** | **str** | The Gitkit id token to login the newly sign up user. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#SetAccountInfoResponse\&quot;. | [optional] [default to 'identitytoolkit#SetAccountInfoResponse']
**local_id** | **str** | The local ID of the user. | [optional] 
**new_email** | **str** | The new email the user attempts to change to. | [optional] 
**password_hash** | **bytearray** | The user&#39;s hashed password. | [optional] 
**photo_url** | **str** | The photo url of the user. | [optional] 
**provider_user_info** | [**List[SetAccountInfoResponseProviderUserInfoInner]**](SetAccountInfoResponseProviderUserInfoInner.md) | The user&#39;s profiles at the associated IdPs. | [optional] 
**refresh_token** | **str** | If idToken is STS id token, then this field will be refresh token. | [optional] 

## Example

```python
from openapi_client.models.set_account_info_response import SetAccountInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SetAccountInfoResponse from a JSON string
set_account_info_response_instance = SetAccountInfoResponse.from_json(json)
# print the JSON string representation of the object
print(SetAccountInfoResponse.to_json())

# convert the object into a dict
set_account_info_response_dict = set_account_info_response_instance.to_dict()
# create an instance of SetAccountInfoResponse from a dict
set_account_info_response_from_dict = SetAccountInfoResponse.from_dict(set_account_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


