# GoogleFirebaseAppcheckV1PublicJwkSet

The currently active set of public keys that can be used to verify App Check tokens. This object is a JWK set as specified by [section 5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). For security, the response **must not** be cached for longer than six hours.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[GoogleFirebaseAppcheckV1PublicJwk]**](GoogleFirebaseAppcheckV1PublicJwk.md) | The set of public keys. See [section 5.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_public_jwk_set import GoogleFirebaseAppcheckV1PublicJwkSet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1PublicJwkSet from a JSON string
google_firebase_appcheck_v1_public_jwk_set_instance = GoogleFirebaseAppcheckV1PublicJwkSet.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1PublicJwkSet.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_public_jwk_set_dict = google_firebase_appcheck_v1_public_jwk_set_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1PublicJwkSet from a dict
google_firebase_appcheck_v1_public_jwk_set_from_dict = GoogleFirebaseAppcheckV1PublicJwkSet.from_dict(google_firebase_appcheck_v1_public_jwk_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


