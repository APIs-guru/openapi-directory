# GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo

App Verification info for a StartMfa request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_retrieval_info** | [**GoogleCloudIdentitytoolkitV2AutoRetrievalInfo**](GoogleCloudIdentitytoolkitV2AutoRetrievalInfo.md) |  | [optional] 
**ios_receipt** | **str** | iOS only. Receipt of successful app token validation with APNS. | [optional] 
**ios_secret** | **str** | iOS only. Secret delivered to iOS app via APNS. | [optional] 
**phone_number** | **str** | Required for enrollment. Phone number to be enrolled as MFA. | [optional] 
**play_integrity_token** | **str** | Android only. Used to assert application identity in place of a recaptcha token (or safety net token). A Play Integrity Token can be generated via the [PlayIntegrity API] (https://developer.android.com/google/play/integrity) with applying SHA256 to the &#x60;phone_number&#x60; field as the nonce. | [optional] 
**recaptcha_token** | **str** | Web only. Recaptcha solution. | [optional] 
**safety_net_token** | **str** | Android only. Used to assert application identity in place of a recaptcha token. A SafetyNet Token can be generated via the [SafetyNet Android Attestation API](https://developer.android.com/training/safetynet/attestation.html), with the Base64 encoding of the &#x60;phone_number&#x60; field as the nonce. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_start_mfa_phone_request_info import GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo from a JSON string
google_cloud_identitytoolkit_v2_start_mfa_phone_request_info_instance = GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_start_mfa_phone_request_info_dict = google_cloud_identitytoolkit_v2_start_mfa_phone_request_info_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo from a dict
google_cloud_identitytoolkit_v2_start_mfa_phone_request_info_from_dict = GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo.from_dict(google_cloud_identitytoolkit_v2_start_mfa_phone_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


