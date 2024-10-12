# GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest

Finishes enrolling a second factor for the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name which is entered by users to distinguish between different second factors with same type or different type. | [optional] 
**id_token** | **str** | Required. ID token. | [optional] 
**phone_verification_info** | [**GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo**](GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo.md) |  | [optional] 
**tenant_id** | **str** | The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. | [optional] 
**totp_verification_info** | [**GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo**](GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request import GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest from a JSON string
google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request_instance = GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request_dict = google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest from a dict
google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request_from_dict = GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest.from_dict(google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


