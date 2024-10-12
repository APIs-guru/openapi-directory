# GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo

Mfa request info specific to TOTP auth for FinalizeMfa.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_info** | **str** | An opaque string that represents the enrollment session. | [optional] 
**verification_code** | **str** | User-entered verification code. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_totp_enrollment_request_info import GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo from a JSON string
google_cloud_identitytoolkit_v2_finalize_mfa_totp_enrollment_request_info_instance = GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_finalize_mfa_totp_enrollment_request_info_dict = google_cloud_identitytoolkit_v2_finalize_mfa_totp_enrollment_request_info_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo from a dict
google_cloud_identitytoolkit_v2_finalize_mfa_totp_enrollment_request_info_from_dict = GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo.from_dict(google_cloud_identitytoolkit_v2_finalize_mfa_totp_enrollment_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


