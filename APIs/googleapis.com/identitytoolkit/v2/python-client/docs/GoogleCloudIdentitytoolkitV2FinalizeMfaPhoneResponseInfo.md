# GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo

Phone Verification info for a FinalizeMfa response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_verification_proof** | **str** | Android only. Long-lived replacement for valid code tied to android device. | [optional] 
**android_verification_proof_expire_time** | **str** | Android only. Expiration time of verification proof in seconds. | [optional] 
**phone_number** | **str** | For Android verification proof. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_phone_response_info import GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo from a JSON string
google_cloud_identitytoolkit_v2_finalize_mfa_phone_response_info_instance = GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_finalize_mfa_phone_response_info_dict = google_cloud_identitytoolkit_v2_finalize_mfa_phone_response_info_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo from a dict
google_cloud_identitytoolkit_v2_finalize_mfa_phone_response_info_from_dict = GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo.from_dict(google_cloud_identitytoolkit_v2_finalize_mfa_phone_response_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


