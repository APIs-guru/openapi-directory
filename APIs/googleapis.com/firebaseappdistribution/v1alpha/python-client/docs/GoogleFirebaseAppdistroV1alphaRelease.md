# GoogleFirebaseAppdistroV1alphaRelease

Proto defining a release object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_version** | **str** | Release build version | [optional] 
**display_version** | **str** | Release version | [optional] 
**distributed_at** | **str** | Timestamp when the release was created | [optional] 
**id** | **str** | Release Id | [optional] 
**instance_id** | **str** | Instance id of the release | [optional] 
**last_activity_at** | **str** | Last activity timestamp | [optional] 
**open_invitation_count** | **int** | Number of testers who have open invitations for the release | [optional] 
**received_at** | **str** | unused.  | [optional] 
**release_notes_summary** | **str** | Release notes summary | [optional] 
**tester_count** | **int** | Count of testers added to the release | [optional] 
**tester_with_install_count** | **int** | Number of testers who have installed the release | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_release import GoogleFirebaseAppdistroV1alphaRelease

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaRelease from a JSON string
google_firebase_appdistro_v1alpha_release_instance = GoogleFirebaseAppdistroV1alphaRelease.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaRelease.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_release_dict = google_firebase_appdistro_v1alpha_release_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaRelease from a dict
google_firebase_appdistro_v1alpha_release_from_dict = GoogleFirebaseAppdistroV1alphaRelease.from_dict(google_firebase_appdistro_v1alpha_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


