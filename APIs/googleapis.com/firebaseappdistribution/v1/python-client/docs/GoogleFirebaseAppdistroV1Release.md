# GoogleFirebaseAppdistroV1Release

A release of a Firebase app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_download_uri** | **str** | Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file. | [optional] [readonly] 
**build_version** | **str** | Output only. Build version of the release. For an Android release, the build version is the &#x60;versionCode&#x60;. For an iOS release, the build version is the &#x60;CFBundleVersion&#x60;. | [optional] [readonly] 
**create_time** | **str** | Output only. The time the release was created. | [optional] [readonly] 
**display_version** | **str** | Output only. Display version of the release. For an Android release, the display version is the &#x60;versionName&#x60;. For an iOS release, the display version is the &#x60;CFBundleShortVersionString&#x60;. | [optional] [readonly] 
**firebase_console_uri** | **str** | Output only. A link to the Firebase console displaying a single release. | [optional] [readonly] 
**name** | **str** | The name of the release resource. Format: &#x60;projects/{project_number}/apps/{app_id}/releases/{release_id}&#x60; | [optional] 
**release_notes** | [**GoogleFirebaseAppdistroV1ReleaseNotes**](GoogleFirebaseAppdistroV1ReleaseNotes.md) |  | [optional] 
**testing_uri** | **str** | Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_release import GoogleFirebaseAppdistroV1Release

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1Release from a JSON string
google_firebase_appdistro_v1_release_instance = GoogleFirebaseAppdistroV1Release.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1Release.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_release_dict = google_firebase_appdistro_v1_release_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1Release from a dict
google_firebase_appdistro_v1_release_from_dict = GoogleFirebaseAppdistroV1Release.from_dict(google_firebase_appdistro_v1_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


