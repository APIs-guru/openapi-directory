# GoogleFirebaseAppdistroV1ListReleasesResponse

The response message for `ListReleases`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A short-lived token, which can be sent as &#x60;pageToken&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**releases** | [**List[GoogleFirebaseAppdistroV1Release]**](GoogleFirebaseAppdistroV1Release.md) | The releases | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_list_releases_response import GoogleFirebaseAppdistroV1ListReleasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1ListReleasesResponse from a JSON string
google_firebase_appdistro_v1_list_releases_response_instance = GoogleFirebaseAppdistroV1ListReleasesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1ListReleasesResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_list_releases_response_dict = google_firebase_appdistro_v1_list_releases_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1ListReleasesResponse from a dict
google_firebase_appdistro_v1_list_releases_response_from_dict = GoogleFirebaseAppdistroV1ListReleasesResponse.from_dict(google_firebase_appdistro_v1_list_releases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


