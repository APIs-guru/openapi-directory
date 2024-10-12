# GoogleFirebaseAppcheckV1DebugToken

A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. A human readable display name used to identify this debug token. | [optional] 
**name** | **str** | Required. The relative resource name of the debug token, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} &#x60;&#x60;&#x60; | [optional] 
**token** | **str** | Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_debug_token import GoogleFirebaseAppcheckV1DebugToken

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1DebugToken from a JSON string
google_firebase_appcheck_v1_debug_token_instance = GoogleFirebaseAppcheckV1DebugToken.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1DebugToken.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_debug_token_dict = google_firebase_appcheck_v1_debug_token_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1DebugToken from a dict
google_firebase_appcheck_v1_debug_token_from_dict = GoogleFirebaseAppcheckV1DebugToken.from_dict(google_firebase_appcheck_v1_debug_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


