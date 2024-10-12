# GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse

Response message for the VerifyAppCheckToken method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**already_consumed** | **bool** | Whether this token was already consumed. If this is the first time this method has seen the given App Check token, this field will be omitted from the response. The given token will then be marked as &#x60;already_consumed&#x60; (set to &#x60;true&#x60;) for all future invocations of this method for that token. Note that if the given App Check token is invalid, an HTTP 403 error is returned instead of a response containing this field, regardless whether the token was already consumed. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_verify_app_check_token_response import GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse from a JSON string
google_firebase_appcheck_v1beta_verify_app_check_token_response_instance = GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_verify_app_check_token_response_dict = google_firebase_appcheck_v1beta_verify_app_check_token_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse from a dict
google_firebase_appcheck_v1beta_verify_app_check_token_response_from_dict = GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse.from_dict(google_firebase_appcheck_v1beta_verify_app_check_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


