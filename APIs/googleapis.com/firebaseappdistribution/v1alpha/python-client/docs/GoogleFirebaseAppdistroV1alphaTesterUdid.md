# GoogleFirebaseAppdistroV1alphaTesterUdid

The UDIDs of a tester's iOS device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the tester&#39;s device | [optional] 
**platform** | **str** | The platform of the tester&#39;s device | [optional] 
**udid** | **str** | The UDID of the tester&#39;s device | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_tester_udid import GoogleFirebaseAppdistroV1alphaTesterUdid

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaTesterUdid from a JSON string
google_firebase_appdistro_v1alpha_tester_udid_instance = GoogleFirebaseAppdistroV1alphaTesterUdid.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaTesterUdid.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_tester_udid_dict = google_firebase_appdistro_v1alpha_tester_udid_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaTesterUdid from a dict
google_firebase_appdistro_v1alpha_tester_udid_from_dict = GoogleFirebaseAppdistroV1alphaTesterUdid.from_dict(google_firebase_appdistro_v1alpha_tester_udid_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


