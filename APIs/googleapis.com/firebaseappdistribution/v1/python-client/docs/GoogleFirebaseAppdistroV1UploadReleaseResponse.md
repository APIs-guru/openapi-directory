# GoogleFirebaseAppdistroV1UploadReleaseResponse

Response message for `UploadRelease`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release** | [**GoogleFirebaseAppdistroV1Release**](GoogleFirebaseAppdistroV1Release.md) |  | [optional] 
**result** | **str** | Result of upload release. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_upload_release_response import GoogleFirebaseAppdistroV1UploadReleaseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1UploadReleaseResponse from a JSON string
google_firebase_appdistro_v1_upload_release_response_instance = GoogleFirebaseAppdistroV1UploadReleaseResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1UploadReleaseResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_upload_release_response_dict = google_firebase_appdistro_v1_upload_release_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1UploadReleaseResponse from a dict
google_firebase_appdistro_v1_upload_release_response_from_dict = GoogleFirebaseAppdistroV1UploadReleaseResponse.from_dict(google_firebase_appdistro_v1_upload_release_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


