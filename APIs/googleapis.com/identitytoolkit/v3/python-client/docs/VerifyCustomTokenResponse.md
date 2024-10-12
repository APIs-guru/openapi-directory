# VerifyCustomTokenResponse

Response from verifying a custom token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_in** | **str** | If idToken is STS id token, then this field will be expiration time of STS id token in seconds. | [optional] 
**id_token** | **str** | The GITKit token for authenticated user. | [optional] 
**is_new_user** | **bool** | True if it&#39;s a new user sign-in, false if it&#39;s a returning user. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#VerifyCustomTokenResponse\&quot;. | [optional] [default to 'identitytoolkit#VerifyCustomTokenResponse']
**refresh_token** | **str** | If idToken is STS id token, then this field will be refresh token. | [optional] 

## Example

```python
from openapi_client.models.verify_custom_token_response import VerifyCustomTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyCustomTokenResponse from a JSON string
verify_custom_token_response_instance = VerifyCustomTokenResponse.from_json(json)
# print the JSON string representation of the object
print(VerifyCustomTokenResponse.to_json())

# convert the object into a dict
verify_custom_token_response_dict = verify_custom_token_response_instance.to_dict()
# create an instance of VerifyCustomTokenResponse from a dict
verify_custom_token_response_from_dict = VerifyCustomTokenResponse.from_dict(verify_custom_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


