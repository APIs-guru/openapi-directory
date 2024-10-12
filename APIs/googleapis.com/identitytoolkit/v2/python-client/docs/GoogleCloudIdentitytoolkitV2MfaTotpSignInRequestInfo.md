# GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo

TOTP verification info for FinalizeMfaSignInRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verification_code** | **str** | User-entered verification code. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_mfa_totp_sign_in_request_info import GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo from a JSON string
google_cloud_identitytoolkit_v2_mfa_totp_sign_in_request_info_instance = GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_mfa_totp_sign_in_request_info_dict = google_cloud_identitytoolkit_v2_mfa_totp_sign_in_request_info_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo from a dict
google_cloud_identitytoolkit_v2_mfa_totp_sign_in_request_info_from_dict = GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo.from_dict(google_cloud_identitytoolkit_v2_mfa_totp_sign_in_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


