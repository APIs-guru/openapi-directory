# GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | The error code associated with (only set on \&quot;FAILURE\&quot;) | [optional] 
**message** | **str** | Any additional context for the given upload status (e.g. error message) Meant to be displayed to the client | [optional] 
**release** | [**GoogleFirebaseAppdistroV1alphaRelease**](GoogleFirebaseAppdistroV1alphaRelease.md) |  | [optional] 
**status** | **str** | The status of the upload | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_get_upload_status_response import GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse from a JSON string
google_firebase_appdistro_v1alpha_get_upload_status_response_instance = GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_get_upload_status_response_dict = google_firebase_appdistro_v1alpha_get_upload_status_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse from a dict
google_firebase_appdistro_v1alpha_get_upload_status_response_from_dict = GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse.from_dict(google_firebase_appdistro_v1alpha_get_upload_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


