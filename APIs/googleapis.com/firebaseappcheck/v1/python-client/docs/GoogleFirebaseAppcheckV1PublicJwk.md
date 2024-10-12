# GoogleFirebaseAppcheckV1PublicJwk

A JWK as specified by [section 4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4) and [section 6.3.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **str** | See [section 4.4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.4). | [optional] 
**e** | **str** | See [section 6.3.1.2 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.2). | [optional] 
**kid** | **str** | See [section 4.5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.5). | [optional] 
**kty** | **str** | See [section 4.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.1). | [optional] 
**n** | **str** | See [section 6.3.1.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.1). | [optional] 
**use** | **str** | See [section 4.2 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.2). | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_public_jwk import GoogleFirebaseAppcheckV1PublicJwk

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1PublicJwk from a JSON string
google_firebase_appcheck_v1_public_jwk_instance = GoogleFirebaseAppcheckV1PublicJwk.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1PublicJwk.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_public_jwk_dict = google_firebase_appcheck_v1_public_jwk_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1PublicJwk from a dict
google_firebase_appcheck_v1_public_jwk_from_dict = GoogleFirebaseAppcheckV1PublicJwk.from_dict(google_firebase_appcheck_v1_public_jwk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


