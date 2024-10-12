# GoogleCloudIdentitytoolkitV2StartMfaSignInRequest

Starts multi-factor sign-in by sending the multi-factor auth challenge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfa_enrollment_id** | **str** | Required. MFA enrollment id from the user&#39;s list of current MFA enrollments. | [optional] 
**mfa_pending_credential** | **str** | Required. Pending credential from first factor sign-in. | [optional] 
**phone_sign_in_info** | [**GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo**](GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo.md) |  | [optional] 
**tenant_id** | **str** | The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_start_mfa_sign_in_request import GoogleCloudIdentitytoolkitV2StartMfaSignInRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaSignInRequest from a JSON string
google_cloud_identitytoolkit_v2_start_mfa_sign_in_request_instance = GoogleCloudIdentitytoolkitV2StartMfaSignInRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2StartMfaSignInRequest.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_start_mfa_sign_in_request_dict = google_cloud_identitytoolkit_v2_start_mfa_sign_in_request_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaSignInRequest from a dict
google_cloud_identitytoolkit_v2_start_mfa_sign_in_request_from_dict = GoogleCloudIdentitytoolkitV2StartMfaSignInRequest.from_dict(google_cloud_identitytoolkit_v2_start_mfa_sign_in_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


