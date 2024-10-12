# GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_version** | **str** | Optional. Ignored. Used to be build version of the app release if an instance identifier was provided for the release_id. | [optional] 
**display_version** | **str** | Optional. Ignored. Used to be display version of the app release if an instance identifier was provided for the release_id. | [optional] 
**emails** | **List[str]** | Optional. An email address which should get access to this release, for example rebeccahe@google.com | [optional] 
**group_ids** | **List[str]** | Optional. A repeated list of group aliases to enable access to a release for Note: This field is misnamed, but can&#39;t be changed because we need to maintain compatibility with old build tools | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_enable_access_on_release_request import GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest from a JSON string
google_firebase_appdistro_v1alpha_enable_access_on_release_request_instance = GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_enable_access_on_release_request_dict = google_firebase_appdistro_v1alpha_enable_access_on_release_request_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest from a dict
google_firebase_appdistro_v1alpha_enable_access_on_release_request_from_dict = GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest.from_dict(google_firebase_appdistro_v1alpha_enable_access_on_release_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


