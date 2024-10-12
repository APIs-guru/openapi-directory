# GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse

Response containing the UDIDs of tester iOS devices in a project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tester_udids** | [**List[GoogleFirebaseAppdistroV1alphaTesterUdid]**](GoogleFirebaseAppdistroV1alphaTesterUdid.md) | The UDIDs of tester iOS devices in a project | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_get_tester_udids_response import GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse from a JSON string
google_firebase_appdistro_v1alpha_get_tester_udids_response_instance = GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_get_tester_udids_response_dict = google_firebase_appdistro_v1alpha_get_tester_udids_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse from a dict
google_firebase_appdistro_v1alpha_get_tester_udids_response_from_dict = GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse.from_dict(google_firebase_appdistro_v1alpha_get_tester_udids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


