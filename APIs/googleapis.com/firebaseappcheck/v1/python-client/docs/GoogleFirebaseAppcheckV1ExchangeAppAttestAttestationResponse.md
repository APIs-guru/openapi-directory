# GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse

Response message for the ExchangeAppAttestAttestation method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_check_token** | [**GoogleFirebaseAppcheckV1AppCheckToken**](GoogleFirebaseAppcheckV1AppCheckToken.md) |  | [optional] 
**artifact** | **bytearray** | An artifact that can be used in future calls to ExchangeAppAttestAssertion. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_exchange_app_attest_attestation_response import GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse from a JSON string
google_firebase_appcheck_v1_exchange_app_attest_attestation_response_instance = GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_exchange_app_attest_attestation_response_dict = google_firebase_appcheck_v1_exchange_app_attest_attestation_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse from a dict
google_firebase_appcheck_v1_exchange_app_attest_attestation_response_from_dict = GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse.from_dict(google_firebase_appcheck_v1_exchange_app_attest_attestation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


