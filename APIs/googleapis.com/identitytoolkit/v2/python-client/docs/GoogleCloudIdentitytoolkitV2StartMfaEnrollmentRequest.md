# GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest

Sends MFA enrollment verification SMS for a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_token** | **str** | Required. User&#39;s ID token. | [optional] 
**phone_enrollment_info** | [**GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo**](GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo.md) |  | [optional] 
**tenant_id** | **str** | The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. | [optional] 
**totp_enrollment_info** | **object** | Mfa request info specific to TOTP auth for StartMfa. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_start_mfa_enrollment_request import GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest from a JSON string
google_cloud_identitytoolkit_v2_start_mfa_enrollment_request_instance = GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_start_mfa_enrollment_request_dict = google_cloud_identitytoolkit_v2_start_mfa_enrollment_request_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest from a dict
google_cloud_identitytoolkit_v2_start_mfa_enrollment_request_from_dict = GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest.from_dict(google_cloud_identitytoolkit_v2_start_mfa_enrollment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


