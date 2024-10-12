# GooglePlayDeveloperReportingV1alpha1Track

A representation of a Play release track.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Readable identifier of the track. | [optional] 
**serving_releases** | [**List[GooglePlayDeveloperReportingV1alpha1Release]**](GooglePlayDeveloperReportingV1alpha1Release.md) | Represents all active releases in the track. | [optional] 
**type** | **str** | The type of the track. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_track import GooglePlayDeveloperReportingV1alpha1Track

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1Track from a JSON string
google_play_developer_reporting_v1alpha1_track_instance = GooglePlayDeveloperReportingV1alpha1Track.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1Track.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_track_dict = google_play_developer_reporting_v1alpha1_track_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1Track from a dict
google_play_developer_reporting_v1alpha1_track_from_dict = GooglePlayDeveloperReportingV1alpha1Track.from_dict(google_play_developer_reporting_v1alpha1_track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


