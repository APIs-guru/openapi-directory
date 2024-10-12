# VerifyChallengeResponseResult

Result message for VerifiedAccess.VerifyChallengeResponse.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attested_device_id** | **str** | Attested device id (ADID) of the device, read from the verified data. | [optional] 
**device_enrollment_id** | **str** | Device enrollment id is returned in this field (for the machine response only). | [optional] 
**device_permanent_id** | **str** | Device permanent id is returned in this field (for the machine response only). | [optional] 
**signed_public_key_and_challenge** | **str** | Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses) | [optional] 
**verification_output** | **str** | For EMCert check, device permanent id is returned here. For EUCert check, signed_public_key_and_challenge [base64 encoded] is returned if present, otherwise empty string is returned. This field is deprecated, please use device_permanent_id or signed_public_key_and_challenge fields. | [optional] 

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


