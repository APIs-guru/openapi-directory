# GooglePlayDeveloperReportingV1beta1Release

A representation of an app release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Readable identifier of the release. | [optional] 
**version_codes** | **List[str]** | The version codes contained in this release. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_release import GooglePlayDeveloperReportingV1beta1Release

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1Release from a JSON string
google_play_developer_reporting_v1beta1_release_instance = GooglePlayDeveloperReportingV1beta1Release.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1Release.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_release_dict = google_play_developer_reporting_v1beta1_release_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1Release from a dict
google_play_developer_reporting_v1beta1_release_from_dict = GooglePlayDeveloperReportingV1beta1Release.from_dict(google_play_developer_reporting_v1beta1_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


