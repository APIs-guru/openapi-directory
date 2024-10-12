# GoogleFirebaseAppdistroV1alphaAabCertificate

App bundle test certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_hash_md5** | **str** | MD5 hash of the certificate used to resign the AAB | [optional] 
**certificate_hash_sha1** | **str** | SHA1 hash of the certificate used to resign the AAB | [optional] 
**certificate_hash_sha256** | **str** | SHA256 hash of the certificate used to resign the AAB | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_aab_certificate import GoogleFirebaseAppdistroV1alphaAabCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaAabCertificate from a JSON string
google_firebase_appdistro_v1alpha_aab_certificate_instance = GoogleFirebaseAppdistroV1alphaAabCertificate.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaAabCertificate.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_aab_certificate_dict = google_firebase_appdistro_v1alpha_aab_certificate_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaAabCertificate from a dict
google_firebase_appdistro_v1alpha_aab_certificate_from_dict = GoogleFirebaseAppdistroV1alphaAabCertificate.from_dict(google_firebase_appdistro_v1alpha_aab_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


