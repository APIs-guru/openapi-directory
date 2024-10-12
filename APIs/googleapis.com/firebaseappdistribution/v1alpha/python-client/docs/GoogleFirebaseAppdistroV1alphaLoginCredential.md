# GoogleFirebaseAppdistroV1alphaLoginCredential

Login credential for automated tests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_hints** | [**GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints**](GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints.md) |  | [optional] 
**google** | **bool** | Optional. Are these credentials for Google? | [optional] 
**password** | **str** | Optional. Password for automated tests | [optional] 
**username** | **str** | Optional. Username for automated tests | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_login_credential import GoogleFirebaseAppdistroV1alphaLoginCredential

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaLoginCredential from a JSON string
google_firebase_appdistro_v1alpha_login_credential_instance = GoogleFirebaseAppdistroV1alphaLoginCredential.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaLoginCredential.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_login_credential_dict = google_firebase_appdistro_v1alpha_login_credential_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaLoginCredential from a dict
google_firebase_appdistro_v1alpha_login_credential_from_dict = GoogleFirebaseAppdistroV1alphaLoginCredential.from_dict(google_firebase_appdistro_v1alpha_login_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


