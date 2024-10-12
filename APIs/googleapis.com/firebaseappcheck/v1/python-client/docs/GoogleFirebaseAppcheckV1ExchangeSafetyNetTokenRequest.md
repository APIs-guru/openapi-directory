# GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest

Request message for the ExchangeSafetyNetToken method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**safety_net_token** | **str** | Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_exchange_safety_net_token_request import GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest from a JSON string
google_firebase_appcheck_v1_exchange_safety_net_token_request_instance = GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_exchange_safety_net_token_request_dict = google_firebase_appcheck_v1_exchange_safety_net_token_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest from a dict
google_firebase_appcheck_v1_exchange_safety_net_token_request_from_dict = GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest.from_dict(google_firebase_appcheck_v1_exchange_safety_net_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


