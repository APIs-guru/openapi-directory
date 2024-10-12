# GoogleFirebaseAppdistroV1AabInfo

Android App Bundle (AAB) information for a Firebase app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_state** | **str** | App bundle integration state. Only valid for android apps. | [optional] 
**name** | **str** | The name of the &#x60;AabInfo&#x60; resource. Format: &#x60;projects/{project_number}/apps/{app}/aabInfo&#x60; | [optional] 
**test_certificate** | [**GoogleFirebaseAppdistroV1TestCertificate**](GoogleFirebaseAppdistroV1TestCertificate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_aab_info import GoogleFirebaseAppdistroV1AabInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1AabInfo from a JSON string
google_firebase_appdistro_v1_aab_info_instance = GoogleFirebaseAppdistroV1AabInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1AabInfo.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_aab_info_dict = google_firebase_appdistro_v1_aab_info_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1AabInfo from a dict
google_firebase_appdistro_v1_aab_info_from_dict = GoogleFirebaseAppdistroV1AabInfo.from_dict(google_firebase_appdistro_v1_aab_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


