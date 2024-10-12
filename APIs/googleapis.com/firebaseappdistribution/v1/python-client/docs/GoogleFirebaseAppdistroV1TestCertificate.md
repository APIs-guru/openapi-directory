# GoogleFirebaseAppdistroV1TestCertificate

App bundle test certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash_md5** | **str** | Hex string of MD5 hash of the test certificate used to resign the AAB | [optional] 
**hash_sha1** | **str** | Hex string of SHA1 hash of the test certificate used to resign the AAB | [optional] 
**hash_sha256** | **str** | Hex string of SHA256 hash of the test certificate used to resign the AAB | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_test_certificate import GoogleFirebaseAppdistroV1TestCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1TestCertificate from a JSON string
google_firebase_appdistro_v1_test_certificate_instance = GoogleFirebaseAppdistroV1TestCertificate.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1TestCertificate.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_test_certificate_dict = google_firebase_appdistro_v1_test_certificate_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1TestCertificate from a dict
google_firebase_appdistro_v1_test_certificate_from_dict = GoogleFirebaseAppdistroV1TestCertificate.from_dict(google_firebase_appdistro_v1_test_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


