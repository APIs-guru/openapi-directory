# GoogleFirebaseAppdistroV1alphaApp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aab_certificate** | [**GoogleFirebaseAppdistroV1alphaAabCertificate**](GoogleFirebaseAppdistroV1alphaAabCertificate.md) |  | [optional] 
**aab_state** | **str** | App bundle state. Only valid for android apps. The app_view field in the request must be set to FULL in order for this to be populated. | [optional] 
**app_id** | **str** | Firebase gmp app id | [optional] 
**bundle_id** | **str** | Bundle identifier | [optional] 
**contact_email** | **str** | Developer contact email for testers to reach out to about privacy or support issues. | [optional] 
**platform** | **str** | iOS or Android | [optional] 
**project_number** | **str** | Project number of the Firebase project, for example 300830567303. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_app import GoogleFirebaseAppdistroV1alphaApp

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaApp from a JSON string
google_firebase_appdistro_v1alpha_app_instance = GoogleFirebaseAppdistroV1alphaApp.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaApp.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_app_dict = google_firebase_appdistro_v1alpha_app_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaApp from a dict
google_firebase_appdistro_v1alpha_app_from_dict = GoogleFirebaseAppdistroV1alphaApp.from_dict(google_firebase_appdistro_v1alpha_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


