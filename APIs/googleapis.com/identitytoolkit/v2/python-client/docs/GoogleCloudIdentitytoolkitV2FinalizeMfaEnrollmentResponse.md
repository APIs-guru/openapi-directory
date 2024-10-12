# GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse

FinalizeMfaEnrollment response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_token** | **str** | ID token updated to reflect MFA enrollment. | [optional] 
**phone_auth_info** | [**GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo**](GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo.md) |  | [optional] 
**refresh_token** | **str** | Refresh token updated to reflect MFA enrollment. | [optional] 
**totp_auth_info** | **object** | Mfa response info specific to TOTP auth for FinalizeMfa. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response import GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse from a JSON string
google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response_instance = GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response_dict = google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse from a dict
google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response_from_dict = GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse.from_dict(google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


