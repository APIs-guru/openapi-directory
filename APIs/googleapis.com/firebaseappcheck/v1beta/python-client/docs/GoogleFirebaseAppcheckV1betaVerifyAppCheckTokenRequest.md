# GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest

Request message for the VerifyAppCheckToken method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_check_token** | **str** | Required. The App Check token to verify. App Check tokens exchanged from the SafetyNet provider are not supported; an HTTP 400 error will be returned. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_verify_app_check_token_request import GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest from a JSON string
google_firebase_appcheck_v1beta_verify_app_check_token_request_instance = GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_verify_app_check_token_request_dict = google_firebase_appcheck_v1beta_verify_app_check_token_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest from a dict
google_firebase_appcheck_v1beta_verify_app_check_token_request_from_dict = GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest.from_dict(google_firebase_appcheck_v1beta_verify_app_check_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


