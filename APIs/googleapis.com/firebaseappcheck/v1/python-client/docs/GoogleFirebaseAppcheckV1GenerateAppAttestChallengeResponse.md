# GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse

Response message for the GenerateAppAttestChallenge method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**challenge** | **bytearray** | A one-time use challenge for the client to pass to the App Attest API. | [optional] 
**ttl** | **str** | The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_generate_app_attest_challenge_response import GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse from a JSON string
google_firebase_appcheck_v1_generate_app_attest_challenge_response_instance = GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_generate_app_attest_challenge_response_dict = google_firebase_appcheck_v1_generate_app_attest_challenge_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse from a dict
google_firebase_appcheck_v1_generate_app_attest_challenge_response_from_dict = GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse.from_dict(google_firebase_appcheck_v1_generate_app_attest_challenge_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


