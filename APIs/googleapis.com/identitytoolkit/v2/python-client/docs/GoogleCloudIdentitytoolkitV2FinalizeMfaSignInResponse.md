# GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse

FinalizeMfaSignIn response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_token** | **str** | ID token for the authenticated user. | [optional] 
**phone_auth_info** | [**GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo**](GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo.md) |  | [optional] 
**refresh_token** | **str** | Refresh token for the authenticated user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_response import GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse from a JSON string
google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_response_instance = GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_response_dict = google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_response_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse from a dict
google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_response_from_dict = GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse.from_dict(google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


