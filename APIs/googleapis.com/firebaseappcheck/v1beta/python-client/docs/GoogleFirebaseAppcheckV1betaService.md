# GoogleFirebaseAppcheckV1betaService

The enforcement configuration for a Firebase service supported by App Check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforcement_mode** | **str** | Required. The App Check enforcement mode for this service. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232. | [optional] 
**name** | **str** | Required. The relative resource name of the service configuration object, in the format: &#x60;&#x60;&#x60; projects/{project_number}/services/{service_id} &#x60;&#x60;&#x60; Note that the &#x60;service_id&#x60; element must be a supported service ID. Currently, the following service IDs are supported: * &#x60;firebasestorage.googleapis.com&#x60; (Cloud Storage for Firebase) * &#x60;firebasedatabase.googleapis.com&#x60; (Firebase Realtime Database) * &#x60;firestore.googleapis.com&#x60; (Cloud Firestore) * &#x60;identitytoolkit.googleapis.com&#x60; (Firebase Authentication with Identity Platform) | [optional] 
**update_time** | **str** | Output only. Timestamp when this service configuration object was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_service import GoogleFirebaseAppcheckV1betaService

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaService from a JSON string
google_firebase_appcheck_v1beta_service_instance = GoogleFirebaseAppcheckV1betaService.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaService.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_service_dict = google_firebase_appcheck_v1beta_service_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaService from a dict
google_firebase_appcheck_v1beta_service_from_dict = GoogleFirebaseAppcheckV1betaService.from_dict(google_firebase_appcheck_v1beta_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


