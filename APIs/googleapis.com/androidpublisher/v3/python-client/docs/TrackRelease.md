# TrackRelease

A release within a track.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_targeting** | [**CountryTargeting**](CountryTargeting.md) |  | [optional] 
**in_app_update_priority** | **int** | In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates. | [optional] 
**name** | **str** | The release name. Not required to be unique. If not set, the name is generated from the APK&#39;s version_name. If the release contains multiple APKs, the name is generated from the date. | [optional] 
**release_notes** | [**List[LocalizedText]**](LocalizedText.md) | A description of what is new in this release. | [optional] 
**status** | **str** | The status of the release. | [optional] 
**user_fraction** | **float** | Fraction of users who are eligible for a staged release. 0 &lt; fraction &lt; 1. Can only be set when status is \&quot;inProgress\&quot; or \&quot;halted\&quot;. | [optional] 
**version_codes** | **List[str]** | Version codes of all APKs in the release. Must include version codes to retain from previous releases. | [optional] 

## Example

```python
from openapi_client.models.track_release import TrackRelease

# TODO update the JSON string below
json = "{}"
# create an instance of TrackRelease from a JSON string
track_release_instance = TrackRelease.from_json(json)
# print the JSON string representation of the object
print(TrackRelease.to_json())

# convert the object into a dict
track_release_dict = track_release_instance.to_dict()
# create an instance of TrackRelease from a dict
track_release_from_dict = TrackRelease.from_dict(track_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


