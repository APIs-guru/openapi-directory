# GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo

Mfa response info specific to TOTP auth for StartMfa.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finalize_enrollment_time** | **str** | The time by which the enrollment must finish. | [optional] 
**hashing_algorithm** | **str** | The hashing algorithm used to generate the verification code. | [optional] 
**period_sec** | **int** | Duration in seconds at which the verification code will change. | [optional] 
**session_info** | **str** | An encoded string that represents the enrollment session. | [optional] 
**shared_secret_key** | **str** | A base 32 encoded string that represents the shared TOTP secret. The base 32 encoding is the one specified by [RFC4648#section-6](https://datatracker.ietf.org/doc/html/rfc4648#section-6). (This is the same as the base 32 encoding from [RFC3548#section-5](https://datatracker.ietf.org/doc/html/rfc3548#section-5).) | [optional] 
**verification_code_length** | **int** | The length of the verification code that needs to be generated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_start_mfa_totp_enrollment_response_info import GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo from a JSON string
google_cloud_identitytoolkit_v2_start_mfa_totp_enrollment_response_info_instance = GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_start_mfa_totp_enrollment_response_info_dict = google_cloud_identitytoolkit_v2_start_mfa_totp_enrollment_response_info_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo from a dict
google_cloud_identitytoolkit_v2_start_mfa_totp_enrollment_response_info_from_dict = GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo.from_dict(google_cloud_identitytoolkit_v2_start_mfa_totp_enrollment_response_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


