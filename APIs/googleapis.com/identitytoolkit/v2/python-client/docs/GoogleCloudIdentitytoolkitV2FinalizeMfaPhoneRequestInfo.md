# GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo

Phone Verification info for a FinalizeMfa request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_verification_proof** | **str** | Android only. Uses for \&quot;instant\&quot; phone number verification though GmsCore. | [optional] 
**code** | **str** | User-entered verification code. | [optional] 
**phone_number** | **str** | Required if Android verification proof is presented. | [optional] 
**session_info** | **str** | An opaque string that represents the enrollment session. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_phone_request_info import GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo from a JSON string
google_cloud_identitytoolkit_v2_finalize_mfa_phone_request_info_instance = GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_finalize_mfa_phone_request_info_dict = google_cloud_identitytoolkit_v2_finalize_mfa_phone_request_info_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo from a dict
google_cloud_identitytoolkit_v2_finalize_mfa_phone_request_info_from_dict = GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo.from_dict(google_cloud_identitytoolkit_v2_finalize_mfa_phone_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


