# GoogleFirebaseAppcheckV1betaAppCheckToken

Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation_token** | **str** | An App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. | [optional] 
**token** | **str** | An App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. | [optional] 
**ttl** | **str** | The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaAppCheckToken from a JSON string
google_firebase_appcheck_v1beta_app_check_token_instance = GoogleFirebaseAppcheckV1betaAppCheckToken.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaAppCheckToken.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_app_check_token_dict = google_firebase_appcheck_v1beta_app_check_token_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaAppCheckToken from a dict
google_firebase_appcheck_v1beta_app_check_token_from_dict = GoogleFirebaseAppcheckV1betaAppCheckToken.from_dict(google_firebase_appcheck_v1beta_app_check_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


