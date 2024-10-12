# VerifyChallengeResponseResult

Result message for VerifiedAccess.VerifyChallengeResponse.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attested_device_id** | **str** | Attested device ID (ADID). | [optional] 
**customer_id** | **str** | Unique customer id that this device belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers | [optional] 
**device_enrollment_id** | **str** | Device enrollment id for ChromeOS devices. | [optional] 
**device_permanent_id** | **str** | Device permanent id is returned in this field (for the machine response only). | [optional] 
**device_signal** | **str** | Deprecated. Device signal in json string representation. Prefer using &#x60;device_signals&#x60; instead. | [optional] 
**device_signals** | [**DeviceSignals**](DeviceSignals.md) |  | [optional] 
**key_trust_level** | **str** | Device attested key trust level. | [optional] 
**profile_customer_id** | **str** | Unique customer id that this profile belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers | [optional] 
**profile_key_trust_level** | **str** | Profile attested key trust level. | [optional] 
**signed_public_key_and_challenge** | **str** | Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses) | [optional] 
**virtual_device_id** | **str** | Virtual device id of the device. The definition of virtual device id is platform-specific. | [optional] 
**virtual_profile_id** | **str** | The ID of a profile on the device. | [optional] 

## Example

```python
from openapi_client.models.verify_challenge_response_result import VerifyChallengeResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyChallengeResponseResult from a JSON string
verify_challenge_response_result_instance = VerifyChallengeResponseResult.from_json(json)
# print the JSON string representation of the object
print(VerifyChallengeResponseResult.to_json())

# convert the object into a dict
verify_challenge_response_result_dict = verify_challenge_response_result_instance.to_dict()
# create an instance of VerifyChallengeResponseResult from a dict
verify_challenge_response_result_from_dict = VerifyChallengeResponseResult.from_dict(verify_challenge_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


