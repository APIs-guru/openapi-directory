# GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest

The request message for `BatchDeleteReleases`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Required. The names of the release resources to delete. Format: &#x60;projects/{project_number}/apps/{app_id}/releases/{release_id}&#x60; A maximum of 100 releases can be deleted per request. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_batch_delete_releases_request import GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest from a JSON string
google_firebase_appdistro_v1_batch_delete_releases_request_instance = GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_batch_delete_releases_request_dict = google_firebase_appdistro_v1_batch_delete_releases_request_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest from a dict
google_firebase_appdistro_v1_batch_delete_releases_request_from_dict = GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest.from_dict(google_firebase_appdistro_v1_batch_delete_releases_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


