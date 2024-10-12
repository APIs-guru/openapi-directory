# GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest

Request message for the ExchangeAppAttestAssertion method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact** | **bytearray** | Required. The artifact returned by a previous call to ExchangeAppAttestAttestation. | [optional] 
**assertion** | **bytearray** | Required. The CBOR-encoded assertion returned by the client-side App Attest API. | [optional] 
**challenge** | **bytearray** | Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge. | [optional] 
**limited_use** | **bool** | Specifies whether this attestation is for use in a *limited use* (&#x60;true&#x60;) or *session based* (&#x60;false&#x60;) context. To enable this attestation to be used with the *replay protection* feature, set this to &#x60;true&#x60;. The default value is &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request import GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest from a JSON string
google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request_instance = GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request_dict = google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest from a dict
google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request_from_dict = GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest.from_dict(google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


