# GoogleFirebaseAppdistroV1UploadReleaseRequest

Request message for `UploadRelease`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob** | [**GdataMedia**](GdataMedia.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_upload_release_request import GoogleFirebaseAppdistroV1UploadReleaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1UploadReleaseRequest from a JSON string
google_firebase_appdistro_v1_upload_release_request_instance = GoogleFirebaseAppdistroV1UploadReleaseRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1UploadReleaseRequest.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_upload_release_request_dict = google_firebase_appdistro_v1_upload_release_request_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1UploadReleaseRequest from a dict
google_firebase_appdistro_v1_upload_release_request_from_dict = GoogleFirebaseAppdistroV1UploadReleaseRequest.from_dict(google_firebase_appdistro_v1_upload_release_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


