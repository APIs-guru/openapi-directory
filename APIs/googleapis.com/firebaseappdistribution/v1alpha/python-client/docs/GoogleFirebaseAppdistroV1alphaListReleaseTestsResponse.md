# GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse

The response message for `ListReleaseTests`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A short-lived token, which can be sent as &#x60;pageToken&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**release_tests** | [**List[GoogleFirebaseAppdistroV1alphaReleaseTest]**](GoogleFirebaseAppdistroV1alphaReleaseTest.md) | The tests listed. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_list_release_tests_response import GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse from a JSON string
google_firebase_appdistro_v1alpha_list_release_tests_response_instance = GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_list_release_tests_response_dict = google_firebase_appdistro_v1alpha_list_release_tests_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse from a dict
google_firebase_appdistro_v1alpha_list_release_tests_response_from_dict = GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse.from_dict(google_firebase_appdistro_v1alpha_list_release_tests_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


