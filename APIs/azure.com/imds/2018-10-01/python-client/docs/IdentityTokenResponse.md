# IdentityTokenResponse

This is the response from the Identity_GetToken operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | This is the requested access token. The app can use this token to authenticate to the sink resource. | [optional] 
**client_id** | **str** | This is the client_id specified in the request, if any. | [optional] 
**expires_in** | **str** | This is how long the access token is valid (in seconds). | [optional] 
**expires_on** | **str** | This is the time when the access token expires. The date is represented as the number of seconds from 1970-01-01T0:0:0Z UTC until the expiration time. This value is used to determine the lifetime of cached tokens. | [optional] 
**ext_expires_in** | **str** | This indicates the extended lifetime of the token. | [optional] 
**msi_res_id** | **str** | This is the msi_res_id specified in the request, if any. | [optional] 
**not_before** | **str** | This is the time when the access token becomes effective. The date is represented as the number of seconds from 1970-01-01T0:0:0Z UTC until the expiration time. | [optional] 
**object_id** | **str** | This is the object_id specified in the request, if any. | [optional] 
**resource** | **str** | This is the app ID URI of the sink resource. | [optional] 
**token_type** | **str** | This indicates the token type value. | [optional] 

## Example

```python
from openapi_client.models.identity_token_response import IdentityTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityTokenResponse from a JSON string
identity_token_response_instance = IdentityTokenResponse.from_json(json)
# print the JSON string representation of the object
print(IdentityTokenResponse.to_json())

# convert the object into a dict
identity_token_response_dict = identity_token_response_instance.to_dict()
# create an instance of IdentityTokenResponse from a dict
identity_token_response_from_dict = IdentityTokenResponse.from_dict(identity_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


